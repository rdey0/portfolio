import MyProfile from "@/components/portfolio/Profile";
import Technologies from "@/components/portfolio/Technologies";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 bg-charcoal-midnight min-h-screen pt-36">
      <MyProfile />
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <div className="w-full max-w-96 h-96 bg-charcoal-dusk rounded-md"></div>
        <Technologies />
      </div>
    </div>
  );
}
