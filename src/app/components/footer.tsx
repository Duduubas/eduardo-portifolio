import Image from "next/image"
import LinkedinIcon from "@/assets/public/icon-linkedin.svg"
import GithubIcon from "@/assets/public/icon-github.svg"
import DiscordIcon from "@/assets/public/icon-discord.svg"
import styles from "@/styles/css.module.css";
import InstagramIcon from "@/assets/public/icon-instagram.svg"


{/* ------ CONFIGURAÇÃO DO FOOTER ------ */}
export default function Footer(){
    return(
        <>
        <footer className="w-[100%] p-[1rem_0]">
            <div className="footer__content mw-[1200px] m-[0_auto] p-[0_2rem]">
                <div className="footer__content-options flex flex-col items-center gap-[1.0rem]">
                    <nav className="footer-options flex gap-[2rem] justify-center">
                        <a href="https://github.com/Duduubas" target="_blank">
                            <Image className={`w-[32px] h-[32px] cursor-pointer ${styles.iconImage}`} src={GithubIcon} alt="GitHub Icon"/>
                        </a>
                        <a href="https://linkedin.com/in/eduardobritoo" target="_blank">
                            <Image className={`w-[32px] h-[32px] cursor-pointer ${styles.iconImage}`} src={LinkedinIcon} alt="LinkedIn Icon"/>
                        </a>
                        <a href="https://discord.com/users/522531030834610211" target="_blank">
                            <Image className={`w-[32px] h-[32px] cursor-pointer ${styles.iconImage}`} src={DiscordIcon} alt="Discord Icon"/>
                        </a>
                        <a href="https://www.instagram.com/eduardobrito.dev" target="_blank">
                            <Image className={`w-[32px] h-[32px] cursor-pointer ${styles.iconImage}`} src={InstagramIcon} alt="Discord Icon"/>
                        </a>
                    </nav>
                    <div className="legal-text text-gray flex flex-col items-start justify-center">
                        <h3>&copy; Todos os direitos reservados</h3>
                        <a href="https://eduardobrito.dev" className="cursor-pointer indent-3">Desenvolvido por <span className="text-blue">Eduardo B.</span></a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}