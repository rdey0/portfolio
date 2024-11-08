import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProfileSection from "@/components/portfolio/ProfileSection";
import TechnologiesSection from "@/components/portfolio/TechnologiesSection";

export default function Home() {
  return (
    <div className="grid grid-flow-row grid-rows-[auto,1fr] justify-center px-10 sm:px-20 2xl:justify-normal 2xl:px-0 2xl:grid-flow-col 2xl:grid-rows-1 mx-auto 2xl:gap-40 bg-charcoal-midnight min-h-screen">
      <div className="pt-32 mb-24 2xl:pl-10">
        <div className="w-fit 2xl:ml-auto">
          <ProfileSection />
        </div>
      </div>
      <div className="2xl:pt-32 2xl:pr-10">
        <div className="flex flex-col max-w-[768px] gap-24">
          <TechnologiesSection />
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
}
