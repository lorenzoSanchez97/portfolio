import Image from "next/image";

export default function MiniButton({ name, icon, url }) {
    return (
        <a aria-label={`ir a perfil de ${name}`} href={url} target="_blank">
            <Image src={icon} alt={`${name} logo`} className="hover:scale-[1.1] transition-transform hover:cursor-pointer" />
        </a>
    )
}