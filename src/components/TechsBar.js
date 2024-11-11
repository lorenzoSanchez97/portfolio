import TechItem from "./TechItem"

export default function TechsBar() {
  return (
    <section className="absolute bottom-[50px] flex flex-wrap justify-center w-full gap-[20px] px-4">
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