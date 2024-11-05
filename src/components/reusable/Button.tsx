import React from "react";
type ButtonType = "bordered" | "borderedless";
interface LinkButtonProps {
  href: string;
  type?: ButtonType;
  download?: string;
  children: React.ReactNode;
}
const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  type = "bordered",
  download,
  children,
}) => {
  return (
    <a
      href={href}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className={`outline-none ${
          type == "bordered" &&
          "border border-white px-2 py-1 text-white hover:bg-white hover:text-charcoal-midnight transition-all duration-300"
        } rounded-ms bg-transparent`}
      >
        {children}
      </button>
    </a>
  );
};
export default LinkButton;
