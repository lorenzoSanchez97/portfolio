import Image from "next/image"
import nextIcon from "@/public/icons/next-icon.svg"
import nodeIcon from "@/public/icons/node-icon.svg"
import reactIcon from "@/public/icons/react-icon.svg"
import tailwindIcon from "@/public/icons/tailwind-icon.svg"
import n8nIcon from "@/public/icons/n8n-icon.svg"
import figmaIcon from "@/public/icons/figma-icon.svg"
import bootstrapIcon from "@/public/icons/bootstrap-icon.svg"

const techs = {
    next: {
        name: "Next.js",
        icon: nextIcon
    },
    node: {
        name: "Node.js",
        icon: nodeIcon
    },
    react: {
        name: "React",
        icon: reactIcon
    },
    tailwind: {
        name: "Tailwind CSS",
        icon: tailwindIcon
    },
    n8n:{
        name: "n8n",
        icon: n8nIcon
    },
    figma:{
        name: "Figma",
        icon: figmaIcon
    },
    bootstrap:{
        name: "Bootstrap",
        icon: bootstrapIcon
    }
}


export default function TechCard({ techName }) {
    return (
        <article className="flex w-fit items-center gap-x-2 text-bright-white text-base bg-grey-4 px-2 py-1 rounded-md transition hover:cursor-pointer hover:bg-dark-grey">
            <Image src={techs[techName].icon} alt={`${techs[techName].name} Icon`}/>
            <span className="font-medium">{techs[techName].name}</span>
        </article>
    )
}