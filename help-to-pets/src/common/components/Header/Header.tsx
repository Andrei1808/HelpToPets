import React from "react";
import classes from './Header.module.scss';
import logo from "../../assets/Logo/logo.png"

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={classes.header__menu}>
                <div className={classes.menu__item}>Início</div>
                <div className={classes.menu__item}>Centrais</div>
                <div className={classes.menu__item}>Perdidos</div>
                <div className={classes.menu__item}>Achados</div>
                <div className={classes.menu__item}>Adote</div>
            </div>
            <button className={classes.header__button}>Cadastre-se</button>
        </div>
    );
};

export default Header;