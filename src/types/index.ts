export type ProjectCategory = 'fullstack' | 'backend' | 'frontend';

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image?: string | any;
  category?: ProjectCategory;
}

export interface Technology {
  name: string;
  category: string;
  icon: string;
}
