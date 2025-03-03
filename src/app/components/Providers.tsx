"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/components/Loading";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Ativa o loading ao mudar de página
    setIsLoading(true);
    
    // Aguarda tempo suficiente para a animação completa
    // 3800ms é o tempo total da animação no componente Loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3800);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return isLoading ? <Loading /> : <>{children}</>;
}