import ProfileSection from "@/components/portfolio/ProfileSection";
import TechnologiesSection from "@/components/portfolio/TechnologiesSection";

export default function Home() {
  return (
    <div className="grid grid-flow-row grid-rows-[auto,1fr] justify-center 2xl:grid-flow-col 2xl:grid-rows-1 mx-auto 2xl:gap-40 bg-charcoal-midnight min-h-screen">
      <div className="pt-32 mb-24 2xl:pl-10">
        <div className="w-fit 2xl:ml-auto">
          <ProfileSection />
        </div>
      </div>
      <div className="2xl:pt-32 2xl:pr-10">
        <div className="max-w-[768px]">
          <TechnologiesSection />
        </div>
      </div>
    </div>
  );
}
