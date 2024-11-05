import profile from "@/data/profile.json";
import socials from "@/data/socials.json";
import Profile from "@/types/Profile";
import Socials from "@/types/Socials";
import Image from "next/image";
import React from "react";
import DownloadIcon from "../icons/DownloadIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import LinkButton from "../reusable/Button";
import SocialLink from "../reusable/SocialLink";

const profileData = profile as Profile;
const socialData = socials as Socials;

const MyProfile: React.FC = () => {
  return (
    <div className="grid grid-flow-row gap-5">
      <div>
        <div className="inline-block rounded-full overflow-hidden">
          <Image
            src={profileData.picture}
            alt="Profile Picture"
            width={140}
            height={140}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-hero">Roy Dey</div>
        <div className="text-title">{profileData.title}</div>
        <div className="text-lg">📍 {profileData.location} 🇺🇸</div>
        <div className="text-charcoal-medium">{profileData.description}</div>
      </div>
      <div className="flex gap-5 items-center text-charcoal-medium">
        <LinkButton href={socialData.resume} download="Roy Dey Resume.pdf">
          <div className="flex gap-1">
            <DownloadIcon /> Resume
          </div>
        </LinkButton>
        <SocialLink href={socialData.email}>
          <MailIcon />
        </SocialLink>
        <SocialLink href={socialData.github}>
          <GithubIcon />
        </SocialLink>
        <SocialLink href={socialData.linkedin}>
          <LinkedinIcon />
        </SocialLink>
      </div>
    </div>
  );
};
export default MyProfile;
