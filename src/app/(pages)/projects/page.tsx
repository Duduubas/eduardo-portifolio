'use client'

/* ---- COMPONENTES ---- */
import Image from "next/image"
import { CodeXml, PanelTop } from "lucide-react"
import { projetos } from "@/app/components/projectsList"

export default function Projetos() {

  return (
    <section className="py-16 px-8 w-full flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16 relative">
          <h1 className="font-heading font-bold text-[3rem] text-blue inline-block relative pb-[0.30rem]">
            Meus projetos
          </h1>
          <h2 className="font-sans text-[1.5rem] font-bold text-white">
            Confira alguns dos meus melhores trabalhos abaixo.
          </h2>
        </div>

        {/* Grid de projetos adaptativo com comportamento dinâmico */}
        <div className="grid grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          place-items-center 
          [&>*:only-child]:col-span-full [&>*:only-child]:max-w-xl
          [&>*:nth-child(2):last-child]:col-span-2 [&>*:nth-child(2):last-child]:justify-self-center"
        >
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-cards bg-opacity-5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 flex flex-col h-full w-full max-w-md"
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
                <h3 className="text-[2rem] text-gray font-heading text-center font-semibold mb-2">
                  {projeto.nome}
                </h3>

                <h3 className="text-[1rem] text-blue font-sans font-semibold mb-4">
                  {projeto.tipo}
                </h3>

                <h3 className="text-[1rem] text-success font-sans font-semibold mb-4">
                  {projeto.disponibilidadeParaTodos}
                </h3>

                <h3 className="text-[1rem] text-danger font-sans font-semibold mb-4">
                  {projeto.indisponivel}
                </h3>

                <p className="text-white text-[1rem] font-sans leading-relaxed mb-6 flex-grow">
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
                        className="transition-transform duration-300 hover:scale-110 [filter:invert(84%)_sepia(0%)_saturate(0%)_hue-rotate(151deg)_brightness(93%)_contrast(85%);]"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col justify-center gap-4 mb-6 md:flex-row">
                  <a
                    href={projeto.linkWebsite}
                    target="_blank"
                    className="self-center flex gap-2 px-6 py-2 bg-blue text-white font-sans font-bold text-[1rem] rounded-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <PanelTop />
                    Website
                  </a>
                  <a
                  href={projeto.linkRepositorio}
                  target="_blank"
                  className="self-center flex gap-2 px-6 py-2 bg-blue text-white font-sans font-bold text-[1rem] rounded-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <CodeXml/>
                    Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}