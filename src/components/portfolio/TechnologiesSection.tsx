import technologies from "@/data/technologies.json";
import { Technologies, Technology } from "@/types/Technologies";
import React from "react";
import SectionHeader from "../reusable/SectionHeader";
const techData = technologies as Technologies;

const TechCard: React.FC<Technology> = ({
  name,
  description,
  bgColor,
  src,
}) => {
  return (
    <div
      className="flex items-center bg-charcoal-dusk rounded-ms px-2 py-3 gap-2 cursor-default"
      style={{ minWidth: "180px" }}
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-ms"
        style={{ backgroundColor: bgColor }}
      >
        <img src={src} alt={name} />
      </div>
      <div>
        <div>{name}</div>
        <div className="text-charcoal-medium text-sm">{description}</div>
      </div>
    </div>
  );
};

const TechnologiesSection: React.FC = () => {
  return (
    <div>
      <SectionHeader
        title={techData.title}
        description={techData.description}
      />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 min-w-0 max-w-[768px]">
        {techData.technologies.map((tech) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            description={tech.description}
            bgColor={tech.bgColor}
            src={tech.src}
          />
        ))}
      </div>
    </div>
  );
};
export default TechnologiesSection;
