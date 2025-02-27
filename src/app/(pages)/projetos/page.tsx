import Image from "next/image"
import CarryMockup from "@/assets/public/mockup-website-carry.png"
import IconNext from "@/assets/public/icon-nextjs.svg"
import IconReact from "@/assets/public/icon-react.svg"
import IconHtml from "@/assets/public/icon-html.svg"
import IconTailwind from "@/assets/public/icon-tailwind.svg" 
import IconCss from "@/assets/public/icon-css.svg"
import IconJavascript from "@/assets/public/icon-javascript.svg"


export default function Projetos() {

  {/* ------ LISTA DE PROJETOS ------ */}
  const projetos = [
    {
      id: 1,
      nome: "Carry",
      descricao: "Carry é um bot para Discord desenvolvido para oferecer moderação eficiente e entretenimento interativo, proporcionando uma experiência completa e dinâmica para servidores.",
      imagem: CarryMockup,
      link: "https://carrybot.xyz",
      linguagens: [
        { nome: "HTML", icon: IconHtml },
        { nome: "CSS", icon: IconCss },
        { nome: "JS", icon: IconJavascript },
        // Adicione mais linguagens conforme necessário
      ]
    },
    {
      id: 2,
      nome: "Abstract Project",
      descricao: "O Abstract Project é um dos meus projetos de teste, desenvolvido como parte de um desafio do Frontend Practice. Esse site oferece desafios de diversos níveis, incentivando a prática e o aprimoramento das habilidades em desenvolvimento front-end.",
      link: "#",
      linguagens: [
        { nome: "HTML", icon: IconHtml },
        { nome: "CSS", icon: IconCss },
      ]
    },
    {
      id: 3,
      nome: "João Gomes - Portifólio",
      descricao: "O Abstract Project é um dos meus projetos de teste, desenvolvido como parte de um desafio do Frontend Practice. Esse site oferece desafios de diversos níveis, incentivando a prática e o aprimoramento das habilidades em desenvolvimento front-end.",
      link: "#",
      linguagens: [
        { nome: "HTML", icon: IconHtml },
        { nome: "JavScript", icon: IconJavascript },
        { nome: "Tailwind", icon: IconTailwind },
      ]
    },
    {
      id: 4,
      nome: "Spotify Copy",
      descricao: "O Abstract Project é um dos meus projetos de teste, desenvolvido como parte de um desafio do Frontend Practice. Esse site oferece desafios de diversos níveis, incentivando a prática e o aprimoramento das habilidades em desenvolvimento front-end.",
      link: "#",
      linguagens: [
        { nome: "HTML", icon: IconHtml },
        { nome: "CSS", icon: IconCss },
        { nome: "JavaScript", icon: IconJavascript },
      ]
    },
    {
      id: 5,
      nome: "DevStage",
      descricao: "O Abstract Project é um dos meus projetos de teste, desenvolvido como parte de um desafio do Frontend Practice. Esse site oferece desafios de diversos níveis, incentivando a prática e o aprimoramento das habilidades em desenvolvimento front-end.",
      link: "#",
      linguagens: [
        { nome: "HTML", icon: IconHtml },
        { nome: "React", icon: IconReact},
        { nome: "Next.js", icon: IconNext},
        { nome: "Tailwind", icon: IconTailwind },
      ]
    },
  ]


  {/* ------ CONFIGURAÇÕES DE EXIBIÇÃO ------ */}
  return (
    <section className="py-16 px-8 w-full flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16 relative">
          <h1 className="font-heading font-bold text-[2.5rem] text-yellow-400 inline-block relative pb-[0.30rem]">
            Meus projetos
          </h1>
          <h2 className="font-sans text-[1.4rem] font-bold text-white">
            Confira alguns dos meus melhores trabalhos abaixo.
          </h2>
        </div>

        {/* Grid de projetos adaptativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projetos.map((projeto) => (
            <div 
              key={projeto.id} 
              className="bg-background-cards bg-opacity-5 border-2 border-yellow-400 border-opacity-30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 flex flex-col h-full"
            >
              {projeto.imagem && (
                <div className="h-48 overflow-hidden flex items-center justify-center p-[1.25rem_1.25rem_1.25rem_]">
                  <div className="w-full h-full relative">
                    <Image 
                      src={projeto.imagem} 
                      alt={`${projeto.nome} Preview`} 
                      className="object-contain bg-white border rounded-2xl"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl text-yellow-400 text-center font-semibold mb-4">
                  {projeto.nome}
                </h3>
                
                <p className="text-white text-base leading-relaxed mb-6 flex-grow">
                  {projeto.descricao}
                </p>
                
                {/* Área de linguagens/tecnologias utilizadas */}
                <div className="flex flex-wrap gap-3 justify-center mb-6">
                  {projeto.linguagens?.map((item, index) => (
                    <div key={index} className="w-8 h-8" title={item.nome}>
                      <Image 
                        src={item.icon} 
                        alt={item.nome}
                        width={32}
                        height={32}
                        className="transition-transform duration-300 hover:scale-110 [filter:brightness(0)_saturate(100%)_invert(84%)_sepia(19%)_saturate(4695%)_hue-rotate(359deg)_brightness(105%)_contrast(104%)]"
                      />
                    </div>
                  ))}
                </div>
                
                <a 
                  href={projeto.link} 
                  className="self-center px-6 py-2 text-yellow-400 border border-yellow-400 rounded-md transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:-translate-y-1"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}