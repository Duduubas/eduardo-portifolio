import { useState, useEffect, useRef, useCallback } from "react";

// Componente de Loading com transições garantidas
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

  // Estados com valores iniciais que garantem a entrada suave
  const [loadingOpacity, setLoadingOpacity] = useState(0);
  const [elementsVisible, setElementsVisible] = useState(false);
  const [titleStyle, setTitleStyle] = useState({ opacity: 0, y: -20 });
  const [loaderStyle, setLoaderStyle] = useState({ opacity: 0, y: -10 });
  const [textStyle, setTextStyle] = useState({ opacity: 0, x: -10 });
  const [tipBoxStyle, setTipBoxStyle] = useState({ opacity: 0, y: 10, scale: 0.95 });
  const [finalTransition, setFinalTransition] = useState({ active: false, opacity: 0 });
  const [mounted, setMounted] = useState(true);
  const [tipIndex, setTipIndex] = useState(0);
  
  // Ref para controlar timeouts
  const timeoutsRef = useRef<number[]>([]);
  
  // Função para adicionar timeouts ao ref e garantir limpeza adequada
  const safeTimeout = useCallback((callback: () => void, delay: number): void => {
    const id = window.setTimeout(() => {
      timeoutsRef.current = timeoutsRef.current.filter(timeoutId => timeoutId !== id);
      callback();
    }, delay);
    
    timeoutsRef.current.push(id);
  }, []);

  // Sequência completa de animação (usando useCallback para evitar recriação em cada render)
  const runAnimation = useCallback(() => {
    // Reset inicial para garantir que começamos do zero
    setLoadingOpacity(0);
    setElementsVisible(false);
    setTitleStyle({ opacity: 0, y: -20 });
    setLoaderStyle({ opacity: 0, y: -10 });
    setTextStyle({ opacity: 0, x: -10 });
    setTipBoxStyle({ opacity: 0, y: 10, scale: 0.95 });
    setFinalTransition({ active: false, opacity: 0 });
    
    // 1. Fade in do fundo preto
    safeTimeout(() => {
      setLoadingOpacity(1);
    }, 50);
    
    // 2. Tornar elementos visíveis para preparar animações
    safeTimeout(() => {
      setElementsVisible(true);
    }, 300);
    
    // 3. Animar entrada dos elementos em sequência
    safeTimeout(() => {
      setTitleStyle({ opacity: 1, y: 0 });
    }, 450);
    
    safeTimeout(() => {
      setLoaderStyle({ opacity: 1, y: 0 });
    }, 600);
    
    safeTimeout(() => {
      setTextStyle({ opacity: 1, x: 0 });
    }, 750);
    
    safeTimeout(() => {
      setTipBoxStyle({ opacity: 1, y: 0, scale: 1 });
    }, 900);
    
    // 4. Manter tela por um tempo antes de iniciar saída
    safeTimeout(() => {
      // Iniciar saída em sequência reversa
      setTipBoxStyle({ opacity: 0, y: 10, scale: 0.95 });
    }, 2200);
    
    safeTimeout(() => {
      setTextStyle({ opacity: 0, x: 10 });
    }, 2350);
    
    safeTimeout(() => {
      setLoaderStyle({ opacity: 0, y: 10 });
    }, 2500);
    
    safeTimeout(() => {
      setTitleStyle({ opacity: 0, y: -10 });
    }, 2650);
    
    // 5. Fade out do container principal
    safeTimeout(() => {
      setLoadingOpacity(0);
    }, 2800);
    
    // 6. Ativar transição preta final com fade-in
    safeTimeout(() => {
      setFinalTransition({ active: true, opacity: 1 });
    }, 3000);
    
    // 7. Fade-out final da tela preta
    safeTimeout(() => {
      setFinalTransition({ active: true, opacity: 0 });
    }, 3400);
    
    // 8. Completar e desmontar
    safeTimeout(() => {
      setMounted(false);
    }, 3800);
  }, [safeTimeout]);

  useEffect(() => {
    // Bloqueia o scroll durante as transições
    document.body.style.overflow = 'hidden';
    
    // Define um índice aleatório para a dica
    setTipIndex(Math.floor(Math.random() * tips.length));
    
    // Inicia a sequência de animação
    runAnimation();
    
    // Gerencia visibilidade da página
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Limpa todos os timeouts quando a aba fica invisível
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
      } else if (mounted) {
        // Reinicia a animação quando a aba volta a ficar visível
        runAnimation();
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Limpeza ao desmontar
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      timeoutsRef.current.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, [mounted, runAnimation, tips.length]);

  // Se o componente não estiver montado, não renderize nada
  if (!mounted) return null;

  return (
    <>
      {/* Tela de loading principal - sempre presente mas controlada por opacidade */}
      <div 
        className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[90] px-4"
        style={{
          opacity: loadingOpacity,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          transition: 'opacity 600ms cubic-bezier(0.65, 0, 0.35, 1)',
          willChange: 'opacity',
        }}
      >
        {elementsVisible && (
          <>
            <h2 
              className="text-white text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6 text-center"
              style={{
                opacity: titleStyle.opacity,
                transform: `translateY(${titleStyle.y}px)`,
                transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                willChange: 'transform, opacity',
              }}
            >
              Aguarde...
            </h2>
            
            <div 
              style={{
                opacity: loaderStyle.opacity,
                transform: `translateY(${loaderStyle.y}px)`,
                transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                willChange: 'transform, opacity',
              }}
            >
              <div className="custom-loader"></div>
            </div>
            
            <p 
              className="mt-3 md:mt-4 text-white text-base md:text-lg font-heading font-semibold text-center"
              style={{
                opacity: textStyle.opacity,
                transform: `translateX(${textStyle.x}px)`,
                transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                willChange: 'transform, opacity',
              }}
            >
              A página está carregando
            </p>
            
            <div 
              className="mt-6 md:mt-8 w-full max-w-md px-4 md:px-6 py-2 md:py-3 rounded-lg"
              style={{
                opacity: tipBoxStyle.opacity,
                transform: `translateY(${tipBoxStyle.y}px) scale(${tipBoxStyle.scale})`,
                transition: 'opacity 500ms ease-out, transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                backgroundColor: 'rgba(15, 23, 42, 0.3)',
                willChange: 'transform, opacity',
              }}
            >
              <p className="text-white text-xs md:text-sm italic text-center">
                {tips[tipIndex]}
              </p>
            </div>
          </>
        )}
      </div>
      
      {/* Camada de transição preta final */}
      {finalTransition.active && (
        <div 
          className="fixed inset-0 bg-black z-[100]"
          style={{
            opacity: finalTransition.opacity,
            transition: 'opacity 600ms cubic-bezier(0.65, 0, 0.35, 1)',
            willChange: 'opacity',
          }}
        />
      )}
    </>
  );
}