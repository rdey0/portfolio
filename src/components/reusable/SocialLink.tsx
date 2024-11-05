import React from "react";
import LinkButton from "./Button";
interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}
const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => {
  return (
    <LinkButton href={href} type="borderedless">
      <div className="hover:text-white transition-all duration-300">
        {children}
      </div>
    </LinkButton>
  );
};
export default SocialLink;
