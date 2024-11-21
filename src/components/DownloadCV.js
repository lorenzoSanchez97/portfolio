export default function DownloadCV() {
    return (
        <section className="flex flex-col text-white">
            <h1 className="text-light-blue text-2xl mt-2">Curriculum</h1>
            <p className="text-white mt-2 leading-6 text-sm">Debajo, puedes descargar mi CV en formato PDF.</p>
            <a href="/cv-lorenzo-sanchez.pdf" download="CV - Lorenzo Sanchez.pdf" className="font-medium text-sm hover:cursor-pointer no-underline text-light-blue border-solid border-[2px] py-[5px] w-[50%] mx-auto text-center rounded mt-4">
                Download CV
            </a>
        </section>
    )
}