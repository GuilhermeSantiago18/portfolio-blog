import { ReactNode } from "react";
import './global.css';
import Providers from './Providers';
import NavBar from './components/NavBar/NavBar';
import WhattsButton from "@/components/WhattsButton";
import Footer from "./components/HomePage/Footer";

export const metadata = {
  title: 'Dra. Potira Azevedo',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
        <body>
          <Providers>
            <NavBar />
            <WhattsButton />
            {children}
          </Providers>
        </body>
    </html>
  )
}
