"use client"

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/css.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="header-container">
                <header className="header">
                    <div className="fixed top-0 left-0 w-full bg-black z-[100]">
                        <div className="fixed top-0 left-0 w-full bg-black z-[100]">
                            <nav className="flex justify-between items-center p-4 md:p-[1rem_2rem] max-w-7xl mx-auto">
                                <div className="navbar__content-nome">
                                    <Link href="/" className="text-[1.3rem] md:text-[1.7rem] font-black text-white font-heading">
                                        Eduardo B. <span className="text-blue">| Developer</span>
                                    </Link>
                                </div>

                                {/* Hamburger Menu - Visível apenas em telas menores e com borda */}
                                <div className="flex flex-col justify-between w-[30px] h-[21px] cursor-pointer md:hidden border-2 border-blue rounded-md p-4 relative"onClick={toggleMenu}>
                                    {/* Spans animados do hamburger menu */}
                                    <span className="w-full h-[3px] bg-blue absolute left-0 right-0 mx-auto transition-all duration-300"style={{width: '20px', top: '8px', transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none'}}/>
                                    <span className="w-full h-[3px] bg-blue absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 transition-all duration-300" style={{width: '20px', opacity: menuOpen ? 0 : 1}}/>
                                    <span className="w-full h-[3px] bg-blue absolute left-0 right-0 mx-auto transition-all duration-300" style={{width: '20px', bottom: '8px', transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none'}}/>
                                </div>

                                {/* Menu Navigation - Adaptado para responsividade */}
                                <div 
                                    className={`
                                        absolute md:relative top-full left-0 w-full md:w-auto
                                        bg-black md:bg-transparent
                                        flex-col md:flex-row
                                        p-4 md:p-0
                                        gap-4 md:gap-[1.5rem]
                                        border-b-2 md:border-b-0 border-blue-400
                                        transition-all duration-300
                                        ${menuOpen ? 'flex' : 'hidden'} md:flex
                                    `}
                                >
                                    <div className="navbar__content-buttons w-full md:w-auto">
                                        <Link href="/sobre" className="block w-full">
                                            <button 
                                                type="button" 
                                                className={`
                                                    font-sans font-bold bg-transparent 
                                                    border-2 border-blue-400 rounded-md 
                                                    text-white p-[0.5rem_1.5rem] text-[1.1rem] 
                                                    cursor-pointer w-full md:w-auto
                                                    ${styles.navbarContentButtons}
                                                `}
                                            >
                                                <span>Sobre</span>
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="navbar__content-buttons w-full md:w-auto">
                                        <Link href="/projetos" className="block w-full">
                                            <button 
                                                type="button" 
                                                className={`
                                                    font-sans font-bold bg-transparent 
                                                    border-2 border-blue-400 rounded-md 
                                                    text-white p-[0.5rem_1.5rem] text-[1.1rem] 
                                                    cursor-pointer w-full md:w-auto
                                                    ${styles.navbarContentButtons}
                                                `}
                                            >
                                                <span>Projetos</span>
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="navbar__content-buttons w-full md:w-auto">
                                        <a href="/contato" className="block w-full">
                                            <button 
                                                type="button" 
                                                className={`
                                                    font-sans font-bold bg-transparent 
                                                    border-2 border-blue-400 rounded-md 
                                                    text-white p-[0.5rem_1.5rem] text-[1.1rem] 
                                                    cursor-pointer w-full md:w-auto
                                                    ${styles.navbarContentButtons}
                                                `}
                                            >
                                                <span>Contato</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}