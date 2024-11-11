import TechItem from "./TechItem"

export default function TechsBar() {
  return (
    <section className="absolute bottom-[50px] mx-auto left-1/2 transform -translate-x-1/2 flex gap-x-[20px]">
      <TechItem tech={"javascript"} />
      <TechItem tech={"html"} />
      <TechItem tech={"css"} />
      <TechItem tech={"react"} />
      <TechItem tech={"nextjs"} />
      <TechItem tech={"node"} />
      <TechItem tech={"mysql"} />
      <TechItem tech={"n8n"} />
    </section>
  )
}