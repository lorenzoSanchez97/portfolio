import HomeButton from "./HomeButton"
import styles from "./HomeButton.module.css"

export default function HomeButtonsGroup() {
    return (
        <section className="flex flex-col text-center gap-y-4 px-4 md:px-0 animate-show-in">
            <HomeButton text={"Sobre mi"} href={"/about"} />
            <a aria-label="descargar curriculum" href="/cv-lorenzo-sanchez.pdf" download="CV - Lorenzo Sanchez.pdf" className={`${styles.button} text-light-blue font-bold text-l no-underline bg-dark-grey py-3 px-20 sm:px-24 md:px-20 lg:px-24 border-solid border-[2px] rounded-lg border-light-blue transition-all duration-300`}>
                Descargar CV
            </a>
        </section>
    )
}