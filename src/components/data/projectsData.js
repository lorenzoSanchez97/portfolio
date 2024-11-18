import agrovalleLogo from "@/public/images/agrovalle-logo.svg"
import akuaippaLogo from "@/public/images/akuaippa-logo.svg"
import jardinCosechaLogo from "@/public/images/jardin-cosecha-logo.svg"
import miTechStoreLogo from "@/public/images/mitechstore-logo.svg"

export const projectsData = {
    agrovalle: {
        name: "Agrovalle",
        type: "Landing Page",
        description: "Diseño y construcción de sitio web que exhibe los productos y servicios ofrecidos por la cooperativa.",
        image: agrovalleLogo,
        techs: [
            "figma",
            "html",
            "css",
            "bootstrap",
            "javascript",
        ]
    },
    akuaipa: {
        name: "Akuaipa",
        type: "Landing Page",
        description: "Diseño y construcción del sitio web oficial de la organización indígena Akuaippa de Uribia, La Guajira.",
        image: akuaippaLogo,
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
        description: "Construcción del sitio web oficial de la institución",
        image: jardinCosechaLogo,
        techs: [
            "react",
            "tailwind"
        ]
    },
    'mi-tech-store': {
        name: "mi Tech Store",
        type: "E-commerce",
        description: "Diseño y construcción de E-commerce de productos Xiaomi",
        image: miTechStoreLogo,
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
    }

}