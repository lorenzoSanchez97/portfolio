import AboutMe from "@/src/components/AboutMe";
import Panel from "@/src/components/Panel";
import PersonalInformationWithPhoto from "@/src/components/PersonalInformationWithPhoto";
import TechnologyStack from "@/src/components/TechnologyStack"

export default function About() {
    return (
        <main className="h-full w-full mx-auto flex justify-center items-center">
            <section className="h-[98%] w-[80%] grid grid-cols-12 gap-x-2">

                {/* Panel Izquierdo */}
                <Panel col={"col-span-3"}>
                    <PersonalInformationWithPhoto />
                    <AboutMe />
                </Panel>

                {/* Panel Central */}
                <Panel col={"col-span-6"}>
                    <TechnologyStack />
                </Panel>

                {/* Panel Derecho */}
                <Panel col={"col-span-3"}></Panel>

            </section>
        </main>
    );
}