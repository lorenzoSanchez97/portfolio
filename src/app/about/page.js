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
                <Panel styles={"col-span-3"}>
                    <PersonalInformationWithPhoto />
                    <AboutMe />
                </Panel>

                {/* Panel Central */}
                <Panel styles={"col-span-6 flex flex-col items-center gap-y-12"}>
                    <TechnologyStack />
                    <Projects />
                </Panel>

                {/* Panel Derecho */}
                <Panel styles={"col-span-3"}>
                    <Education />
                </Panel>

            </section>
        </main>
    );
}