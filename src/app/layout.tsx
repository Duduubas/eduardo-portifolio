import type { Metadata } from "next";
import "./globals.css";
import Icon from "@/assets/public/favicon.png";
import { Montserrat, Oxanium } from "next/font/google";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Providers from "@/app/components/Providers"; // Importa o gerenciador de estado

export const metadata: Metadata = {
  title: "Eduardo B. | Desenvolvedor Front-End",
  description: "Olá, seja bem-vindo(a) ao meu portifólio!",
  icons: {
    icon: Icon.src,
  },
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-black text-yellow">
        <Providers> {/* Usa o gerenciador de estado */}
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
