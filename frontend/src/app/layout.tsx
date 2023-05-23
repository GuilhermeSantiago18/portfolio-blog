import { GlobalProvider } from "@/context/global/global";
import { ReactNode } from "react";
import './global.css';
import Providers from './Providers';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Dra. Potira Azevedo',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
        <Providers>
        <body >
          <NavBar />
        {children}
        </body>
        </Providers>
    </html>
  )
}
