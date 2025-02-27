import type { Metadata } from "next";
import "./globals.css";
import Icon from "@/assets/public/favicon.png"; // Importa a imagem
import {Montserrat, Oxanium } from 'next/font/google'
import Footer from "./components/footer";
import "@/styles/css.module.css"
import Header from "./components/header";


export const metadata: Metadata = {
  title: "Duduubas - Portifólio em React",
  description: "Olá, seja bem-vindo ao meu portfólio em React!",
  icons: {
    icon: Icon.src, // Usa o caminho da imagem como string
  },
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable:'--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable:'--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-background text-yellow">
        <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
