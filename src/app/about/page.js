import AboutMe from "@/src/components/AboutMe";
import Education from "@/src/components/Education";
import Panel from "@/src/components/Panel";
import PersonalInformationWithPhoto from "@/src/components/PersonalInformationWithPhoto";
import Projects from "@/src/components/ProjectsGroup";
import TechnologyStack from "@/src/components/TechnologyStack"

export default function About() {
    return (
        <main className="h-full w-full mx-auto flex justify-center items-center">
            <section className="h-[98%] w-[80%] grid grid-cols-12 gap-x-2">

                {/* Panel Izquierdo */}
                <Panel styles={"col-span-3 border-solid border-grey-4 border-[1px]"}>
                    <PersonalInformationWithPhoto />
                    <hr className="w-[90%] mx-auto mt-8 mb-4 border-t-0 border-grey-4"/>
                    <AboutMe />
                    <hr className="w-[90%] mx-auto mt-8 border-t-0 border-grey-4"/>
                </Panel>

                {/* Panel Central */}
                <Panel styles={"col-span-6 flex flex-col items-center border-solid border-grey-4 border-[1px]"}>
                    <TechnologyStack />
                    <hr className="w-[90%] mx-auto border-t-0 border-grey-4 mt-12 mb-8"/>
                    <Projects />
                </Panel>

                {/* Panel Derecho */}
                <Panel styles={"col-span-3 border-solid border-grey-4 border-[1px]"}>
                    <Education />
                </Panel>

            </section>
        </main>
    );
}