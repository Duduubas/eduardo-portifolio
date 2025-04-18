import { MousePointerClick } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-6 px-4 py-12 md:py-16 max-w-md mx-auto">
            <h1 className="text-white text-center font-semibold text-7xl sm:text-8xl">404</h1>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl text-center">Ops! Parece que a página procurada por você não existe</h2>
            <Link href="/" className="flex items-center justify-center gap-2 bg-blue text-white text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-blue-700 transition mx-auto cursor-pointer">
                <MousePointerClick size={18} className="hidden sm:block" />
                Página inicial
            </Link>
        </div>
    )
}