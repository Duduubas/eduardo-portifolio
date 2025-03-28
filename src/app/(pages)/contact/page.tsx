"use client";

import { lazy, Suspense, useState, useEffect } from "react";

// Carregamento dinâmico do formulário sem SSR
const ContactForm = lazy(() => import("@/app/components/ContactForm"));

// Componente placeholder com dimensões idênticas ao formulário real
function FormPlaceholder() {
  return (
    <div className="w-full max-w-lg min-h-[400px] bg-cards p-6 rounded-xl shadow-lg">
      <div className="h-10 mb-4 bg-gray-800 rounded-xl animate-pulse"></div>
      <div className="h-10 mb-4 bg-gray-800 rounded-xl animate-pulse"></div>
      <div className="h-10 mb-4 bg-gray-800 rounded-xl animate-pulse"></div>
      <div className="h-28 mb-4 bg-gray-800 rounded-xl animate-pulse"></div>
      <div className="h-10 bg-blue-500 rounded-xl animate-pulse"></div>
    </div>
  );
}

export default function Contact() {
  // Estado para evitar mudanças no layout após o carregamento inicial
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex flex-col md:flex-row max-w-6xl mx-auto p-4">

        <section className="w-full md:w-1/2 md:pr-8 py-8 text-[1.2rem]">
          <p className="mb-4">
            Dê vida à sua ideia com <strong className="text-blue">soluções web sob medida</strong>! Com experiência em <strong className="text-blue">desenvolvimento front-end</strong>, crio <strong className="text-blue">sites modernos</strong> e <strong className="text-blue">interfaces funcionais</strong> que oferecem a melhor experiência para seus usuários. Seja um <strong className="text-blue">portfólio profissional</strong>, uma <strong className="text-blue">landing page</strong> ou um sistema mais elaborado, seu projeto terá um <strong className="text-blue">design responsivo</strong> e otimizado.
          </p>
          <p>
            Nada de <strong className="text-danger">templates genéricos</strong>! Seu site precisa refletir sua identidade e atender às suas necessidades de forma estratégica. Vamos transformar sua visão em um <strong className="text-success">projeto bem desenvolvido</strong>? <strong className="text-blue">Entre em contato</strong> e vamos conversar!
          </p>

        </section>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Entre em contato
          </h2>
          <div className="w-full max-w-lg min-h-[400px] flex items-center justify-center">
            <Suspense fallback={<FormPlaceholder />}>
              {isClient ? <ContactForm /> : <FormPlaceholder />}
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}