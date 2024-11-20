"use client"

import { useState, useEffect } from "react";
import { techsData } from "./data/techsData";
import TechCard from "./TechCard";

const techs = Object.keys(techsData);

export default function TechnologyStack() {

  const [highlightedIndex, setHighlightedIndex] = useState(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setHighlightedIndex(index); // Resalta la tarjeta actual
      index += 1; // Incrementa el índice

      // Si el índice alcanza el final del array, se detiene el intervalo
      if (index >= techs.length) {
        clearInterval(interval);
        // Después de un breve tiempo, se apaga el último resaltado
        setTimeout(() => {
          setHighlightedIndex(null);
        }, 100);
      }
    }, 100); // Duración del ciclo

    return () => clearInterval(interval); // Se remueve el intervalo al desmontar
  }, []);

  return (
    <section className="flex flex-col items-center text-bright-white w-[95%]">
      <h1 className="text-2xl text-light-blue ">Technology Stack</h1>
      <div className="flex flex-wrap justify-center gap-y-2 gap-x-2 mt-8">
        {techs.map((tech, index) => <TechCard techName={tech} key={index} isHighlighted={index === highlightedIndex} />)}
      </div>
    </section>
  )
}