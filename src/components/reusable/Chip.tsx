import React from "react";
interface ChipProps {
  text: string;
}
const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="w-fit text-sm text-mint-light transition-all duration-300 hover:bg-mint-active bg-mint-dark px-3 py-1 rounded-full cursor-default">
      {text}
    </div>
  );
};
export default Chip;
