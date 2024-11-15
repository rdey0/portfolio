import React from "react";
import OpenIcon from "../icons/OpenIcon";
interface SectionHeaderProps {
  title: string;
  description?: string;
  href?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-8">
      <div className="text-title">{title}</div>
      <div className="flex text-charcoal-medium items-center">
        {description}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-medium px-1 py-[1px] hover:text-white transition-all duration-300"
          >
            <OpenIcon />
          </a>
        )}
      </div>
    </div>
  );
};
export default SectionHeader;
