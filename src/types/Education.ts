export interface School {
  name: string;
  degree: string;
  period: string;
  href: string;
}

export interface Education {
  title: string;
  description: string;
  schools: School[];
}
