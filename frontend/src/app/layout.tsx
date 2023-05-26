import { ReactNode } from "react";
import './global.css';
import Providers from './Providers';
import WhatsButton from "@/components/WhatsButton";
import Footer from "../components/Footer";
import Contact from '../components/Contact';
import { NavBar } from '@/components/NavBar';

export const metadata = {
  title: 'Dra. Potira Azevedo'
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <html suppressHydrationWarning lang="pt-BR">
        <head />
        <body>
          <Providers>
            <NavBar />
            <WhatsButton />
            {children}
            <Contact />
            <Footer />
          </Providers>
        </body>
    </html>
  )
}
