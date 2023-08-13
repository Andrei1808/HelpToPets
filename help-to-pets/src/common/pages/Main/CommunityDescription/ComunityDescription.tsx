import React from 'react';
import classes from './ComunityDescription.module.scss';
import imageMain from '../../../assets/Images/image-main.png';

function CommunityDescription(): React.ReactElement {
  return (
    <div className={classes.communityDescription}>
      <div className={classes.communityDescriptionWrapper}>
        <div className={classes.wrapperImg}>
          <img src={imageMain} alt="main" />
        </div>
        <div className={classes.wrapperDescription}>
          <h3 className={classes.title}>
            Junte-se a uma plataforma dedicada a auxiliar os animais{' '}
          </h3>
          <p className={classes.info}>
            A SavPets é uma comunidade pronta a ajudar os animais que precisam
            de algum cuidado ou atenção. Nela você poderá encontrar diversas
            opções de animais que podem estar disponíveis para adoção, além de
            ajudar na procura dos que estão perdidos, para que juntos possamos
            garantir que o pet esteja em ótimas mãos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommunityDescription;
