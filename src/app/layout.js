import { Quicksand } from "next/font/google"
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Lorenzo Sanchez's personal portfolio, Fullstack Web Developer and AI Support.",
  metadataBase: new URL("https://portfolio-two-eta-35.vercel.app"),
  openGraph: {
    title: "Lorenzo Sanchez | Full Stack Developer",
    description: "Ven a conocer más sobre mi experiencia laboral, formación y proyectos!",
    url: "https://portfolio-two-eta-35.vercel.app",
    images: [
      {
        url: "/images/opengraph/opengraph-300x300.png",
        width: 300,
        height: 300,
      },
      {
        url: "/images/opengraph/opengraph-1200x630.png",
        width: 1200,
        height: 630,
      },
    ],
  }
};

// Font Quicksand
const quicksand = Quicksand({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="h-screen bg-dark-grey bg-radial bg-[size:50px_50px]">
        {children}
      </body>
    </html>
  );
}