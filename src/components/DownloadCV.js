import Image from "next/image"
import downloadLogo from "@/public/icons/download-icon.svg"

export default function DownloadCV() {
    return (
        <section className="flex flex-col text-white">
            <h1 className="text-light-blue text-2xl mt-2">Curriculum</h1>
            <p className="text-white mt-2 leading-6 text-sm">Debajo, puedes descargar mi CV en formato PDF.</p>
            <a aria-label="descargar curriculum" href="/cv-lorenzo-sanchez.pdf" download="CV - Lorenzo Sanchez.pdf" className="hover:scale-[1.08] transition-transform hover:cursor-pointer py-[5px] px-6 mx-auto text-center rounded mt-4">
               <Image src={downloadLogo} alt="Download logo"/>
            </a>
        </section>
    )
}