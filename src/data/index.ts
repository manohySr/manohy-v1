import type { Project, Technology } from '../types';
import absenceImg from '../images/absence.png';

// export const bigProjects: Project[] = [
//   {
//     name: 'Employee Attendance System',
//     description:
//       'A comprehensive employee attendance tracking system with real-time monitoring, absence management, and detailed reporting. Features a clean dashboard interface with color-coded status indicators.',
//     technologies: ['Vuejs', 'Nuxt', 'Vuetify', 'Virtual Scrolling'],
//     github: 'https://github.com/manohySr/entreprise-absence-notfaroff',
//     image: absenceImg,
//   },
// ];
//

export const bigProjects: Project[] = [];

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
    name: 'Kotrana CSS Part 3',
    description:
      'A CSS practice project with various stylesheets and SASS compilation techniques. Utilized SASS for better organization and modularity of styles. Demonstrates CSS prefixing, concatenation, and the use of SVG icons with Icomoon integration.',
    technologies: ['HTML', 'CSS', 'Sass', 'SVG', 'BEM'],
    github: 'https://github.com/manohySr/kotrana-css-part-3',
    live: 'https://kotrana-part-3.netlify.app',
    category: 'frontend',
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
    name: 'Image Uploader',
    description:
      'A fullstack image uploader application from DevChallenge. Built with React and Vite on the frontend, integrated with Cloudinary for image processing and storage. Features drag-and-drop upload, image preview, and shareable links.',
    technologies: ['React', 'Vite', 'Cloudinary', 'Node.js'],
    github: 'https://github.com/manohySr/image-uploader-front',
    live: 'https://image-uploader-front-six.vercel.app',
    category: 'fullstack',
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
    name: 'Neovim',
    category: 'Editor',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/neovim.svg?color',
  },
];
