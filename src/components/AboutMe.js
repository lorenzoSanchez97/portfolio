import Image from "next/image";
import batch from "@/public/icons/batch-icon.svg"
import language from "@/public/icons/language-icon.svg"

export default function AboutMe() {
    return (
        <section className="flex flex-col mt-8 text-white">
            <h1 className="text-bright-white text-2xl mt-2">About Me</h1>
            <p className="text-white mt-2 leading-6">Soy desarrollador web y programador con experiencia tanto en Backend como Frontend, con un fuerte enfoque en JavaScript. Cuento además con habilidades de Diseño. Por último, mi experiencia laboral me ha llevado a incursionar también en el mundo de las herramientas de automatización no-code.</p>
            <h1 className="mt-8 text-base text-bright-white flex items-center gap-x-2"><Image src={batch} alt="Batch Icon"/> 2 años de experiencia</h1>
            <h1 className="mt-2 text-base text-bright-white flex items-center gap-x-2"><Image src={language} alt="Language Icon"/> Nivel de Inglés B1 (competencia básica profesional)</h1>
        </section>
    )
}