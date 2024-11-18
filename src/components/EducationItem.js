import Image from "next/image"
import { educationData } from "./data/educationData"

export default function EducationItem({ title }) {
    return (
        <article className="flex items-center justify-start w-full">
            <Image src={educationData[title].image} alt={`Logo ${educationData[title].institution}`} className="w-14 h-14 mr-4 rounded-full border-solid border-white border-[3px]" />
            <div>
                <h2 className="text-sm">{educationData[title].institution}</h2>
                <p className="text-bright-white text-xs">{educationData[title].title}</p>
                <p className="text-white text-xs">{educationData[title].date}</p>
            </div>
        </article>
    )
}