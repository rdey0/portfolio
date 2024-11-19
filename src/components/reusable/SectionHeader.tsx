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
      <p className=" text-charcoal-medium relative">
        {description}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-medium py-[1px] hover:text-white transition-all duration-300 inline-flex relative -bottom-[2px] px-1"
          >
            <OpenIcon />
          </a>
        )}
      </p>
    </div>
  );
};
export default SectionHeader;
