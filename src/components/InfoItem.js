import Image from "next/image";
import { educationData } from "./data/educationData";
import { worksData } from "./data/worksData";

export default function InfoItem({ title, company }) {
    
    // Determina los datos según la prop proporcionada
    const data = title
        ? educationData[title] // Datos de educación
        : company
        ? worksData[company] // Datos de experiencia laboral
        : null;

    return (
        <article className="flex items-center justify-start w-full">
            <Image 
                src={data.image} 
                alt={title ? `Logo de ${data.institution}` : `Logo de ${data.company}`}
                className="w-14 h-14 mr-4 rounded-full border-solid border-white border-[3px]" 
            />
            <div>
                <h2 className="text-sm">
                    {title ? data.institution : data.position}
                </h2>
                <p className="text-bright-white text-xs">
                    {title ? data.title : data.company}
                </p>
                <p className="text-white text-xs">{data.date}</p>
            </div>
        </article>
    );
}