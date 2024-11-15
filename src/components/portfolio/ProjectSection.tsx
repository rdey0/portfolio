import projects from "@/data/projects.json";
import { Project, Projects } from "@/types/Projects";
import Image from "next/image";
import React from "react";
import GithubIcon from "../icons/GithubIcon";
import OpenIcon from "../icons/OpenIcon";
import Chip from "../reusable/Chip";
import SectionHeader from "../reusable/SectionHeader";
const projectsData = projects as Projects;

const ProjectCard: React.FC<Project> = ({
  titleSrc,
  titleHeight,
  titleWidth,
  graphicSrc,
  githubHref,
  appHref,
  description,
  content,
  skills,
}) => {
  return (
    <div className="flex flex-col gap-y-[20px] border border-charcoal-dawn rounded-ms px-[10px] pt-[10px] pb-[20px] w-full">
      <a
        href={appHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center w-full bg-charcoal-dawn rounded-ms transition-all duration-500 p-[20px] gap-y-3"
      >
        <div>
          <Image
            src={titleSrc}
            alt={titleSrc}
            height={titleHeight}
            width={titleWidth}
          />
        </div>
        <div className="rounded-ms overflow-hidden shadow-project-graphic transition-all duration-500">
          <Image
            src={graphicSrc}
            alt={graphicSrc}
            width={1100}
            height={800}
            className="max-w-[400px] max-h-[230px] w-full"
            quality={100}
          />
        </div>
      </a>
      <div className="w-full px-[10px]">
        {/* <ul className="mb-3 list-disc list-inside custom-list-indent">
          {content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul> */}
        <div className="text-charcoal-medium mb-3">{description}</div>
        <div className="flex flex-wrap gap-2 mb-[20px]">
          {skills.map((skill) => (
            <Chip key={githubHref + skill} text={skill} />
          ))}
        </div>
        <div className="flex gap-x-3 items-center">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-medium flex items-center gap-1 hover:text-white transition-all duration-300"
          >
            <GithubIcon size={18} /> Source
          </a>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-medium flex items-center gap-1 hover:text-white transition-all duration-300"
          >
            <OpenIcon /> Live App
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <div>
      <SectionHeader
        title={projectsData.title}
        description={projectsData.description}
        href={projectsData.href}
      />
      <div className="flex flex-col gap-y-20">
        {projectsData.projects.map((project) => {
          return <ProjectCard key={project.githubHref} {...project} />;
        })}
      </div>
    </div>
  );
};
export default ProjectSection;
