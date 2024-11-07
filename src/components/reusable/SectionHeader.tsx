import React from "react";
interface SectionHeaderProps {
  title: string;
  description: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-title">{title}</div>
      <div className="text-charcoal-medium">{description}</div>
    </div>
  );
};
export default SectionHeader;
