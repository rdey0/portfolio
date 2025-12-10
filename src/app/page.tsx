import EducationSection from "@/components/portfolio/EducationSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProfileSection from "@/components/portfolio/ProfileSection";
import ProjectSection from "@/components/portfolio/ProjectSection";
import TechnologiesSection from "@/components/portfolio/TechnologiesSection";

const Home: React.FC = () => {
  return (
    <div className="grid grid-flow-row grid-rows-[auto,1fr] justify-center px-6 sm:px-20 2xl:justify-normal 2xl:px-0 2xl:grid-flow-col 2xl:grid-rows-1 mx-auto 2xl:gap-40 bg-charcoal-midnight h-screen overflow-y-scroll relative">
      <div className="pt-32 mb-24 2xl:pl-10 2xl:sticky 2xl:top-0">
        <div className="w-fit 2xl:ml-auto relative">
          <ProfileSection />
        </div>
      </div>
      <div className="2xl:pt-32 2xl:pr-10 pb-32 2xl:pl-10 h-fit">
        <div
          className="flex flex-col max-w-[768px] gap-[100px] sm:opacity-0 sm:animate-[fadeSlideUp_0.75s_cubic-bezier(0.25,0.1,0.25,1)_forwards] motion-reduce:animate-none motion-reduce:opacity-100"
          style={{ animationDelay: "0.5s" }}
        >
          <TechnologiesSection />
          <ExperienceSection />
          <ProjectSection />
          <EducationSection />
        </div>
      </div>
    </div>
  );
};
export default Home;
