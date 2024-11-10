export interface Project {
  titleSrc: string;
  graphicSrc: string;
  githubHref: string;
  appHref: string;
  content: string[];
  skills: string[];
}

export interface Projects {
  title: string;
  description: string;
  href: string;
  projects: Project[];
}
