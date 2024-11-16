import TechCard from "./TechCard";

export default function TechsBar() {
  return (
    <section className="flex flex-col items-center text-bright-white text-2xl">
      <h1>Technology Stack</h1>
      <div className="flex flex-wrap gap-y-2 gap-x-2 w-[80%] mt-8">
        <TechCard techName="next" />
        <TechCard techName="node" />
        <TechCard techName="react" />
        <TechCard techName="tailwind" />
        <TechCard techName="n8n" />
        <TechCard techName="figma" />
        <TechCard techName="bootstrap" />
      </div>
    </section>
  )
}