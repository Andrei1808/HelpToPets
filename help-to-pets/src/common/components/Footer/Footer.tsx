import React from 'react';
import classes from './Footer.module.scss'
import logoFooter from "../../assets/Logo/logo-footer.png"
import instagramLogo from "../../assets/SocialNetworkIcons/instagram.png"
import whatsappLogo from "../../assets/SocialNetworkIcons/whatsapp.png"
import linkedinLogo from "../../assets/SocialNetworkIcons/linkedin.png"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__wrapper}>
                <div className={classes.footer__container}>
                    <div className={[classes.footer__links, classes.footer__items].join("")}>
                        <h4 className={classes.title}>CONTEÚDO</h4>
                        <a href="" className={classes.links__item}>Home</a>
                        <a href="" className={classes.links__item}>Centrais</a>
                        <a href="" className={classes.links__item}>Achados</a>
                        <a href="" className={classes.links__item}>Perdidos</a>
                        <a href="" className={classes.links__item}>Adote</a>
                    </div>
                    <div className={[classes.footer__info, classes.footer__items].join("")}>
                        <h4 className={classes.title}>AJUDA</h4>
                        <a href="" className={classes.links__item}>Contato</a>
                        <a href="" className={classes.links__item}>Suporte</a>
                        <a href="" className={classes.links__item}>savpets@gmail.com</a>
                    </div>
                    <div className={[classes.footer__description, classes.footer__items].join("")}>
                        <h4 className={classes.title}>PLATAFORMA</h4>
                        <a href="" className={classes.links__item}>Sobre</a>
                        <a href="" className={classes.links__item}>Destaques</a>
                        <a href="" className={classes.links__item}>Termos e condições</a>
                    </div>
                    <div className={[classes.footer__social, classes.footer__items].join("")}>
                        <h4 className={classes.title}>REDES SOCIAIS</h4>
                        <div className={classes.social__items}>
                            <a href="https://instagram.com"> <img src={instagramLogo} alt="instagram-logo"/></a>
                            <a href="https://web.whatsapp.com"><img src={whatsappLogo} alt="whatsapp-logo"/></a>
                                <a href="https://linkedin.com"><img src={linkedinLogo} alt="linkedin-logo"/></a>
                        </div>
                        <p className={classes.social__description}>Comece agora a ajudar os pets</p>
                        <button className={classes.social__button}>Crie uma conta</button>
                    </div>
                </div>
                <div className={classes.footer__logo}>
                    <div className={classes.logo}>
                        <img src={logoFooter} alt="logo-footer"/>
                        <p>© 2022 SavPets</p>
                    </div>
                    <div className={classes.protect}>
                        <p>Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;