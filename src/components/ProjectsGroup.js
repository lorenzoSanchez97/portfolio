import Project from "./Project";

export default function ProjectsGroup() {
    return (
        <section className="flex flex-col items-center text-bright-white w-[95%]">
            <h1 className="text-2xl">Projects</h1>
            <div className="grid grid-cols-2 gap-y-4 mt-8">
                <Project name="agrovalle" />
                <Project name="agrovalle" />
            </div>
        </section>
    )
}