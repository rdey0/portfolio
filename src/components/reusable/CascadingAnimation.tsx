import React from "react";
interface CascadingAnimationProps {
  hashId: string;
  animation: "fadeSlideUp" | "fadeSlideLeft";
  children: React.ReactNode[];
}
const CascadingAnimation: React.FC<CascadingAnimationProps> = ({
  hashId,
  animation,
  children,
}) => {
  let animationStyle = "";
  switch (animation) {
    case "fadeSlideUp":
      animationStyle = "animate-[fadeSlideUp_0.4s_ease-in-out_forwards]";
      break;
    case "fadeSlideLeft":
      animationStyle = "animate-[fadeSlideLeft_0.3s_ease-in-out_forwards]";
      break;
    default:
      break;
  }
  return (
    <>
      {children.map((child, index) => {
        return (
          <div
            key={`${hashId}-${index}`}
            className={`opacity-0 ${animationStyle}`}
            style={{
              animationDelay: `${index * 400}ms`,
            }}
          >
            {child}
          </div>
        );
      })}
    </>
  );
};
export default CascadingAnimation;
