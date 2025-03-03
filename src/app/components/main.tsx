"use client"

import { useEffect, useState } from "react";
import Particles from '../components/Particles';

export default function Main() {
    const text = "Desenvolvedor Front-End";
    const [typedText, setTypedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setTypedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 75);

        // Alternar cursor piscante
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <>
        <main>
            {/* Particles component */}
            <Particles />

            <section className="w-full flex flex-col items-center justify-center text-center relative z-10 px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    {/* Responsividade para o título principal baseado nas regras do CSS */}
                    {/* 
                        Do CSS: .first-section__Content-texts h1 { font-size: 2.5rem; } (para 768px)
                        Adaptando para Tailwind: text-[7rem] para desktop, text-4xl para tablet (md: <768px) 
                    */}
                    <h1 className="text-4xl md:text-5xl lg:text-[7rem] font-bold text-white font-heading">
                        Eduardo <span className="text-blue">Brito</span>
                    </h1>
                    
                    {/* 
                        Aplicando responsividade também ao subtítulo, reduzindo o tamanho em telas menores
                        Não há regra específica no CSS para o subtítulo, mas seguindo o padrão
                    */}
                    <h2 className="text-xl md:text-2xl lg:text-[2.5rem] text-white font-sans mt-2">
                        {typedText}
                        <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
                    </h2>
                </div>
            </section>
        </main>
        </>
    );
}