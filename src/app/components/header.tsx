import Link from "next/link";
import styles from "@/styles/css.module.css";

{/* ------ CONFIGURAÇÃO DO HEADER / NAVBAR ------ */}
export default function Header(){
    return(
        <header className="header">
        <div className="layout fixed top-0 left-0 w-[100%] bg-background-cards border-b-2 border-[#FFD700] z-[100]">
          <div className="navbar fixed top-0 left-0 w-[100%] bg-background-cards border-b-2 border-[#FFD700] z-[100]">
            <nav className="navbar__content flex justify-between items-center p-[1rem_2rem]">
              <div className="navbar__content-nome">
                <span className="text-[2rem] font-black text-yellow">Duduubas</span>
              </div>

              <div className="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="navbar__buttons-wrapper flex gap-[1.5rem]">
                <div className="navbar__content-buttons">
                  <Link href="/quem-sou-eu">
                    <button type="button"  className={`bg-transparent border-2 border-yellow-400 rounded-md text-yellow p-[0.5rem_1.5rem] text-[1.1rem] font-medium cursor-pointer ${styles.navbarContentButtons}`}>
                      <span>Quem sou eu?</span>
                    </button>
                  </Link>
                </div>

                <div className="navbar__content-buttons">
                  <Link href="/projetos">
                    <button type="button" className={`bg-transparent border-2 border-yellow-400 rounded-md text-yellow p-[0.5rem_1.5rem] text-[1.1rem] font-medium cursor-pointer ${styles.navbarContentButtons}`}>
                      <span>Projetos</span>
                    </button>
                  </Link>
                </div>

                <div className="navbar__content-buttons">
                  <a href="https://github.com/Duduubas">
                    <button type="button" className={`bg-transparent border-2 border-yellow-400 rounded-md text-yellow p-[0.5rem_1.5rem] text-[1.1rem] font-medium cursor-pointer ${styles.navbarContentButtons}`}>
                      <span>Github</span>
                    </button>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
}