"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Transition from "@/app/components/Loading";

// Lista de rotas que são consideradas "pesadas" e precisam do loading completo
const HEAVY_ROUTES = [
//   '/projects',
  '/gallery',
//   '/contact',
];

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [isHeavyTransition, setIsHeavyTransition] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Verifica se uma rota é pesada
  const checkIfHeavyRoute = useCallback((url: string): boolean => {
    return HEAVY_ROUTES.some(route => url.startsWith(route) || url === route);
  }, []);

  // Otimizado para evitar múltiplas renderizações
  const handleNavigation = useCallback((url: string) => {
    if (url !== pathname) {
      const isHeavy = checkIfHeavyRoute(url);
      setIsHeavyTransition(isHeavy);
      setIsTransitioning(true);
      setTargetUrl(url);
    }
  }, [pathname, checkIfHeavyRoute]);

  // Callback para navegação após animação
  const navigateAfterTransition = useCallback(() => {
    if (targetUrl) {
      router.push(targetUrl);
      // Breve atraso após a navegação para permitir que a página seja montada
      setTimeout(() => {
        setIsTransitioning(false);
        setTargetUrl(null);
      }, 100);
    }
  }, [router, targetUrl]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      const href = link?.getAttribute("href");

      // Verificações mais robustas de navegação
      if (href && 
          !href.startsWith("javascript:") && 
          !href.startsWith("#") && 
          !href.startsWith("tel:") && 
          !href.startsWith("mailto:") &&
          !href.includes("://") // Ignora links externos
      ) {
        e.preventDefault();
        handleNavigation(href);
      }
    };

    document.addEventListener("click", handleClick, { passive: false });
    return () => document.removeEventListener("click", handleClick);
  }, [handleNavigation]);

  // Passa um callback para o componente de Transição para navegação
  return isTransitioning ? (
    <Transition 
      onTransitionComplete={navigateAfterTransition} 
      isHeavyPage={isHeavyTransition} 
    />
  ) : (
    <>{children}</>
  );
}