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
        <main className="w-full min-h-min xl:h-screen py-2">
            <section className="w-[92%] xl:w-[80%] mx-auto grid grid-cols-12 gap-2 min-h-min xl:h-full">

                {/* Panel Izquierdo */}
                <Panel styles={"col-span-12 md:col-span-5 md:order-1 lg:col-span-3 border-solid border-grey-4 border-[1px] px-7 py-10 xl:col-span-3"}>
                    <PersonalInformationWithPhoto />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4" />
                    <AboutMe />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4" />
                    <DownloadCV />
                </Panel>

                {/* Panel Central */}
                <Panel styles={"col-span-12 md:order-3 lg:col-span-9 lg:order-2 flex flex-col items-center border-solid border-grey-4 border-[1px] px-7 pt-10 xl:col-span-6"}>
                    <ActiveTechProvider>
                        <TechnologyStack />
                        <hr className="w-[90%] mx-auto border-t-0 border-grey-4 mt-8 mb-4" />
                        <Projects />
                    </ActiveTechProvider>
                </Panel>

                {/* Panel Derecho */}
                <Panel styles={"col-span-12 md:col-span-7 md:order-2 lg:order-3 lg:col-span-12 border-solid border-grey-4 border-[1px] px-7 py-10 flex flex-col lg:flex-row lg:justify-evenly xl:col-span-3 xl:flex-col xl:justify-start"}>
                    <Education />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4 lg:w-0 lg:m-0 xl:w-[90%] xl:mt-8 xl:my-8" />
                    <WorkExperience />
                </Panel>

            </section>
        </main>
    );
}