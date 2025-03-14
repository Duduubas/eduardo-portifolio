import { useState, useEffect, useRef, useCallback } from "react";

interface TransitionProps {
  onTransitionComplete?: () => void;
  isHeavyPage?: boolean;
}

export default function Transition({ 
  onTransitionComplete = () => {}, 
  isHeavyPage = false 
}: TransitionProps) {
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

  // Estado para controle de animações
  const [transitionState, setTransitionState] = useState<'initial' | 'animating' | 'completed'>('initial');
  const [tipIndex, setTipIndex] = useState(0);
  const [mounted, setMounted] = useState(true);
  
  // Refs para gerenciar timeouts
  const timeoutsRef = useRef<number[]>([]);
  
  // Função segura para criar timeouts
  const safeTimeout = useCallback((callback: () => void, delay: number): void => {
    const id = window.setTimeout(() => {
      timeoutsRef.current = timeoutsRef.current.filter(timeoutId => timeoutId !== id);
      callback();
    }, delay);
    
    timeoutsRef.current.push(id);
  }, []);

  // Função para executar a transição lateral azul
  const runSlideTransition = useCallback(() => {
    setTransitionState('animating');
    
    // Fase 1: Entrada da transição
    document.body.style.overflow = 'hidden';
    
    // Fase 2: Completar a transição e desmontar
    safeTimeout(() => {
      setTransitionState('completed');
      safeTimeout(() => {
        setMounted(false);
        onTransitionComplete();
        document.body.style.overflow = '';
      }, 500); // Reduzido de 700ms para 500ms
    }, 600); // Reduzido de 800ms para 600ms
  }, [safeTimeout, onTransitionComplete]);

  // Função para executar a animação de loading completa
  const runLoadingAnimation = useCallback(() => {
    setTransitionState('animating');
    
    // Bloqueia o scroll durante as transições
    document.body.style.overflow = 'hidden';
    
    // Define um índice aleatório para a dica
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTipIndex(randomIndex);
    
    // Sequência de animação de loading
    safeTimeout(() => {
      // Mantém a tela de loading por um tempo específico
      safeTimeout(() => {
        setTransitionState('completed');
        
        // Completar e desmontar
        safeTimeout(() => {
          setMounted(false);
          onTransitionComplete();
          document.body.style.overflow = '';
        }, 400); // Reduzido de 600ms para 400ms
      }, 1800); // Reduzido de 2500ms para 1800ms
    }, 400); // Reduzido de 600ms para 400ms
  }, [safeTimeout, onTransitionComplete, tips.length]);

  // Efeito para iniciar a animação apropriada
  useEffect(() => {
    // Escolhe entre transição simples ou loading completo
    if (isHeavyPage) {
      runLoadingAnimation();
    } else {
      runSlideTransition();
    }
    
    // Gerencia visibilidade da página
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Limpa todos os timeouts quando a aba fica invisível
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Limpeza ao desmontar
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      timeoutsRef.current.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, [isHeavyPage, runLoadingAnimation, runSlideTransition]);

  // Se o componente não estiver montado, não renderize nada
  if (!mounted) return null;

  return (
    <>
      {/* Transição lateral azul */}
      {!isHeavyPage && (
        <div 
          className="fixed inset-0 z-[90]"
          style={{
            transform: `translateX(${
              transitionState === 'initial' 
                ? '-100%' 
                : transitionState === 'animating' 
                  ? '0' 
                  : '100%'
            })`,
            transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)', // Reduzido de 700ms para 500ms
            willChange: 'transform',
            background: 'linear-gradient(90deg, #1a365d 0%, #2563eb 50%, #1a365d 100%)',
          }}
        />
      )}
      
      {/* Tela de loading (apenas para páginas pesadas) */}
      {isHeavyPage && (
        <div 
          className="fixed inset-0 flex flex-col items-center justify-center bg-blue-900/95 z-[90] px-4"
          style={{
            opacity: transitionState === 'initial' ? 0 : transitionState === 'animating' ? 1 : 0,
            transition: 'opacity 400ms cubic-bezier(0.65, 0, 0.35, 1)', // Reduzido de 600ms para 400ms
            willChange: 'opacity',
          }}
        >
          <h2 
            className="text-white text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6 text-center"
          >
            Aguarde...
          </h2>
          
          <div className="custom-loader" />
          
          <p 
            className="mt-3 md:mt-4 text-white text-base md:text-lg font-heading font-semibold text-center"
          >
            A página está carregando
          </p>
          
          <div 
            className="mt-6 md:mt-8 w-full max-w-md px-4 md:px-6 py-2 md:py-3 rounded-lg"
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.3)',
            }}
          >
            <p className="text-white text-xs md:text-sm italic text-center">
              {tips[tipIndex]}
            </p>
          </div>
        </div>
      )}
    </>
  );
}