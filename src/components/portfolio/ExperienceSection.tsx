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
}
const CompanyLogo: React.FC<CompanyLogoProps> = ({
  logoSrc,
  bgColor,
  title,
}) => {
  return (
    <div
      className="flex-none h-[50px] w-[50px] rounded-full flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <Image src={logoSrc} alt={title} height={30} width={30} />
    </div>
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
}) => {
  return (
    <div className="flex gap-3">
      <div className="flex-col hidden sm:flex">
        <CompanyLogo logoSrc={logoSrc} bgColor={bgColor} title={title} />
        <div
          className="border-l flex-grow relative left-1/2 w-0"
          style={{ borderColor: "#3C3C3C" }}
        ></div>
      </div>
      <div className={`flex flex-col gap-y-3 ${!isLast ? "mb-[50px]" : ""}`}>
        <div className="flex gap-3">
          <div className="sm:hidden">
            <CompanyLogo logoSrc={logoSrc} bgColor={bgColor} title={title} />
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="text-title">{title}</div>
            <div className="text-charcoal-light">{company}</div>
            <div className="text-sm text-charcoal-medium">{period}</div>
          </div>
        </div>
        <div className="flex flex-col">
          {content.map((item) => {
            return <div key={item}>• {item}</div>;
          })}
        </div>
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
    <div>
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
