export interface Technology {
  name: string;
  description: string;
  bgColor: string;
  src: string;
}

export interface Technologies {
  title: string;
  description: string;
  technologies: Technology[];
}
