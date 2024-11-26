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
            <section className="h-[98%] w-[80%] grid grid-cols-12 gap-x-2">

                {/* Panel Izquierdo */}
                <Panel styles={"col-span-3 border-solid border-grey-4 border-[1px] px-7 py-10"}>
                    <PersonalInformationWithPhoto />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4" />
                    <AboutMe />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4" />
                    <DownloadCV />
                </Panel>

                {/* Panel Central */}
                <Panel styles={"col-span-6 flex flex-col items-center border-solid border-grey-4 border-[1px] px-7 pt-10"}>
                    <ActiveTechProvider>
                        <TechnologyStack />
                        <hr className="w-[90%] mx-auto border-t-0 border-grey-4 mt-8 mb-4" />
                        <Projects />
                    </ActiveTechProvider>
                </Panel>

                {/* Panel Derecho */}
                <Panel styles={"col-span-3 border-solid border-grey-4 border-[1px] px-7 py-10"}>
                    <WorkExperience />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4" />
                    <Education />
                </Panel>

            </section>
        </main>
    );
}