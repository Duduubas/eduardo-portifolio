import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Oxanium } from "next/font/google";
import Icon from "@/assets/public/favicon.png";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Providers from "@/app/components/Providers";

export const metadata: Metadata = {
  title: "Eduardo B. | Desenvolvedor Front-End",
  description: "Portfólio de Eduardo Brito, Desenvolvedor Front-End. Confira meus projetos e entre em contato para desenvolvimento web.",
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
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
