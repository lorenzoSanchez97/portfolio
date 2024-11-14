import Image from "next/image"
import fotoCv from "@/public/images/fotoCv.png"

export default function PersonalInformationWithPhoto() {
    return (
        <header className="flex flex-col mb-[10px] mt-[8px] text-white">
            <Image src={fotoCv} alt="Foto de Perfil" className="rounded-2xl ml-1 border-4" />
            <h1 className="text-bright-white text-xl mt-2">Lorenzo Sanchez</h1>
            <h2 className="text-bright-white text-base font-medium">Full Stack Developer</h2>
            <a href="mailto:lorenzo.sanchez.dev@gmail.com" target="_blank" className="text-white underline underline-offset-3 hover:text-bright-white transition">lorenzo.sanchez.dev@gmail.com</a>
        </header>
    )
}