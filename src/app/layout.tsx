import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Oxanium } from "next/font/google";
import Icon from "@/assets/public/favicon.png";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Providers from "@/app/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL('https://eduardobrito.dev'), 
  title: {
    default: "Eduardo B. | Desenvolvedor Front-End",
    template: "%s | Eduardo B.",
  },
  description: "Portfólio de Eduardo Brito, Desenvolvedor Front-End. Confira meus projetos e entre em contato para desenvolvimento web.",
  keywords: ['desenvolvedor front-end', 'portfolio', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Eduardo Brito', url: 'https://eduardobrito.dev' }],
  creator: 'Eduardo Brito',
  publisher: 'Eduardo Brito',
  robots: {
    index: true,
    follow: true,
  },
  
  // Open Graph - para compartilhamento em redes sociais
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://eduardobrito.dev',
    siteName: 'Eduardo B. | Desenvolvedor Front-End',
    title: 'Eduardo B. | Desenvolvedor Front-End',
    description: 'Portfólio de Eduardo Brito, Desenvolvedor Front-End. Confira meus projetos e entre em contato para desenvolvimento web.',
  },
  
  // Twitter Card
  twitter: {
    ////card: 'summary_large_image',
    title: 'Eduardo B. | Desenvolvedor Front-End',
    description: 'Portfólio de Eduardo Brito, Desenvolvedor Front-End. Confira meus projetos e entre em contato para desenvolvimento web.',
    ////images: ['https://seusite.com.br/twitter-image.jpg'],
  },
  
  // Ícones
  icons: {
    icon: Icon.src,
  },
  
  // Configuração de aplicativo da web
  applicationName: 'Eduardo B. | Desenvolvedor Front-End',
  appleWebApp: {
    capable: true,
    title: 'Eduardo B. | Desenvolvedor Front-End',
    statusBarStyle: 'black-translucent',
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
