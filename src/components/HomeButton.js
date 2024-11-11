import Link from 'next/link';
import styles from "./HomeButton.module.css"

export default function HomeButton({ text }) {
    return (
        <Link href="/about" className={`${styles.button} text-light-blue font-bold text-l no-underline bg-dark-grey py-3 px-20 sm:px-24 md:px-20 lg:px-24 border-solid border-[2px] rounded-lg border-light-blue transition-all duration-300`}>
            {text}
        </Link>
    )
}