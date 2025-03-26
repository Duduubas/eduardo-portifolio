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
        <section className="w-full md:w-1/2 md:pr-8 py-8">
          <p className="mb-4">
            Transforme sua ideia em realidade digital! Com experiência sólida em desenvolvimento de software, eu crio soluções personalizadas que fazem seu negócio decolar. Cada projeto é único, e juntos podemos desenvolver exatamente o que você precisa - seja um aplicativo inovador, um site responsivo ou um sistema empresarial completo.
          </p>
          <p>
            Não perca mais tempo com soluções genéricas. Minha expertise técnica aliada à sua visão podem resultar em produtos digitais que realmente se destacam no mercado. Quer ver sua ideia ganhar vida? Vamos conversar e fazer acontecer! Seu projeto merece uma solução sob medida, e estou pronto para entregá-la.
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
