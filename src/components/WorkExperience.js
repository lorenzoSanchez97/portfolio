import WorkItem from "./InfoItem"
import { worksData } from "./data/worksData"

const items = Object.keys(worksData)

export default function WorkExperience() {
    return (
        <section className="flex flex-col items-center text-bright-white">
            <h1 className="text-2xl text-light-blue">Work Experience</h1>
            <div className="flex flex-col gap-y-4 w-full mt-8">
                {items.map((item, index) => {
                    return <WorkItem company={item} key={index}/>
                })}
            </div>
        </section>
    )
}