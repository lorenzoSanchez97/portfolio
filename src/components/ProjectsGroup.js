import Project from "./Project";
import { projectsData } from "./data/projectsData";

const projects = Object.keys(projectsData);

export default function ProjectsGroup() {
    return (
        <section className="flex flex-col items-center text-bright-white w-[95%]">
            <h1 className="text-2xl">Projects</h1>
            <div className="grid grid-cols-2 gap-y-4 mt-8">
                {projects.map((project, index) => {
                    return <Project name={project} key={index}/>
                })}
            </div>
        </section>
    )
}