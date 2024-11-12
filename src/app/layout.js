import { Quicksand } from "next/font/google"
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Lorenzo Sanchez's personal portfolio, Fullstack Web Developer and AI Support.",
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