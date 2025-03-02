import { useState, useEffect } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Mantém o componente visível por pelo menos 1 segundo
    const timeout = setTimeout(() => {
      // Inicia o efeito de fade-out
      setFadeOut(true);
      
      // Remove o componente após a animação de fade-out
      const removeTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Duração da animação de fade-out
      
      return () => clearTimeout(removeTimeout);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div 
        className={`transform transition-all duration-700 ${fadeOut ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <div className="custom-loader"></div>
      </div>
      <p 
        className={`mt-4 text-white text-lg font-semibold transform transition-all duration-700 delay-100 ${fadeOut ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'}`}
      >
        Olá! A página está carregando...
      </p>
    </div>
  );
}