import Image from "next/image";
import { techsData } from "./data/techsData";

export default function TechCard({ techName, isHighlighted }) {
    return (
        <article className={`flex w-fit items-center gap-x-2 text-light-blue text-base px-2 py-1 rounded-md transition-transform hover:cursor-pointer hover:scale-[1.02] border-solid border-light-blue border-[2px] ${isHighlighted ? "scale-105 bg-grey-4" : ""}`}>
            <Image src={techsData[techName].icon} alt={`${techsData[techName].name} Icon`} />
            <span className="font-medium text-sm">{techsData[techName].name}</span>
        </article>
    );
}
