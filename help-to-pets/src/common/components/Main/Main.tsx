import React from 'react';
import classes from './Main.module.scss';
import logoStartPage from '../../assets/Logo/logo-start-page.png';
import PetCard from './PetCard/PetCard';
import CommunityDescription from './CommunityDescription/ComunityDescription';
import footPrint from '../../assets/Images/footprint.png';
import { PetCardInterface, PetInterface } from '../../utils/Interfaces';
import CommunityInfo from './CommunityInfo/CommunityInfo';

function Main({ pets }: PetInterface): React.ReactElement {
  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
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
                A SavPets é mais que uma plataforma, ela é a esperança de unir
                um animal a quem irá oferecer todo o cuidado e carinho que ele
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
      <div className={classes.pets}>
        <div className={classes.footprints}>
          <img
            src={footPrint}
            alt="footprint-main"
            className={classes.topFootprint}
          />
          <img
            src={footPrint}
            alt="footprint-main"
            className={classes.bottomFootprint}
          />
        </div>
        <div className={classes.petsWrapper}>
          <h3 className={classes.title}>
            Escolha uma maneira de ajudar os animais que você gosta
          </h3>
          <div className={classes.petsCards}>
            {pets.map((pet: PetCardInterface) => (
              <PetCard pet={pet} key={pet.id} />
            ))}
          </div>
        </div>
      </div>
      <CommunityDescription />
      <CommunityInfo />
    </main>
  );
}

export default Main;
