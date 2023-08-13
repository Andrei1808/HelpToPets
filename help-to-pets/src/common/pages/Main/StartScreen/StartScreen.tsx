import React from 'react';
import logoStartPage from '../../../assets/Logo/logo-start-page.png';
import classes from './StartScreen.module.scss';

function StartScreen(): React.ReactElement {
  return (
    <div>
      <div className={classes.startScreen}>
        <div>
          <div className={classes.logo}>
            <img src={logoStartPage} alt="logo-start-page" />
          </div>
          <div className={classes.content}>
            <div className={classes.titleMain}>
              Ajude os animais
              <br />
              que precisam de você
            </div>
            <div className={classes.description}>
              A SavPets é mais que uma plataforma, ela é a esperança de unir um
              animal a quem irá oferecer todo o cuidado e carinho que ele
              merece.
            </div>
            <button type="button" className={classes.button}>
              Saiba Mais
            </button>
            <button type="button" className={classes.buttonTransparent}>
              Adote um animal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
