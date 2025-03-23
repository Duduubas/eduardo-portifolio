"use client";

import dynamic from "next/dynamic";

// Carrega o formulário sem delay no primeiro acesso
const ContactForm = dynamic(() => import("@/app/components/ContactForm"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-black">
      <h2 className="text-[1.5rem] md:text-3xl font-semibold font-heading text-white mb-6">
        Entre em contato
      </h2>
      <ContactForm />
    </div>
  );
}
