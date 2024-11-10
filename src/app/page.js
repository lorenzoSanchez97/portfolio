import PersonalInformation from "@/src/components/personal-information";
import TechsBar from "@/src/components/techs-bar";
import HomeButtonsGroup from "../components/home-buttons-group";

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