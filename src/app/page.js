import PersonalInformation from "@/src/components/PersonalInformation";
import TechsBar from "@/src/components/TechsBar";
import HomeButtonsGroup from "../components/HomeButtonsGroup";

export default function Home() {
  return (
    <main className="h-[calc(100vh-250px)] md:h-[calc(100vh-150px)]">
      <div className="flex flex-col items-center md:flex-row justify-evenly h-full xl:mx-32">
        <PersonalInformation />
        <HomeButtonsGroup />
      </div>
      <TechsBar />
    </main>
  );
}