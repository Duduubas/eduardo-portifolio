import { useState, useEffect } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="custom-loader"></div>
      <p className="mt-4 text-white text-lg font-semibold">Olá! A página está carregando...</p>
    </div>
  );
}
