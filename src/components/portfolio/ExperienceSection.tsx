import experience from "@/data/experience.json";
import { Experience, PositionExperience } from "@/types/Experience";
import React from "react";
import Chip from "../reusable/Chip";
import SectionHeader from "../reusable/SectionHeader";
const experienceData: Experience = experience;

const ExperienceItem: React.FC<PositionExperience> = ({
  logoSrc,
  bgColor,
  title,
  company,
  period,
  content,
  skills,
}) => {
  return <div></div>;
};

const ExperienceSection: React.FC = () => {
  return (
    <div>
      <SectionHeader
        title={experienceData.title}
        description={experienceData.description}
        href={experienceData.href}
      />
      <Chip text="ReScript" />
    </div>
  );
};

export default ExperienceSection;
