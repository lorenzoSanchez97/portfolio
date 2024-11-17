import Image from "next/image"
import { techsData } from "./data/techsCardsData"


export default function TechCard({ techName }) {
    return (
        <article className="flex w-fit items-center gap-x-2 text-bright-white text-base bg-grey-4 px-2 py-1 rounded-md transition hover:cursor-pointer hover:bg-dark-grey">
            <Image src={techsData[techName].icon} alt={`${techsData[techName].name} Icon`} />
            <span className="font-medium">{techsData[techName].name}</span>
        </article>
    )
}