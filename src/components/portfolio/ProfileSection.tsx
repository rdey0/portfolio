import profile from "@/data/profile.json";
import socials from "@/data/socials.json";
import Profile from "@/types/Profile";
import Socials from "@/types/Socials";
import Image from "next/image";
import React from "react";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import OpenFileIcon from "../icons/OpenFileIcon";
import LinkButton from "../reusable/Button";
import SocialLink from "../reusable/SocialLink";

const profileData = profile as Profile;
const socialData = socials as Socials;

const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 w-fit sm:opacity-0 sm:animate-[fadeSlideLeft_0.5s_ease-in-out_forwards] motion-reduce:animate-none motion-reduce:opacity-100">
      <div className="relative">
        <div className="inline-block rounded-full overflow-hidden">
          <Image
            src={profileData.picture}
            alt="Profile Picture"
            width={140}
            height={140}
            priority
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-hero">Roy Dey</div>
        <div className="text-title">{profileData.title}</div>
        <div className="text-lg">📍 {profileData.location}</div>
        <div className="text-charcoal-medium whitespace-pre-line">
          {profileData.description}
        </div>
      </div>
      <div className="flex gap-4 items-center text-charcoal-medium">
        <div className="mr-1">
          <LinkButton href={socialData.resume}>
            <div className="flex gap-1 items-center">
              <OpenFileIcon /> Resume
            </div>
          </LinkButton>
        </div>
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
export default ProfileSection;
