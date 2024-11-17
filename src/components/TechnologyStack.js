import TechCard from "./TechCard";

const techs = [
  "api",
  "bootstrap",
  "css",
  "ejs",
  "express",
  "figma",
  "github",
  "html",
  "javascript",
  "mysql",
  "n8n",
  "next",
  "node",
  "react",
  "sequelize",
  "sql",
  "tailwind"
];

export default function TechnologyStack() {
  return (
    <section className="flex flex-col items-center text-bright-white text-2xl">
      <h1>Technology Stack</h1>
      <div className="flex flex-wrap gap-y-2 gap-x-2 w-[80%] mt-8">
        {techs.map((tech, index) => <TechCard techName={tech} key={index} />)}
      </div>
    </section>
  )
}