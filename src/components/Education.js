import EducationItem from "./EducationItem"
import { educationData } from "./data/educationData"

const items = Object.keys(educationData)

export default function Education() {
    return (
        <section className="flex flex-col items-center text-bright-white">
            <h1 className="text-2xl">Education</h1>
            <div className="flex flex-col gap-y-4 w-full mt-8">
                {items.map((item, index) => {
                    return <EducationItem title={item} key={index}/>
                })}
            </div>
        </section>
    )
}