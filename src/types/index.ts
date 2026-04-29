export type ProjectCategory = 'fullstack' | 'backend' | 'frontend';

export interface Project {
  name: string;
  description: string;
  descriptionFr?: string;
  technologies: string[];
  github: string;
  live?: string;
  image?: string | any;
  category?: ProjectCategory;
  isArchive?: boolean;
}

export interface Technology {
  name: string;
  category: string;
  icon: string;
}

export interface Expertise {
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  items: string[];
}
