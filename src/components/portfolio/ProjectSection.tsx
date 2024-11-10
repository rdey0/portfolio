import projects from "@/data/projects.json";
import { Project, Projects } from "@/types/Projects";
import React from "react";
import SectionHeader from "../reusable/SectionHeader";
const projectsData = projects as Projects;

const ProjectCard: React.FC<Project> = ({
  titleSrc,
  graphicSrc,
  githubHref,
  appHref,
  content,
  skills,
}) => {
  return <div></div>;
};

const ProjectSection: React.FC = () => {
  return (
    <div>
      <SectionHeader
        title={projectsData.title}
        description={projectsData.description}
        href={projectsData.href}
      />
    </div>
  );
};
export default ProjectSection;
