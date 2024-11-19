import digitalHouseLogo from "@/public/images/digital-house-logo.webp"
import udemyLogo from "@/public/images/udemy-logo.webp"
import freeCodeCampLogo from "@/public/images/freeCodeCamp-logo.webp"
import cetLogo from "@/public/images/cet-logo.webp"
import uncoLogo from "@/public/images/unco-logo.webp"

export const educationData = {
    next: {
        title: "NextJS 15",
        institution: "Udemy",
        date: "Sep 2024 - Nov 2024",
        image: udemyLogo
    },
    'free-code-camp': {
        title: "Responsive Web Design",
        institution: "freeCodeCamp",
        date: "Dic 2023 - Feb 2024",
        image: freeCodeCampLogo
    },
    'full-stack': {
        title: "Full Stack Web Development",
        institution: "Digital House",
        date: "Nov 2022 - Jun 2023",
        image: digitalHouseLogo
    },
    historia: {
        title: "Profesorado y Licenciatura en Historia",
        institution: "Universidad Nacional del Comahue",
        date: "Ago 2017 - Dic 2023",
        image: uncoLogo
    },
    electronica: {
        title: "Tecnicatura en Electrónica",
        institution: "C.E.T n°8",
        date: "Mar 2011 - Dic 2016",
        image: cetLogo
    },
}