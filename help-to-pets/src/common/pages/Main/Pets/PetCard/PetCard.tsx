import React from 'react';
import classes from './PetCard.module.scss';
import { PetInterface } from '../../../../utils/Interfaces';

function PetCard({ pet }: PetInterface): React.ReactElement {
  const { title, description, img, name } = pet;
  return (
    <div className={classes.petsCard}>
      <div
        className={classes.cardInfo}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      >
        <div className={classes.cardInfoWrapper}>
          <div className={classes.cardName}>{name}</div>
          <div className={classes.cardTitle}>{title}</div>
          <div className={classes.cardDescription}>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
