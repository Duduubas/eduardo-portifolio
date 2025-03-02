import { useState, useEffect, useRef } from "react";

export default function Loading() {
  const tips = [
    "Lembre-se: Flexbox é seu amigo para layouts responsivos",
    "Performance importa: sempre otimize suas imagens",
    "Prefira usar rem em vez de px para melhor acessibilidade",
    "Componentes reutilizáveis = código mais limpo e manutenível",
    "CSS Grid + Flexbox = combinação perfeita para layouts modernos",
    "Teste em múltiplos dispositivos antes de enviar para produção",
    "async/await torna seu código assíncrono mais legível",
    "State lifting é seu aliado para compartilhar dados entre componentes"
  ];

  // Mounted state para garantir que o componente seja renderizado imediatamente
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [tipIndex, setTipIndex] = useState<number>(0);
  
  // Ref para controlar timeouts
  const timeoutsRef = useRef<number[]>([]);
  
  // Função para adicionar timeouts ao ref e garantir limpeza adequada
  const safeTimeout = (callback: () => void, delay: number): void => {
    const id = window.setTimeout(() => {
      // Remove o ID da lista antes de executar o callback
      timeoutsRef.current = timeoutsRef.current.filter(timeoutId => timeoutId !== id);
      callback();
    }, delay);
    
    timeoutsRef.current.push(id);
  };

  // Função para iniciar o processo de saída
  const startExit = () => {
    setLeaving(true);
    
    // Define tempo para remover o componente após a animação de saída
    safeTimeout(() => {
      setMounted(false);
    }, 800); // Duração da transição + pequena margem
  };

  useEffect(() => {
    // Definir como montado imediatamente
    setMounted(true);
    
    // Gerencia visibilidade da página para pausar/retomar animações
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Limpa todos os timeouts quando a aba fica invisível
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
      } else if (mounted && !leaving) {
        // Reinicia a animação quando a aba volta a ficar visível
        setShow(false);
        safeTimeout(() => setShow(true), 10);
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Define um índice aleatório para a dica
    setTipIndex(Math.floor(Math.random() * tips.length));
    
    // Inicia a animação de entrada sem delay para evitar problemas de performance
    setShow(true);

    // Mantém o loader visível por tempo suficiente e então inicia fade-out
    safeTimeout(startExit, 2500);

    // Limpeza ao desmontar
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  // Se o componente não estiver montado, não renderize nada
  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 px-4"
      style={{
        opacity: leaving ? 0 : (show ? 1 : 0),
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        transition: 'opacity 0.5s ease-in-out',
        willChange: 'opacity', // Otimização para GPU
        pointerEvents: leaving ? 'none' : 'auto', // Desativa interações durante a saída
      }}
    >
      <h2 
        className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          transitionDelay: show ? '0.1s' : '0s',
          willChange: 'transform, opacity', // Otimização para GPU
        }}
      >
        Bem-vindo!
      </h2>
      
      <div 
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(-15px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          transitionDelay: show ? '0.2s' : '0.05s',
          willChange: 'transform, opacity',
        }}
      >
        <div className="custom-loader"></div>
      </div>
      
      <p 
        className="mt-3 md:mt-4 text-white text-base md:text-lg font-heading font-semibold text-center"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          transitionDelay: show ? '0.3s' : '0.1s',
          willChange: 'transform, opacity',
        }}
      >
        A página está carregando...
      </p>
      
      <div 
        className="mt-6 md:mt-8 w-full max-w-md px-4 md:px-6 py-2 md:py-3 rounded-lg"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.95)',
          transition: 'opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: show ? '0.4s' : '0.15s',
          backgroundColor: 'rgba(15, 23, 42, 0.3)', // bg-cards com opacity explícito
          willChange: 'transform, opacity',
        }}
      >
        <p className="text-white text-xs md:text-sm italic text-center">
          {tips[tipIndex]}
        </p>
      </div>
    </div>
  );
}