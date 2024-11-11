import Image from "next/image"

export default function TechItem({ tech }) {
  return (
    <div className="w-[50px] h-[50px] relative hover:scale-110 transition-all duration-200 cursor-pointer">
      <Image src={`/images/${tech}.svg`} alt={tech} fill priority />
    </div>
  )
}