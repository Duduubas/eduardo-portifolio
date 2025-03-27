"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "@/styles/css.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Fecha o menu ao mudar de rota
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Previne scroll quando menu mobile está aberto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navItems = [
        { href: '/about', label: 'Sobre' },
        { href: '/projects', label: 'Projetos' },
        { href: '/contact', label: 'Contato' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-black z-50">
            <nav className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="text-[1.3rem] md:text-[1.7rem] font-black text-white font-heading"
                    >
                        Eduardo B. <span className="text-blue">| Developer</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    font-sans font-bold
                                    border-2 border-blue-400 rounded-md
                                    text-white px-6 py-2 text-[1.1rem]
                                    transition-all duration-300
                                    hover:bg-blue-400 hover:text-black
                                    ${styles.navbarContentButtons}
                                    ${pathname === item.href ? 'bg-blue-400 text-black' : ''}
                                `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden w-[30px] h-[30px] relative border-2 border-blue rounded-md p-4"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span 
                            className={`
                                absolute left-1/2 top-1/2 w-5 h-[3px] bg-blue
                                transition-all duration-300 -translate-x-1/2
                                ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}
                            `}
                        />
                        <span 
                            className={`
                                absolute left-1/2 top-1/2 w-5 h-[3px] bg-blue
                                transition-all duration-300 -translate-x-1/2 -translate-y-1/2
                                ${menuOpen ? 'opacity-0' : 'opacity-100'}
                            `}
                        />
                        <span 
                            className={`
                                absolute left-1/2 top-1/2 w-5 h-[3px] bg-blue
                                transition-all duration-300 -translate-x-1/2
                                ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}
                            `}
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div 
                    className={`
                        md:hidden fixed left-0 w-full bg-black
                        transition-all duration-300 ease-in-out
                        ${menuOpen ? 'top-16 opacity-100' : '-top-full opacity-0'}
                    `}
                    style={{
                        height: menuOpen ? 'calc(100vh - 4rem)' : '0',
                        visibility: menuOpen ? 'visible' : 'hidden'
                    }}
                >
                    <div className="flex flex-col space-y-4 p-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    font-sans font-bold
                                    border-2 border-blue-400 rounded-md
                                    text-white p-[0.5rem_1.5rem] text-[1.1rem]
                                    text-center transition-all duration-300
                                    hover:bg-blue-400 hover:text-black
                                    ${styles.navbarContentButtons}
                                    ${pathname === item.href ? 'bg-blue-400 text-black' : ''}
                                `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}