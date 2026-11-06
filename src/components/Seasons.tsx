import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { seasons, type Episode } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import EpisodeCard from './EpisodeCard';
import { RailButtons } from './Rail';

export default function Seasons() {
  const [active, setActive] = useState(0);
  const [playingEpisode, setPlayingEpisode] = useState<Episode | null>(null);
  const season = seasons[active];
  const rail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playingEpisode) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPlayingEpisode(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [playingEpisode]);

  return (
    <>
      <SectionHeading
        kicker={`${seasons.length} Seasons`}
        title="My Journey"
        aside={<p className="max-w-xs text-sm text-mist">Every stage of the resume, told as a season — select one to see its episodes.</p>}
      />

      {/* season selector */}
      <div className="rail gutter mb-8 flex gap-2 overflow-x-auto" role="tablist" aria-label="Seasons">
        {seasons.map((s, i) => (
          <button
            key={s.number}
            role="tab"
            aria-selected={i === active}
            type="button"
            onClick={() => {
              setActive(i);
              rail.current?.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`relative shrink-0 rounded-full px-4 py-2.5 text-left transition ${i === active ? 'text-ink' : 'text-mist hover:text-bone'}`}
          >
            {i === active && <motion.span layoutId="season-pill" className="absolute inset-0 rounded-full bg-bone" transition={{ duration: 0.5, ease: EASE }} />}
            <span className="relative block text-[10px] font-bold tracking-[0.24em]">SEASON {String(s.number).padStart(2, '0')}</span>
            <span className="relative block whitespace-nowrap text-sm font-semibold">{s.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={season.number}
          initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="gutter mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
              <span className="text-outline mr-3">S{String(season.number).padStart(2, '0')}</span>
              {season.title}
            </h3>
            <span className="text-sm text-mist">
              {season.period} · {season.episodes.length} {season.episodes.length === 1 ? 'Episode' : 'Episodes'}
            </span>
          </div>
          <p className="gutter max-w-3xl text-[15px] leading-relaxed text-bone/75">{season.synopsis}</p>

          <div className="group/rail relative">
            <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto py-8 [perspective:1200px]">
              {season.episodes.map((e, i) => (
                <EpisodeCard key={e.code} episode={e} index={i} onPlay={setPlayingEpisode} />
              ))}
            </div>
            <RailButtons rail={rail} />
          </div>
        </motion.div>
      </AnimatePresence>
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {playingEpisode?.videoUrl && (
              <motion.div
                className="fixed inset-0 z-[9999] grid h-[100dvh] w-screen place-items-center overflow-y-auto bg-black/70 p-3 backdrop-blur-xl sm:p-6 md:p-10"
                role="dialog"
                aria-modal="true"
                aria-label={playingEpisode.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPlayingEpisode(null)}
              >
                <motion.div
                  className="relative w-[min(94vw,1100px)] rounded-2xl bg-[#08090d] p-2 shadow-[0_24px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/15 sm:p-3"
                  initial={{ scale: 0.96, y: 12 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.96, y: 12 }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    aria-label="Close video"
                    onClick={() => setPlayingEpisode(null)}
                    className="absolute -right-1 -top-11 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-bone transition hover:bg-white/20 sm:-right-2 sm:-top-12"
                  >
                    ×
                  </button>
                  <EpisodeVideo url={playingEpisode.videoUrl} posterUrl={playingEpisode.posterUrl} title={playingEpisode.title} />
                  <p className="px-1 pb-1 pt-3 text-center font-display text-xl tracking-wide text-bone sm:text-2xl">{playingEpisode.title}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

function EpisodeVideo({ url, posterUrl, title }: { url: string; posterUrl?: string; title: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const player = useRef<HTMLDivElement>(null);
  const [blocked, setBlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;

    const startPlayback = () => {
      setReady(true);
      element.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
    };

    if (element.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      startPlayback();
      return;
    }

    element.addEventListener('canplay', startPlayback, { once: true });
    return () => element.removeEventListener('canplay', startPlayback);
  }, [url]);

  const togglePlayback = () => {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      element.play().then(() => {
        setPaused(false);
        setBlocked(false);
      }).catch(() => setBlocked(true));
    } else {
      element.pause();
      setPaused(true);
    }
  };

  const seek = (seconds: number) => {
    const element = video.current;
    if (!element) return;
    element.currentTime = Math.max(0, Math.min(element.duration || Infinity, element.currentTime + seconds));
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    player.current?.requestFullscreen();
  };

  return (
    <div
      ref={player}
      className="video-player relative w-full overflow-hidden rounded-lg bg-black shadow-2xl ring-1 ring-white/15 sm:rounded-xl"
      style={{ aspectRatio: '16 / 9' }}
    >
      {posterUrl && !ready && <img src={posterUrl} alt="" className="absolute inset-0 z-0 h-full w-full object-contain" />}
      <video
        ref={video}
        className="relative z-[1] block h-full w-full bg-black object-contain"
        src={url}
        poster={posterUrl}
        width="1280"
        height="720"
        playsInline
        preload="auto"
        onLoadedData={() => setReady(true)}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        onError={() => setBlocked(true)}
      />
      {ready && !blocked && (
        <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-center gap-2 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-3 pb-3 pt-10 text-bone sm:justify-start sm:gap-3 sm:px-5 sm:pb-5">
          <button type="button" aria-label="Skip back 10 seconds" onClick={() => seek(-10)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-white/25 sm:h-10 sm:w-10">
            ↶<span className="absolute ml-0 mt-0 text-[9px] font-bold">10</span>
          </button>
          <button type="button" aria-label={paused ? 'Play video' : 'Pause video'} onClick={togglePlayback} className="flex h-10 w-10 items-center justify-center rounded-full bg-bone text-sm text-ink transition hover:bg-white sm:h-11 sm:w-11">
            {paused ? '▶' : 'Ⅱ'}
          </button>
          <button type="button" aria-label="Skip forward 10 seconds" onClick={() => seek(10)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-white/25 sm:h-10 sm:w-10">
            ↷<span className="absolute ml-0 mt-0 text-[9px] font-bold">10</span>
          </button>
          <button type="button" aria-label="Toggle fullscreen" onClick={toggleFullscreen} className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-white/25 sm:h-10 sm:w-10">
            ⛶
          </button>
        </div>
      )}
      {blocked && (
        <button
          type="button"
          onClick={() => {
            video.current?.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
          }}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-bone px-5 py-3 font-semibold text-ink shadow-xl transition hover:bg-white sm:px-6"
        >
          Play video
          <span className="sr-only"> {title}</span>
        </button>
      )}
    </div>
  );
}
