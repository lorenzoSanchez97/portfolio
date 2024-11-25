import agrovalleLogo from "@/public/images/agrovalle-logo.svg"
import akuaippaLogo from "@/public/images/akuaippa-logo.svg"
import jardinCosechaLogo from "@/public/images/jardin-cosecha-logo.svg"
import miTechStoreLogo from "@/public/images/mitechstore-logo.svg"
import iamiaLogo from "@/public/images/iamia-logo.svg"

export const projectsData = {
    agrovalle: {
        name: "Agrovalle",
        type: "Landing Page",
        description: "Diseño y construcción de sitio web que exhibe los productos y servicios ofrecidos por la cooperativa.",
        image: agrovalleLogo,
        url: "https://agrovalle.vercel.app/",
        techs: [
            "figma",
            "html",
            "css",
            "bootstrap",
            "javascript",
        ]
    },
    akuaippa: {
        name: "Akuaippa",
        type: "Landing Page",
        description: "Diseño y construcción del sitio web oficial de la organización indígena Akuaippa de Uribia, La Guajira.",
        image: akuaippaLogo,
        url: "",
        techs: [
            "figma",
            "html",
            "css",
            "javascript",
        ]
    },
    'jardin-cosecha': {
        name: "Jardín Cosecha de Amor",
        type: "Sitio Web",
        description: "Construcción de sitio web (SPA) para institución de educación inicial",
        image: jardinCosechaLogo,
        url: "https://jardin-cosecha.pages.dev/",
        techs: [
            "html",
            "css",
            "react",
            "tailwind",
        ]
    },
    'mi-tech-store': {
        name: "mi Tech Store",
        type: "E-commerce",
        description: "Diseño y construcción de E-commerce de productos Xiaomi",
        image: miTechStoreLogo,
        url: "https://github.com/lorenzoSanchez97/mitechstore",
        techs: [
            "html",
            "css",
            "ejs",
            "react",
            "javascript",
            "node",
            "express",
            "api",
            "sequelize",
            "mysql"
        ]
    },
    'voicechat': {
        name: "Scraper + Voice Chat",
        type: "Funcionalidad de IA",
        description: "Sistema de Scraping de sitios web que alimenta un sistema conversacional basado en Inteligencia Artificial (Realtime Voice de OpenAI)",
        image: iamiaLogo,
        url: "https://iamia.mx/#services",
        techs: [
            "html",
            "scss",
            "react",
            "api",
            "openai-api",
            "n8n"
        ]
    },
}