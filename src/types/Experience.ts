export interface PositionExperience {
  logoSrc: string;
  bgColor: string;
  title: string;
  company: string;
  period: string;
  content: string[];
  skills: string[];
}

export interface Experience {
  title: string;
  description: string;
  href: string;
  experience: PositionExperience[];
}
