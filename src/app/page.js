import PersonalInformation from "@/src/components/PersonalInformation";
import TechsBar from "@/src/components/TechsBar";
import HomeButtonsGroup from "../components/HomeButtonsGroup";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center md:flex-row justify-evenly h-[calc(100vh-250px)] md:h-[calc(100vh-150px)] xl:mx-32">
        <PersonalInformation />
        <HomeButtonsGroup />
      </section>
      <TechsBar />
    </main>
  );
}