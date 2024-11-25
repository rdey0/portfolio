import React from "react";

interface BulletedListProps {
  lines: string[];
}
const BulletedList: React.FC<BulletedListProps> = ({ lines }) => {
  return (
    <ul className={`flex flex-col list-none list-inside space-y-0.5`}>
      {lines.map((line) => {
        return (
          <li key={line}>
            <span className="mr-1">•</span>
            {line}
          </li>
        );
      })}
    </ul>
  );
};
export default BulletedList;
