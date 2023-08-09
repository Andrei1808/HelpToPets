import React, { useEffect, useState } from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/Logo/logo.png';

function Header(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled: boolean = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
      <div className={classes.header__wrapper}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.header__menu}>
          <div className={classes.menu__item}>Início</div>
          <div className={classes.menu__item}>Centrais</div>
          <div className={classes.menu__item}>Perdidos</div>
          <div className={classes.menu__item}>Achados</div>
          <div className={classes.menu__item}>Adote</div>
        </div>
        <button type="button" className={classes.header__button}>
          Cadastre-se
        </button>
      </div>
    </header>
  );
}

export default Header;
