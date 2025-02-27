import Image from "next/image";
import FotoLinkedin from "@/assets/public/fotolinkedin.jpg"
{/* AJUSTAR OS IMPORTS DAS IMAGENS AQUI NA LISTA */}

export default function Sobre() {
  return (
    <>
      {/* ------ SEÇÃO DE APRESENTAÇÃO ------ */}
      <section className="apresentacao-section">
        <div className="apresentacao-section__content">
          <div className="apresentacao-section__content-inicio">
            <h1>Quem sou eu?</h1>
            <h2>
              Opa, tudo bem? Me chamo Eduardo, mas na internet costumo usar o nome Duduubas. Sou desenvolvedor
              front-end e gosto de transformar ideias em interfaces bonitas, funcionais e intuitivas. Desde que comecei
              a programar, me apaixonei por criar experiências interativas e explorar o potencial da web.
              Sempre busco aprender e aprimorar minhas habilidades, experimentando novas tecnologias e aprimorando cada
              detalhe dos meus projetos. Gosto de desafios e curto testar ideias diferentes, seja em projetos pessoais
              ou desafios de desenvolvimento.
              Se quiser trocar uma ideia ou acompanhar minhas criações, fique à vontade!
            </h2>
            <Image
              className="apresentacao-section__imagem"
              src={FotoLinkedin} // Certifique-se de que a imagem está em "public/img/"
              alt="Eduardo (Duduubas)"
              width={200} // Ajuste o tamanho conforme necessário
              height={200}
            />
          </div>
        </div>
      </section>

      {/* ------ SEÇÃO DE HARDSKILLS ------ */}
      <section className="skills-section">
        <div className="skills-section__content">
          <div className="skills-section__content-inicio">
            <h1>Minhas Habilidades</h1>
            <h2>Explorando novas tecnologias e aprimorando minhas habilidades a cada projeto.</h2>
          </div>

          <div className="skills-section__content-grid">
            {/* Card HTML */}
            <div className="skill-card">
              <Image className="skill-icon" src="/img/icon-html.svg" alt="HTML5" width={50} height={50} />
              <h2>HTML</h2>
              <p>Estruturação semântica de páginas web com foco em acessibilidade e boas práticas.</p>
            </div>

            {/* Card CSS */}
            <div className="skill-card">
              <Image className="skill-icon" src="/img/icons-css.svg" alt="CSS3" width={50} height={50} />
              <h2>CSS</h2>
              <p>Estilização moderna com Flexbox, Grid e animações para criar interfaces responsivas.</p>
            </div>

            {/* Card JavaScript */}
            <div className="skill-card">
              <Image className="skill-icon" src="/img/icons-javascript.svg" alt="JavaScript" width={50} height={50} />
              <h2>JavaScript</h2>
              <p>Desenvolvimento de funcionalidades interativas e dinâmicas para web.</p>
            </div>

            {/* Card Tailwind */}
            <div className="skill-card">
              <Image className="skill-icon" src="/img/icons-javascript.svg" alt="JavaScript" width={50} height={50} />
              <h2>Tailwind</h2>
              <p>Desenvolvimento de funcionalidades interativas e dinâmicas para web.</p>
            </div>

            {/* Card React */}
            <div className="skill-card">
              <Image className="skill-icon" src="/img/icons-javascript.svg" alt="JavaScript" width={50} height={50} />
              <h2>React</h2>
              <p>Desenvolvimento de funcionalidades interativas e dinâmicas para web.</p>
            </div>

            {/* Card NextJs */}
            <div className="skill-card">
              <Image className="skill-icon" src="/img/icons-javascript.svg" alt="JavaScript" width={50} height={50} />
              <h2>Next.Js</h2>
              <p>Desenvolvimento de funcionalidades interativas e dinâmicas para web.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
