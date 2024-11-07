import ProfileSection from "@/components/portfolio/ProfileSection";
import TechnologiesSection from "@/components/portfolio/TechnologiesSection";

export default function Home() {
  return (
    <div className="grid grid-flow-col grid-cols-[min-content, min-content] gap-48 bg-charcoal-midnight min-h-screen ">
      <div className="pt-32 pl-10">
        <div className="w-fit ml-auto ">
          <ProfileSection />
        </div>
      </div>
      <div className="pt-32 pr-10">
        <div className="w-fit mr-auto ">
          <TechnologiesSection />
        </div>
      </div>
    </div>
  );
}
