/** Central portfolio data for Md Faizan Ahmad. */

export type Palette = { from: string; via: string; to: string; accent: string };

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

export const profile = {
  fullName: 'Md Faizan Ahmad',
  displayName: 'Md Faizan Ahmad',
  firstName: 'FAIZAN',
  seriesTag: 'THE SERIES',
  originalLabel: 'A FAIZAN ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'AI / ML', 'Web Development'],
  intro:
    'Passionate about web development, I specialize in front-end development with a creative touch. Currently pursuing undergraduate studies from IIT Patna with a strong foundation in programming, data analysis and web development. I enjoy solving real-world problems with Python, C++, React and Express.',
  location: 'India',
  email: 'mdfaizanahmad47@gmail.com',
  links: {
    linkedin: '',
    github: 'https://github.com/Mdfaizanahmad',
  },
  resumePdf: asset('Md_Faizan_Ahmad_Resume.pdf'),
  portrait: {
    src: asset('portrait-1100.webp'),
    srcSet: `${asset('portrait-420.webp')} 420w, ${asset('portrait-720.webp')} 720w, ${asset('portrait-1100.webp')} 1100w`,
    alt: 'Portrait of Md Faizan Ahmad',
  },
  interests: ['Artificial Intelligence', 'Full-Stack Development', 'Problem Solvings'],
};

export const education = [
  {
    school: 'Indian Institute of Technology (IIT) Patna',
    place: 'India',
    degree: 'UnderGraduation',
    period: ' ',
    score: '',
  },
  //{
   // school: '',
    //place: '',
    //degree: 'Bachelor of Technology — Computer Science Engineering',
    //period: '',
    //score: '',
  //},
];

export const experience = [
  {
    company: 'GUVI – HCL Pvt. Ltd. · in collaboration with IIT Patna',
    role: 'Full-Stack Development Trainee',
    place: 'India',
    period: 'July 2025 – September 2025',
    points: [
      'Completed structured training with mentor-guided, project-based learning.',
      'Gained hands-on exposure to full-stack development concepts and real-world problem-solving.',
      'Delivered assigned tasks and projects within defined timelines with a performance grade of A+ and score of 89.',
    ],
  },
  {
    company: 'Polytropic Services Pvt. Ltd.',
    role: 'Industrial Intern · Web Development',
    place: 'India',
    period: 'June 2025',
    points: [
      'Worked on practical web development tasks involving frontend and backend fundamentals.',
      'Applied theoretical concepts to real organizational project requirements.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'gate-pass-security',
    title: 'Gate Pass & Security',
    year: '2025',
    genre: 'Full-Stack • Security • Campus',
    logline: 'A digital campus access-control system replacing manual gate operations with secure, trackable workflows.',
    stack: ['React', 'Express', 'QR Codes', 'REST APIs'],
    build: [
      'Built a web-based gate pass system for secure student and visitor management.',
      'Created separate student, admin and security workflows for applications, approvals, verification and check-in/out.',
      'Added downloadable DOC/PDF logs, real-time campus monitoring and controlled purging of old records.',
    ],
    features: [
      'Student profiles and gate-pass applications',
      'QR-code and PIN-based access verification',
      'Admin approval and rejection dashboard',
      'Security check-in / check-out scanning',
      'Visitor and student log exports',
      'Old-record purge controls',
      'Installable mobile-friendly web app',
    ],
    metrics: [{ value: 'QR + PIN', label: 'access verification' }, { value: '3', label: 'role-based workflows' }, { value: 'DOC/PDF', label: 'log exports' }],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'convo-chatting-app',
    title: 'Convo',
    year: '2025',
    genre: 'Full-Stack • Real-Time',
    logline: 'A real-time chatting app for messages, media, files and updates.',
    stack: ['MERN Stack', 'JavaScript', 'REST APIs'],
    build: ['Built a full-stack social communication experience for connecting with friends.', 'Designed flows for instant messaging, media and file sharing, and user updates.'],
    features: ['Real-time conversations', 'Media and file sharing', 'Social updates', 'Secure user experience'],
    metrics: [{ value: 'MERN', label: 'full-stack build' }, { value: 'Real-time', label: 'messaging' }],
    palette: violet,
    motif: 'tenants',
  },
  {
    id: 'movie-ticket-booking',
    title: 'Movie Ticket Booking',
    year: '2025',
    genre: 'Full-Stack • Product',
    logline: 'A modern booking experience for browsing movies, showtimes and seats.',
    stack: ['React', 'Express', 'JavaScript'],
    build: ['Created a modern web application for booking movie tickets online.', 'Built an easy flow for browsing movies, checking showtimes, selecting seats and booking.'],
    features: ['Movie discovery', 'Showtime browsing', 'Seat selection', 'Online booking flow'],
    metrics: [{ value: '4-step', label: 'booking flow' }, { value: 'Responsive', label: 'interface' }],
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'ai-virtual-mouse',
    title: 'AI Virtual Mouse',
    year: '2025',
    genre: 'AI • Computer Vision',
    logline: 'A hands-free computer interaction system controlled through natural hand gestures.',
    stack: ['Python', 'Computer Vision', 'Machine Learning'],
    build: ['Built a system to control mouse operations using hand gestures.', 'Used computer-vision techniques to track hand movement and translate it into cursor actions.'],
    features: ['Hand-gesture tracking', 'Computer-vision input', 'Hands-free mouse operations'],
    metrics: [{ value: '01', label: 'computer-vision system' }, { value: 'Real-time', label: 'hand tracking' }],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'face-detection-system',
    title: 'Face Detection System',
    year: '2025',
    genre: 'Python • Image Processing',
    logline: 'A real-time face detection project applying image processing and foundational ML concepts.',
    stack: ['Python', 'Image Processing', 'Machine Learning'],
    build: ['Implemented real-time face detection using Python.', 'Applied image-processing techniques and basic machine-learning concepts.'],
    features: ['Real-time detection', 'Image processing', 'Foundational ML'],
    metrics: [{ value: 'Real-time', label: 'face detection' }, { value: 'Python', label: 'implementation' }],
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    year: '2025',
    genre: 'Frontend • Full-Stack • UX',
    logline: 'Portfolio and task-based web applications focused on clean UI, responsiveness and user experience.',
    stack: ['React', 'JavaScript', 'Express', 'Vite'],
    build: ['Developed portfolio websites and task-based web applications.', 'Focused on clean UI, responsive layouts and a polished user experience.'],
    features: ['Responsive interfaces', 'Reusable React components', 'Task-based web applications', 'Clean user experience'],
    metrics: [{ value: 'React', label: 'frontend' }, { value: 'Vite', label: 'tooling' }],
    github: 'https://github.com/Mdfaizanahmad',
    palette: ocean,
    motif: 'tenants',
  },
  {
    id: 'health-monitor',
    title: 'Health Monitor',
    year: '2025',
    genre: 'Python • Data • ML',
    logline: 'A stress-level prediction project using sleep, activity, BMI and blood-pressure data.',
    stack: ['Python', 'Data Analysis', 'Machine Learning'],
    build: ['Explored stress-level prediction from sleep duration, sleep quality, physical activity, BMI category and blood pressure.', 'Worked with a dataset containing lifestyle and wellbeing features.'],
    features: ['Stress prediction', 'Lifestyle data', 'Health-focused analysis'],
    metrics: [{ value: 'ML', label: 'prediction focus' }, { value: 'Data', label: 'driven insights' }],
    palette: jade,
    motif: 'shield',
  },
  {
    id: 'bubble-game',
    title: 'Bubble Game',
    year: '2025',
    genre: 'JavaScript • Game',
    logline: 'An interactive number-based game where players hit the correct bubble before time runs out.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    build: ['Created a fun browser game with a timed score-based loop.', 'Focused on responsive interactions and immediate visual feedback.'],
    features: ['Timed gameplay', 'Number matching', 'Score tracking'],
    metrics: [{ value: 'Interactive', label: 'browser game' }, { value: 'Fast', label: 'feedback loop' }],
    palette: crimson,
    motif: 'flow',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'academic-medals', title: 'Five Medals', org: 'Academic Excellence', detail: 'Awarded five academic medals during college.', laurel: 'Academic honour' },
  { id: 'department-rank', title: 'Department Rank 1', org: 'Computer Science', detail: 'Secured first rank in the Department of Computer Science.', laurel: 'Top performer' },
  { id: 'sih-2025', title: 'SIH 2025', org: 'Smart India Hackathon', detail: 'Selected by the college to participate in Smart India Hackathon 2025.', laurel: 'Hackathon selection' },
];

export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [
  {
    quote: 'Faizan combines a strong learning mindset with the discipline to turn ideas into working projects.',
    name: 'Faizan',
    role: 'Collaborator',
  },
  {
    quote: 'A curious computer science student with the consistency and focus to keep improving every day.',
    name: 'Raushan',
    role: 'Teacher',
  },
];

export type Certification = { issuer: string; name: string; link?: string };
export const certifications: Certification[] = [
  { issuer: 'GUVI · HCL · IIT Patna', name: '90 Days Virtual Internship Program', link: 'https://www.guvi.in/verify-certificate?id=9J3ht17664807PM63b' },
  { issuer: 'GUVI', name: 'Full Stack Development' },
  { issuer: 'Polytropic Services', name: 'Industrial Internship · Web Development', link: 'https://training.polytropicservices.com/verify.php' },
  { issuer: 'Accenture UK', name: 'Developer and Technology' },
  { issuer: 'AWS', name: 'AWS Training and Certification' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Languages', subtitle: 'Building blocks', skills: [{ name: 'C', mono: 'C' }, { name: 'C++', mono: 'C+' }, { name: 'Python', mono: 'Py' }, { name: 'JavaScript', mono: 'Js' }, { name: 'Java', mono: 'Jv' }] },
  { id: 'frontend', title: 'Frontend', subtitle: 'Interfaces & the web platform', skills: [{ name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' }, { name: 'React', mono: 'Re' }, { name: 'Tailwind CSS', mono: 'Tw' }, { name: 'Bootstrap', mono: 'Bs' }, { name: 'Vite', mono: 'Vi' }] },
  { id: 'backend', title: 'Backend', subtitle: 'Server-side logic', skills: [{ name: 'Express', mono: 'Ex' }, { name: 'MERN Stack', mono: 'Me' }, { name: 'REST APIs', mono: 'Ap' }] },
  { id: 'ai', title: 'AI / ML', subtitle: 'Practical exploration', skills: [{ name: 'Computer Vision', mono: 'Cv' }, { name: 'Artificial Neural Networks', mono: 'An' }, { name: 'Image Processing', mono: 'Ip' }] },
  { id: 'fundamentals', title: 'CS Fundamentals', subtitle: 'The foundations', skills: [{ name: 'DSA', mono: 'Ds' }, { name: 'OOPs', mono: 'Oo' }, { name: 'DBMS', mono: 'Db' }, { name: 'OS', mono: 'Os' }] },
  { id: 'databases', title: 'Databases', subtitle: 'Data and persistence', skills: [{ name: 'MySQL', mono: 'My' }, { name: 'Database Management', mono: 'Db' }] },
  { id: 'tools', title: 'Tools', subtitle: 'Shipping & collaboration', skills: [{ name: 'Git', mono: 'Gt' }, { name: 'GitHub', mono: 'Gh' }, { name: 'VS Code', mono: 'Vs' }, { name: 'Canva', mono: 'Ca' }] },
];
export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Virtual Mouse', 'Face Detection System'],
  React: ['Web Applications'],
  JavaScript: ['Web Applications'],
  'Tailwind CSS': ['Web Applications'],
  'MERN Stack': ['Convo'],
  MySQL: ['Database management'],
  'Computer Vision': ['AI Virtual Mouse', 'Face Detection System'],
  DSA: ['Computer Science fundamentals'],
  Git: ['GUVI full-stack training'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette; videoUrl?: string; posterUrl?: string };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Student',
    period: '2023 – Present',
    synopsis: 'Computer science, data analytics and engineering studies.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Data Chapter',
        description: 'UG in Computer Science Engineering ',
        tags: ['UG', 'Data Analytics', 'Engg.', 'CS'],
        runtime: '',
        palette: amber,
        videoUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/f_mp4,vc_h264,q_auto/v1793900573/My_Video.mp4',
        posterUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/so_0/v1793900573/My_Video.jpg',
      },
      {
        code: 'S01 E02',
        title: 'The Engineering Chapter',
        description: 'Life of an Engineering student.',
        tags: ['B.Tech', 'CSE', 'Engg.'],
        runtime: '',
        palette: ocean,
        videoUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/v1793984518/VN20261106_221312.mp4',
        posterUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/so_0/v1793984518/VN20261106_221312.jpg',
      },
    ],
  },
  {
    number: 2,
    title: 'The Builder',
    period: '2025',
    synopsis: 'Hands-on training, internships and practical software projects.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Full-Stack Foundations',
        description: 'Mentor-guided training with GUVI, HCL and IIT Patna, followed by practical web development work.',
        tags: ['GUVI', 'HCL', 'Full Stack'],
        runtime: 'Jul – Sep 2025',
        palette: crimson,
        videoUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/v1793950742/portfolio_cloud.mp4',
        posterUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/so_0/v1793950742/portfolio_cloud.jpg',
      },
      {
        code: 'S02 E02',
        title: 'Industry In Practice',
        description: 'Industrial internship at Polytropic Services focused on frontend and backend fundamentals.',
        tags: ['Internship', 'Web Development'],
        runtime: 'Jun 2025',
        palette: jade,
        videoUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/v1793951244/What_is_a_machine__-_Funny_scene___3_Idiots___Aamir_Khan___R_Madhavan___Sharman_Joshi.mp4',
        posterUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/so_0/v1793951244/What_is_a_machine__-_Funny_scene___3_Idiots___Aamir_Khan___R_Madhavan___Sharman_Joshi.jpg',
      },
    ],
  },
  {
    number: 3,
    title: 'The AI Arc',
    period: 'Now',
    synopsis: 'Exploring computer vision, neural networks and human-centred web experiences.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Hands-Free',
        description: 'AI Virtual Mouse turns hand gestures into computer interaction.',
        tags: ['Python', 'Vision'],
        runtime: 'Project',
        palette: violet,
        videoUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/v1793951524/handgesture.mp4',
        posterUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/so_0/v1793951524/handgesture.jpg',
      },
      {
        code: 'S03 E02',
        title: 'Seeing Clearly',
        description: 'A real-time face detection system applying image processing and foundational ML.',
        tags: ['Python', 'Detection'],
        runtime: 'Project',
        palette: ocean,
        videoUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/v1793951691/Face_Recognition.mp4',
        posterUrl: 'https://res.cloudinary.com/dwxvmfiby/video/upload/so_0/v1793951691/Face_Recognition.jpg',
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Academic high', title: 'CGPA 8.6', detail: 'IIT Patna ', palette: amber },
  { label: 'The AI Original', title: 'AI Virtual Mouse', detail: 'Hand gestures · Computer vision', palette: crimson },
  { label: 'Top moment', title: 'Five Medals', detail: 'Academic excellence', palette: jade },
  { label: 'Hackathon', title: 'SIH 2025', detail: 'Selected by the college', palette: ocean },
  { label: 'Core stack', title: 'React + Python', detail: 'Interfaces and intelligent systems', palette: violet },
  { label: 'Industry arc', title: 'Full Stack', detail: 'GUVI · HCL · IIT Patna training', palette: amber },
  { label: 'Department', title: 'Rank 1', detail: 'Computer Science', palette: crimson },
  { label: 'Web chapter', title: 'Vite', detail: 'Fast, modern frontend tooling', palette: ocean },
  { label: 'Current focus', title: 'Computer Vision', detail: 'Practical AI/ML exploration', palette: jade },
  { label: 'Next episode', title: 'Build more', detail: 'Clean, useful digital experiences', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'Computer Science.', lines: ['IIT Patna · Computer Science Engineering & Data Analytics', ' · Computer Science Engineering'], chips: ['CGPA 8.6', 'UG'] },
  { kicker: 'Skills', title: 'Build with intent.', lines: ['C++, Python, JavaScript · React, Express, Vite', 'DSA, OOPs, DBMS, OS · Git, GitHub, VS Code'], chips: ['Python', 'React', 'JavaScript'] },
  { kicker: 'Experience', title: 'The Industry Arc', lines: ['GUVI – HCL · in collaboration with IIT Patna', 'Polytropic Services · Web Development Internship'], chips: ['A+ Performance'] },
  { kicker: 'Projects', title: 'The Originals', lines: ['Gate Pass & Security — QR/PIN campus access control', 'Convo and Movie Ticket Booking — full-stack products', 'AI, games, health data and responsive web applications'] },
  { kicker: 'Achievements', title: 'Top Moments', lines: ['Five academic medals', 'First rank in Computer Science', 'Selected for Smart India Hackathon 2025'] },
  { kicker: 'Current mission', title: 'Now building', lines: ['Full-stack web applications · Computer Vision · Better user experiences'] },
];

export type ProfileId = 'faizan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'faizan', name: 'Faizan', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, achievements & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, stack & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot · Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons · ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals · 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the portfolio', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments · ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume · View & download', palette: violet },
};
