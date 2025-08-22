import { Prompt } from "next/font/google";

import { Aside } from "@/components/Aside";
import "./globals.css";

export const metadata = {
  title: "Web Code Connect",
  description: "Projeto Alura",
};

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={prompt.className}>
      <body>
        <Aside />
        {children}
      </body>
    </html>
  );
}
