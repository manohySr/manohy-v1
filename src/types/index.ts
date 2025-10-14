export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  link?: string;
  image?: string | any;
}

export interface Technology {
  name: string;
  category: string;
  icon: string;
}
