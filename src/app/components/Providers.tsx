"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Otimizado para evitar múltiplas renderizações
  const handleNavigation = useCallback((url: string) => {
    if (url !== pathname) {
      setIsLoading(true);
      setTargetUrl(url);
    }
  }, [pathname]);

  // Callback para navegação após animação
  const navigateAfterLoading = useCallback(() => {
    if (targetUrl) {
      router.push(targetUrl);
      setIsLoading(false);
      setTargetUrl(null);
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
          !href.startsWith("mailto:")) {
        e.preventDefault();
        handleNavigation(href);
      }
    };

    document.addEventListener("click", handleClick, { passive: false });
    return () => document.removeEventListener("click", handleClick);
  }, [handleNavigation]);

  // Passa um callback para o componente de Loading para navegação
  return isLoading ? (
    <Loading onAnimationComplete={navigateAfterLoading} />
  ) : (
    <>{children}</>
  );
}