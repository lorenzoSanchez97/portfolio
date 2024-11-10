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
      <body className="bg-dark-grey">
        {children}
      </body>
    </html>
  );
}