import profile from "@/data/profile.json";
import Profile from "@/types/Profile";
import Image from "next/image";
import React from "react";

const profileData = profile as Profile;

const MyProfile: React.FC = () => {
  return (
    <div>
      <div className="inline-block rounded-full overflow-hidden">
        <Image
          src={profileData.picture}
          alt="Profile Picture"
          width={140}
          height={140}
        />
      </div>
      <div>Roy Dey</div>
      <div>{profileData.title}</div>
      <div>{profileData.location}</div>
      <div>{profileData.description}</div>
    </div>
  );
};
export default MyProfile;
