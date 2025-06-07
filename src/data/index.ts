import type { Project, Technology } from '../types';

export const projects: Project[] = [
  {
    name: '🚀 Nasa Launch System API',
    description:
      'Built an API for Nasa Launch System using Node.js with MVC architecture, writing integration tests with Jest and Supertest, and automating workflows with GitHub Actions.',
    technologies: ['Node.js', 'Jest', 'Mongoose', 'GitHubActions'],
    github: 'https://github.com/manohySr/NasaTest',
  },
  {
    name: '😼 Cat Wiki Master',
    description:
      'Built a Fullstack app using Next.js 14 with TypeScript, featuring pages for individual cat profiles, top 10 cats, and dynamic API routes to fetch cat data. Integrated Tailwind CSS for styling and implemented reusable components for the UI.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind', 'MongoDb'],
    github: 'https://github.com/manohySr/cat-wiki-master',
    live: 'https://cat-wiki-master-seven.vercel.app',
  },
  {
    name: '🌺 Kotrana CSS Part 3',
    description:
      'A CSS practice project with various stylesheets and SASS compilation techniques. Utilized SASS for better organization and modularity of styles. Demonstrates CSS prefixing, concatenation, and the use of SVG icons with Icomoon integration.',
    technologies: ['HTML', 'CSS', 'Sass', 'SVG', 'BEM'],
    github: 'https://github.com/manohySr/kotrana-css-part-3',
    live: 'https://kotrana-part-3.netlify.app',
  },
  {
    name: '🎬 TMDB CLI Tool',
    description:
      'A beautiful command-line interface tool to fetch and display movie information from The Movie Database (TMDB) API.',
    technologies: ['Golang', 'Go Cobra', 'TMDB API'],
    github: 'https://github.com/manohySr/tmdb-app',
  },
  {
    name: '⏳ GitHub Activity CLI',
    description:
      'A command-line tool to track and analyze GitHub activity. Fetch the recent activity of a GitHub user and display it in the terminal.',
    technologies: ['Python', 'Typer', 'Rich', 'Github API'],
    github: 'https://github.com/manohySr/github-activity',
  },
  {
    name: '🌧️ Weather API',
    description:
      'A weather API wrapper service that fetches weather data from Visual Crossing API with Redis caching support. This project demonstrates working with third-party APIs, implementing caching, and handling environment variables.',
    technologies: ['Go', 'Go Fiber', 'Redis cache', 'Docker'],
    github: 'https://github.com/manohySr/weather-api',
  },
];

export const technologies: Technology[] = [
  { name: 'JavaScript (ES6+) | Typescript', category: 'Languages' },
  { name: 'React | Vue', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Go', category: 'Backend' },
  { name: 'Sql', category: 'Script' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Linux | Shell', category: 'OS' },
  { name: 'Git', category: 'Version Control' },
  { name: 'Neovim | Cursor', category: 'Editor' },
];
