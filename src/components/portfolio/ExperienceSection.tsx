import experience from "@/data/experience.json";
import { Experience, PositionExperience } from "@/types/Experience";
import Image from "next/image";
import React from "react";
import Chip from "../reusable/Chip";
import SectionHeader from "../reusable/SectionHeader";
const experienceData: Experience = experience;

interface CompanyLogoProps {
  logoSrc: string;
  bgColor: string;
  title: string;
  href: string;
}
const CompanyLogo: React.FC<CompanyLogoProps> = ({
  logoSrc,
  bgColor,
  title,
  href,
}) => {
  return (
    <a
      className="flex-none h-[50px] w-[50px] rounded-full flex items-center justify-center hover:shadow-white-glow cursor-pointer transition-all duration-300"
      style={{ backgroundColor: bgColor }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={logoSrc} alt={title} width={30} height={30} />
    </a>
  );
};
interface ExperienceItemProps extends PositionExperience {
  isLast: boolean;
}
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logoSrc,
  bgColor,
  title,
  company,
  period,
  content,
  skills,
  isLast,
  href,
}) => {
  return (
    <div className="flex gap-3 overflow-visible">
      <div className="flex-col hidden sm:flex overflow-visible">
        <CompanyLogo
          logoSrc={logoSrc}
          bgColor={bgColor}
          title={title}
          href={href}
        />
        <div
          className="border-l flex-grow relative left-1/2 w-0"
          style={{ borderColor: "#3C3C3C" }}
        ></div>
      </div>
      <div className={`flex flex-col gap-y-3 ${!isLast ? "mb-[50px]" : ""}`}>
        <div className="flex items-center gap-3">
          <div className="sm:hidden">
            <CompanyLogo
              logoSrc={logoSrc}
              bgColor={bgColor}
              title={title}
              href={href}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="text-subheader">{title}</div>
            <div className="text-charcoal-light">{company}</div>
            <div className="text-sm text-charcoal-medium">{period}</div>
          </div>
        </div>
        <ul className="flex flex-col list-disc list-inside custom-list-indent">
          {content.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            return <Chip key={skill} text={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <div className="overflow-visible">
      <SectionHeader
        title={experienceData.title}
        description={experienceData.description}
        href={experienceData.href}
      />
      {experienceData.experience.map((experience, i) => {
        return (
          <ExperienceItem
            key={experience.company}
            {...experience}
            isLast={i === experienceData.experience.length - 1}
          />
        );
      })}
    </div>
  );
};

export default ExperienceSection;
