import { Aside } from '@/components/Aside';
import './globals.css'

export const metadata = {
  title: "Web Code Connect",
  description: "Projeto Alura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Aside />
        {children}
      </body>
    </html>
  );
}
