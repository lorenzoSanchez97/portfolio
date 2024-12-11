import EducationItem from "./InfoItem"
import { educationData } from "./data/educationData"

const data = Object.keys(educationData)

export default function Education() {
    return (
        <section className="flex flex-col items-center text-bright-white">
            <h1 className="text-2xl text-light-blue md:mt-0">Formación</h1>
            <div className="flex flex-col gap-y-4 w-full mt-8">
                {data.map((item, index) => {
                    return <EducationItem title={item} key={index}/>
                })}
            </div>
        </section>
    )
}