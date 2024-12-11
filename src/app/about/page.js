import AboutMe from "@/src/components/AboutMe";
import DownloadCV from "@/src/components/DownloadCV";
import { ActiveTechProvider } from "@/src/contexts/techsContext";
import Education from "@/src/components/Education";
import Panel from "@/src/components/Panel";
import PersonalInformationWithPhoto from "@/src/components/PersonalInformationWithPhoto";
import Projects from "@/src/components/ProjectsGroup";
import TechnologyStack from "@/src/components/TechnologyStack"
import WorkExperience from "@/src/components/WorkExperience";

export default function About() {
    return (
        <main className="h-full w-full mx-auto flex justify-center items-center">
            <section className="h-[98%] w-[92%] grid grid-cols-12 gap-2">

                {/* Panel Izquierdo */}
                <Panel styles={"col-span-12 border-solid border-grey-4 border-[1px] px-7 py-10"}>
                    <PersonalInformationWithPhoto />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4" />
                    <AboutMe />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4" />
                    <DownloadCV />
                </Panel>

                {/* Panel Central */}
                <Panel styles={"col-span-12 flex flex-col items-center border-solid border-grey-4 border-[1px] px-7 py-10"}>
                    <ActiveTechProvider>
                        <TechnologyStack />
                        <hr className="w-[90%] mx-auto border-t-0 border-grey-4 mt-8 mb-4" />
                        <Projects />
                    </ActiveTechProvider>
                </Panel>

                {/* Panel Derecho */}
                <Panel styles={"col-span-12 border-solid border-grey-4 border-[1px] px-7 py-10 flex flex-col min-[725px]:flex-row min-[725px]:justify-evenly min-[725px]:gap-x-8"}>
                    <Education />
                    <hr className="w-[90%] min-[725px]:w-0 h-[95%] mx-auto min-[725px]:mx-0 mt-8 mb-4 border-t-0 border-grey-4" />
                    <WorkExperience />
                </Panel>

            </section>
        </main>
    );
}