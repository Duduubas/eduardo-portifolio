import Image from "next/image"
import LinkedinIcon from "@/assets/public/icon-linkedin.svg"
import GithubIcon from "@/assets/public/icon-github.svg"
import DiscordIcon from "@/assets/public/icons-discord.svg"
import styles from "@/styles/css.module.css";


{/* ------ CONFIGURAÇÃO DO FOOTER ------ */}
export default function Footer(){
    return(
        <>
        <footer className="w-[100%] p-[2rem_0] bg-[rgba(255,215,0,0.05)] border-t border-[rgba(255,215,0,0.2)] mt-[4rem]">
            <div className="footer__content mw-[1200px] m-[0_auto] p-[0_2rem]">
                <div className="footer__content-options flex flex-col items-center gap-[1.5rem]">
                    <nav className="footer-options flex gap-[2rem] justify-center">
                        <a href="https://github.com/Duduubas" target="_blank">
                            <Image className={`w-[32px] h-[32px] cursor-pointer ${styles.iconImage}`} src={GithubIcon} alt="GitHub Icon"/>
                        </a>
                        <a href="https://linkedin.com/in/Duduubas" target="_blank">
                            <Image className={`w-[32px] h-[32px] cursor-pointer ${styles.iconImage}`} src={LinkedinIcon} alt="LinkedIn Icon"/>
                        </a>
                        <a href="https://discord.com/users/522531030834610211" target="_blank">
                            <Image className={`w-[32px] h-[32px] cursor-pointer ${styles.iconImage}`} src={DiscordIcon} alt="Discord Icon"/>
                        </a>
                    </nav>
                    <div className="legal-text">
                        <h3>&copy; Duduubas. Todos os direitos reservados.</h3>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}