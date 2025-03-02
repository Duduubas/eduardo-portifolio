"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Importa para detectar mudanças de página
import Loading from "@/app/components/Loading";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Obtém a URL atual

  useEffect(() => {
    setIsLoading(true); // Ativa o loading ao mudar de página
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname]); // Executa sempre que a URL mudar

  return isLoading ? <Loading /> : <>{children}</>;
}
