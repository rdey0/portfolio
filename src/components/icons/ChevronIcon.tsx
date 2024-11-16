import React from "react";
interface ChevronIconProps {
  orientation?: "up" | "down";
}
const ChevronIcon: React.FC<ChevronIconProps> = ({ orientation }) => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${
        orientation === "down" ? "rotate-180" : ""
      }`}
    >
      <path d="M5 1L1 5ZM5 1L9 5Z" fill="currentColor" />
      <path
        d="M1 5L5 1L9 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ChevronIcon;
