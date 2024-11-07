import MyProfile from "@/components/portfolio/Profile";
import Technologies from "@/components/portfolio/Technologies";

export default function Home() {
  return (
    <div className="grid grid-flow-col grid-cols-[min-content, min-content] gap-48 bg-charcoal-midnight min-h-screen ">
      <div className="pt-32 pl-10">
        <div className="w-fit ml-auto ">
          <MyProfile />
        </div>
      </div>
      <div className="pt-32 pr-10">
        <div className="w-fit mr-auto ">
          <Technologies />
        </div>
      </div>
    </div>
  );
}
