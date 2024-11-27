import Image from "next/image"
import fotoCv from "@/public/images/fotoCv.png"
import MiniButtonsGroup from "./MiniButtonsGroup"

export default function PersonalInformationWithPhoto() {
    return (
        <header className="flex flex-col mb-[10px] text-white relative">
            <MiniButtonsGroup/>
            <Image src={fotoCv} alt="Foto de Perfil" className="mr-4 rounded-full border-solid border-white border-[3px]" />
            <h1 className="text-bright-white text-xl mt-2">Lorenzo Sanchez</h1>
            <h2 className="text-bright-white text-base font-medium">Full Stack Developer</h2>
            <a aria-label="enviar email a Lorenzo Sanchez" href="mailto:lorenzo.sanchez.dev@gmail.com" target="_blank" className="text-white no-underline hover:text-bright-white transition">lorenzo.sanchez.dev@gmail.com</a>
        </header>
    )
}