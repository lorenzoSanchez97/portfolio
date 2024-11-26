import Project from "./Project";
import { projectsData } from "./data/projectsData";

const projects = Object.keys(projectsData);

export default function ProjectsGroup() {
    return (
        <section className="flex flex-col items-center text-bright-white w-[95%]">
            <h1 className="text-2xl text-light-blue">Proyectos</h1>
            <h2 className="text-sm text-birght-white mt-4">Sólo se muestran proyectos públicos y de fácil acceso. Puedes contactarme para obtener información o referencias sobre muchos otros proyectos en los que he trabajado que no pueden mostrarse aquí.</h2>
            <div className="grid grid-cols-2 gap-y-4 mt-8">
                {projects.map((project, index) => {
                    return <Project name={project} key={index}/>
                })}
            </div>
        </section>
    )
}