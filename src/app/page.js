import PersonalInformation from "@/src/components/PersonalInformation";
import TechsBar from "@/src/components/TechsBar";
import HomeButtonsGroup from "../components/HomeButtonsGroup";

export default function Home() {
  return (
    <main className="h-[calc(100vh-150px)]">
      <div className="flex flex-row justify-evenly h-full">
        <PersonalInformation />
        <HomeButtonsGroup />
      </div>
      <TechsBar />
    </main>
  );
}