import type { Project, Technology, Expertise } from '../types';
import ukikiuleImg from '../images/ukikiule.png';
import catWikiImg from '../images/Cat-wiki.png';
import cvValidatorImg from '../images/CV-validator.png';

export const expertise: Expertise[] = [
  {
    title: 'Web Development',
    description:
      'I build web products end-to-end — from responsive interfaces to robust backend APIs.',
    items: [
      'Frontend Development',
      'Backend Development',
      'Responsive Design',
      'Mobile Apps',
    ],
  },
  {
    title: 'Languages & Tools',
    description:
      'I work across multiple languages and toolchains depending on what the project needs.',
    items: [
      'JavaScript / TypeScript',
      'Go, Python, Node.js',
      'SQL, Linux, Docker',
      'Git, GitHub Actions',
    ],
  },
  {
    title: 'AI Integration',
    description:
      'I build AI-powered products using modern LLM pipelines and cloud infrastructure.',
    items: ['RAG Pipelines', 'LLMs', 'FastAPI'],
  },
];

export const siteConfig = {
  cvUrl:
    'https://docs.google.com/document/d/1RkTDEQ8EhAQQkUfkkiZqO6bnaDDGcUQ2R3r4K1BH3pY/edit?usp=sharing',
};

export const bigProjects: Project[] = [
  {
    name: 'UKIKIULE',
    description:
      'Madagascar has no centralized source for local news. UKIKIULE solves that by aggregating verified sources and running them through a RAG pipeline to generate accurate, hallucination-resistant summaries — with voice recognition for hands-free use.',
    technologies: [
      'NextJs',
      'Tailwind',
      'Shadcn',
      'Python',
      'FastAPI',
      'RAG AI',
      'AWS EC2',
      'surge.sh',
    ],
    github: '#',
    live: 'https://ukikiule.surge.sh/',
    image: ukikiuleImg,
  },
  {
    name: 'Cat Wiki Master',
    description:
      'A full-stack cat encyclopedia built to practice end-to-end Next.js 14 architecture. Features dynamic API routes, individual breed profiles with stats, a top 10 ranking system pulled from an external API, and a MongoDB layer for persistence — deployed live on Vercel.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind', 'MongoDB'],
    github: 'https://github.com/manohySr/cat-wiki-master',
    live: 'https://cat-wiki-master-seven.vercel.app',
    image: catWikiImg,
  },
  {
    name: 'CV Validator',
    description:
      'A mobile-first tool that takes your generalist CV and a job description, then uses Google Gemini as AI to tailor the content to the role — cutting the time spent manually adapting applications. Built with React Native for cross-platform delivery and Python FastAPI as the AI backend.',
    technologies: ['React Native', 'Python', 'FastAPI', 'GenAI', 'Gemini'],
    github: '#',
    image: cvValidatorImg,
  },
];

// export const bigProjects: Project[] = [];

export const projects: Project[] = [
  {
    name: 'Nasa Launch System API',
    description:
      'Built an API for Nasa Launch System using Node.js with MVC architecture, writing integration tests with Jest and Supertest, and automating workflows with GitHub Actions.',
    technologies: ['Node.js', 'Jest', 'Mongoose', 'GitHubActions'],
    github: 'https://github.com/manohySr/NasaTest',
    category: 'fullstack',
  },
  {
    name: 'Cat Wiki Master',
    description:
      'Built a Fullstack app using Next.js 14 with TypeScript, featuring pages for individual cat profiles, top 10 cats, and dynamic API routes to fetch cat data. Integrated Tailwind CSS for styling and implemented reusable components for the UI.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind', 'MongoDb'],
    github: 'https://github.com/manohySr/cat-wiki-master',
    live: 'https://cat-wiki-master-seven.vercel.app',
    category: 'fullstack',
  },
  {
    name: 'Image Uploader',
    description:
      'A fullstack image uploader application from DevChallenge. Built with React and Vite on the frontend, integrated with Cloudinary for image processing and storage. Features drag-and-drop upload, image preview, and shareable links.',
    technologies: ['React', 'Vite', 'Cloudinary', 'Node.js'],
    github: 'https://github.com/manohySr/image-uploader-front',
    live: 'https://image-uploader-front-six.vercel.app',
    category: 'fullstack',
  },
  {
    name: 'TMDB CLI Tool',
    description:
      'A beautiful command-line interface tool to fetch and display movie information from The Movie Database (TMDB) API.',
    technologies: ['Golang', 'Go Cobra', 'TMDB API'],
    github: 'https://github.com/manohySr/tmdb-app',
    category: 'backend',
  },
  {
    name: 'GitHub Activity CLI',
    description:
      'A command-line tool to track and analyze GitHub activity. Fetch the recent activity of a GitHub user and display it in the terminal.',
    technologies: ['Python', 'Typer', 'Rich', 'Github API'],
    github: 'https://github.com/manohySr/github-activity',
    category: 'backend',
  },
  {
    name: 'Weather API',
    description:
      'A weather API wrapper service that fetches weather data from Visual Crossing API with Redis caching support. This project demonstrates working with third-party APIs, implementing caching, and handling environment variables.',
    technologies: ['Go', 'Go Fiber', 'Redis cache', 'Docker'],
    github: 'https://github.com/manohySr/weather-api',
    category: 'backend',
  },
  {
    name: 'Caching Proxy Server',
    description:
      'A lightweight caching proxy server written in Go that speeds up responses by caching requested content by using a CLI command with support for TTL, configurable port and origin. It includes cache status headers, response time tracking, and handles both query and path parameters.',
    technologies: ['Go', 'Go Cobra', 'Caching'],
    github: 'https://github.com/manohySr/caching-proxy',
    category: 'backend',
  },
  {
    name: 'Kotrana CSS Part 3',
    description:
      'A CSS practice project with various stylesheets and SASS compilation techniques. Utilized SASS for better organization and modularity of styles. Demonstrates CSS prefixing, concatenation, and the use of SVG icons with Icomoon integration.',
    technologies: ['HTML', 'CSS', 'Sass', 'SVG', 'BEM'],
    github: 'https://github.com/manohySr/kotrana-css-part-3',
    live: 'https://kotrana-part-3.netlify.app',
    category: 'frontend',
  },
  {
    name: 'Snap Landing Page',
    description:
      'A responsive landing page for Snap showcasing remote work solutions. Built as part of Frontend Mentor challenges for HTML/CSS/JS kotrana (training in Malagasy) - when I have nothing to do, I like to train. The joy of watching things coming to life.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/manohySr/Front-end-mentor-part-4',
    live: 'https://front-end-mentor-part-4.netlify.app',
    category: 'frontend',
  },
  {
    name: 'Notifications Page',
    description:
      'A notifications component showcasing various notification types with mark-as-read functionality. Part of my Frontend Mentor challenges series for continuous learning and practice.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/manohySr/Front-end-mentor-part-3',
    live: 'https://front-end-mentor-part-3.netlify.app',
    category: 'frontend',
  },
  {
    name: 'Newsletter Subscription',
    description:
      'An interactive newsletter subscription form with email validation and success state. Built to practice form handling and responsive design as part of Frontend Mentor challenges.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/manohySr/Front-end-mentor-part-2',
    live: 'https://front-end-mentor-part-2.netlify.app',
    category: 'frontend',
  },
  {
    name: 'QR Code Component',
    description:
      'A QR code component to improve frontend skills by building projects. My first Frontend Mentor challenge that started the journey of continuous practice and improvement.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/manohySr/Front-end-mentor-part-1',
    live: 'https://front-end-mentor-part-1.netlify.app',
    category: 'frontend',
  },
  {
    name: 'Pizza Order',
    description:
      'A sleek, responsive React application showcasing a modern restaurant menu. Built purely for UI practice, it features dynamic menu rendering, clean component structure, and reusable design elements.',
    technologies: ['React', 'Vite', 'CSS'],
    live: 'https://pizza-manohy.netlify.app/',
    github:
      'https://github.com/manohySr/Road-to-expert-React-step-1-again---pizza-RTER-',
    category: 'frontend',
  },
  {
    name: 'Travel List',
    description:
      'A simple React project built to refresh my React fundamentals. It lets users create, manage, and check off items to pack for a trip with a clean and intuitive UI.',
    technologies: ['React', 'Vite', 'CSS'],
    live: 'https://travel-list-reter.netlify.app/',
    github: 'https://github.com/manohySr/RTER-part2',
    category: 'frontend',
  },
];

export const technologies: Technology[] = [
  {
    name: 'JavaScript (ES6+) | Typescript',
    category: 'Languages',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg?color',
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg?color',
  },
  {
    name: 'Vue',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vuejs.svg?color',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg?color',
  },
  {
    name: 'Python',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg?color',
  },
  {
    name: 'Go',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/go.svg?color',
  },
  {
    name: 'SQL',
    category: 'Script',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg?color',
  },
  {
    name: 'MongoDb',
    category: 'Script',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg?color',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg?color',
  },
  {
    name: 'Linux | Shell',
    category: 'OS',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linux.svg?color',
  },
  {
    name: 'Git',
    category: 'Version Control',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg?color',
  },
  {
    name: 'Vim',
    category: 'Editor',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/neovim.svg?color',
  },
];
