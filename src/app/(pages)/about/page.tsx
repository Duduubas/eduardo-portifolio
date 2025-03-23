import Image from "next/image";
import FotoLinkedin from "@/assets/public/fotolinkedin.jpg";
import style from "@/styles/css.module.css";

// IMAGENS DE LINGUAGENS
import IconHtml from "@/assets/public/icon-html.svg";
import IconCSS from "@/assets/public/icon-css.svg";
import IconJavaScript from "@/assets/public/icon-javascript.svg";
import IconTailwind from "@/assets/public/icon-tailwind.svg";
import IconReact from "@/assets/public/icon-react.svg";
import IconNext from "@/assets/public/icon-nextjs.svg";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-dark sobre-page">
      {/* ------ SEÇÃO DE APRESENTAÇÃO ------ */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">
          {/* Texto */}
          <div className="w-full md:w-2/3 space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-blue">Quem sou eu?</h1>
            <div className="text-base md:text-lg text-white space-y-3 md:space-y-4 text-justify">
              <p>
                Opa, tudo bem? Me chamo Eduardo. Sou desenvolvedor
                front-end e gosto de transformar ideias em interfaces bonitas, funcionais e intuitivas.
              </p>
              <p>
                Desde que comecei a programar, me apaixonei por criar experiências interativas e explorar o potencial da web.
                Sempre busco aprender e aprimorar minhas habilidades, experimentando novas tecnologias e aprimorando cada
                detalhe dos meus projetos.
              </p>
              <p>
                Gosto de desafios e curto testar ideias diferentes, seja em projetos pessoais
                ou desafios de desenvolvimento. Se quiser trocar uma ideia ou acompanhar minhas criações, fique à vontade!
              </p>
            </div>
          </div>

          {/* Foto (agora acima do texto em mobile) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 overflow-hidden rounded-full shadow-lg border-4 border-blue">
              <Image
                src={FotoLinkedin}
                alt="Eduardo"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------ SEÇÃO DE HARDSKILLS E SOFTSKILLS ------ */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* HardSkills */}
            <div>
              <h1 className="text-3xl font-heading md:text-4xl font-bold text-blue text-center mb-8">
                Minhas Habilidades
              </h1>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: IconHtml, name: "HTML" },
                  { icon: IconCSS, name: "CSS" },
                  { icon: IconJavaScript, name: "JavaScript" },
                  { icon: IconTailwind, name: "Tailwind" },
                  { icon: IconReact, name: "React" },
                  { icon: IconNext, name: "Next.js" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-cards rounded-xl shadow-md p-6 flex flex-col items-center justify-center group transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className={style.skillIcon} 
                    />
                    <p className="text-white font-sans text-center mt-2 font-semibold">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SoftSkills */}
            <div>
              <h1 className="text-3xl font-heading md:text-4xl font-bold text-blue text-center mb-8">
                Minhas Qualidades
              </h1>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Resolução de Problemas",
                  "Trabalho em Equipe",
                  "Atenção aos Detalhes",
                  "Aprendizado Rápido",
                  "Comunicação",
                  "Adaptabilidade",
                ].map((skill, index) => (
                  <div key={index} className="bg-cards rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                    <p className="text-white font-sans font-semibold">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
