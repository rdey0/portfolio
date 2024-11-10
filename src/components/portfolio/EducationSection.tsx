import education from "@/data/education.json";
import { Education, School } from "@/types/Education";
import Image from "next/image";
import React from "react";
import SectionHeader from "../reusable/SectionHeader";

const educationData = education as Education;

const SchoolCard: React.FC<School> = ({ name, degree, period, href }) => {
  return (
    <div className="flex gap-3 items-center">
      <Image src={href} alt={name + " logo"} width={100} height={100} />
      <div className="flex flex-col gap-y-1">
        <div className="text-subheader">{name}</div>
        <div className="text-charcoal-light">{degree}</div>
        <div className="text-sm text-charcoal-medium">{period}</div>
      </div>
    </div>
  );
};

const EducationSection: React.FC = () => {
  return (
    <div>
      <SectionHeader
        title={educationData.title}
        description={educationData.description}
      />
      <div>
        {educationData.schools.map((school) => {
          return <SchoolCard key={school.name} {...school} />;
        })}
      </div>
    </div>
  );
};
export default EducationSection;
