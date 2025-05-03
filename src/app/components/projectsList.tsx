/* ---- MOCKUPS ----*/
import CarryMockup from "@/assets/public/mockup - website_carry.png"
import JoaoMockup from "@/assets/public/mockup - website_joao.png"
import DevstageMockup from "@/assets/public/mockup - website_devstage.png"
import SpotifyMockup from "@/assets/public/mockup - website_spotify.png"
import qrCodeMockup from "@/assets/public/Mockups - WebSite_qrcode.png"
import mapaCratoMockup from "@/assets/public/mockup - website_mapacrato.png"

/* ---- ICONS DAS LINGUAGENS ---- */
import IconNext from "@/assets/public/icon-nextjs.svg"
import IconReact from "@/assets/public/icon-react.svg"
import IconHtml from "@/assets/public/icon-html.svg"
import IconTailwind from "@/assets/public/icon-tailwind.svg"
import IconCss from "@/assets/public/icon-css.svg"
import IconJavascript from "@/assets/public/icon-javascript.svg"

/* ------ LISTA DE PROJETOS ------ */
export const projetos = [
    {
        id: 1,
        nome: "Carry",
        tipo: "Landing Page",
        disponibilidadeParaTodos: "Disponível para todos os dispósitivos.",
        descricao: "Carry é um bot para Discord desenvolvido para oferecer moderação eficiente e entretenimento interativo, proporcionando uma experiência completa e dinâmica para servidores.",
        imagem: CarryMockup,
        linkWebsite: "https://carrybot.xyz",
        linkRepositorio: "",
        linguagens: [
            { nome: "HTML", icon: IconHtml },
            { nome: "CSS", icon: IconCss },
            { nome: "JS", icon: IconJavascript },
        ]
    },
    {
        id: 2,
        nome: "Mapa do Crato - Guia Turístico",
        tipo: "Landing Page",
        disponibilidadeParaTodos: "Disponível para todos os dispósitivos.",
        descricao: "O Guia Turístico de Crato-CE apresenta os principais pontos históricos da cidade através de uma timeline interativa, com modais informativos e animações suaves para uma experiência de navegação envolvente.",
        imagem: mapaCratoMockup,
        linkWebsite: "https://mapa-crato.eduardobrito.dev/",
        linkRepositorio: "https://github.com/Duduubas/mapa-crato",
        linguagens: [
            { nome: "HTML", icon: IconHtml },
            { nome: "CSS", icon: IconCss },
            { nome: "JS", icon: IconJavascript },
        ]
    },
    {
        id: 3,
        nome: "João Gomes",
        tipo: "Portifólio",
        disponibilidadeParaTodos: "Disponível para todos os dispósitivos.",
        descricao: "Portifólio desenvolvido para apresentar as formações, experiências e principais habilidades de João Gomes. O projeto traz um design moderno e informativo, destacando sua trajetória profissional de forma organizada e acessível.",
        linkWebsite: "https://joao-gomes.vercel.app/",
        linkRepositorio: "https://github.com/Duduubas/joao-gomes",
        imagem: JoaoMockup,
        linguagens: [
            { nome: "HTML", icon: IconHtml },
            { nome: "JavScript", icon: IconJavascript },
            { nome: "Tailwind", icon: IconTailwind },
        ]
    },
    {
        id: 4,
        nome: "Spotify Copy",
        tipo: "Tipo de site",
        indisponivel: "Temporariamente indisponível para dispositivos móveis.",
        descricao: "Página inspirada no layout do Spotify, criada durante a Imersão Front-End da Alura. O projeto reproduz a interface original com algumas adaptações, explorando conceitos de responsividade, estilização avançada e estruturação de páginas web.",
        linkWebsite: "#",
        linkRepositorio: "https://github.com/Duduubas/spotify-imersao-alura",
        imagem: SpotifyMockup,
        linguagens: [
            { nome: "HTML", icon: IconHtml },
            { nome: "CSS", icon: IconCss },
            { nome: "JavaScript", icon: IconJavascript },
        ]
    },
    {
        id: 5,
        nome: "DevStage",
        tipo: "Tipo de site",
        disponibilidadeParaTodos: "Disponível para todos os dispósitivos.",
        descricao: "Página inspirada no evento CodeCraft Summit, desenvolvida durante a NLW Connect da Rocketseat. O site traz informações detalhadas sobre o evento, programação, palestrantes e inscrição, garantindo uma experiência dinâmica e intuitiva para os participantes.",
        linkWebsite: "https://devstage-nlw.vercel.app/",
        linkRepositorio: "https://github.com/Duduubas/nlw-connect-react",
        imagem: DevstageMockup,
        linguagens: [
            { nome: "HTML", icon: IconHtml },
            { nome: "React", icon: IconReact },
            { nome: "Next.js", icon: IconNext },
            { nome: "Tailwind", icon: IconTailwind },
        ]
    },
    {
        id: 6,
        nome: "QR Code Generator",
        tipo: "Tipo de site",
        disponibilidadeParaTodos: "Disponível para todos os dispósitivos.",
        descricao: "Gerador de QR Code desenvolvido com Next.js e TypeScript que permite aos usuários criar códigos QR personalizados de forma simples e rápida. O projeto oferece customização completa de cores, adição de títulos e descrições, além de download automático em formato PNG, tudo com uma interface intuitiva e responsiva.",
        linkWebsite: "https://qrcodegenerator.eduardobrito.dev",
        linkRepositorio: "https://github.com/Duduubas/qr-code-generator",
        imagem: qrCodeMockup,
        linguagens: [
            { nome: "React", icon: IconReact },
            { nome: "Next.js", icon: IconNext },
            { nome: "Tailwind", icon: IconTailwind },
        ]
    },
]