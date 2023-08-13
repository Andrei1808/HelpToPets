import React from 'react';
import classes from './Pets.module.scss';
import footPrint from '../../../assets/Images/footprint.png';
import { PetCardInterface, PetInterface } from '../../../utils/Interfaces';
import PetCard from './PetCard/PetCard';

function Pets({ pets }: PetInterface): React.ReactElement {
  return (
    <div>
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
    </div>
  );
}

export default Pets;
