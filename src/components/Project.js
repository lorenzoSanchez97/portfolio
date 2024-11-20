import Image from "next/image";
import { techsData } from "./data/techsData"
import { projectsData } from "./data/projectsData"

export default function Project({ name }) {
    return (
        <a className="hover:bg-grey-4 hover:cursor-pointer p-2 rounded-md transition group">
            <article className="flex items-center">
                <Image src={projectsData[name].image} alt={`Logo ${projectsData[name].name}`} className="mr-4 rounded-full border-solid border-white border-[3px]" />
                <div>
                    <h2 className="text-base">{projectsData[name].name}</h2>
                    <p className="text-light-blue mb-2 text-xs transition">{projectsData[name].type}</p>
                    <p className="text-white text-xs group-hover:text-bright-white transition">{projectsData[name].description}</p>
                    <div className="flex justify-start gap-x-2 mt-[10px]">
                        {projectsData[name].techs.map((tech, index) => {
                            return <Image src={techsData[tech].icon} alt={`${techsData[tech].name} Icon`} key={index} />
                        })}
                    </div>
                </div>
            </article>
        </a>
    )
}