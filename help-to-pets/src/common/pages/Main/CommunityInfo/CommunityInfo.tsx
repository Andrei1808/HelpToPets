import React from 'react';
import classes from './CommunityInfo.module.scss';
import star from '../../../assets/Images/small-star.png';

function CommunityInfo(): React.ReactElement {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.info}>
          <div className={classes.titleInfo}>
            O que nos torna <br/> diferentes dos outros
          </div>
          <div className={classes.descriptionInfo}>
            Aqui o importante é a proteção e fecilidade dos animais. Na SavPets
            é possível realizar de forma rápida e fácil a criação de novos
            alertas de animais perdidos, além de ser possível encontrar
            organizações que podem ajudar as pessoas no que precisarem.
          </div>
          <button className={classes.buttonInfo} type="button">
            Saiba Mais
          </button>
        </div>
        <div className={classes.benefits}>
          <div className={classes.containerBenefits}>
            <img src={star} alt="star-main" className={classes.imgBenefits} />
            <div className={classes.titleBenefits}>Suporte Ativo</div>
            <div className={classes.descriptionBenefits}>
              Contate-nos pelo email savpets@gmail.com.
            </div>
          </div>
          <div className={classes.containerBenefits}>
            <img src={star} alt="star-main" className={classes.imgBenefits} />
            <div className={classes.titleBenefits}>Funções grátis</div>
            <div className={classes.descriptionBenefits}>
              Utilize toda a plataforma de maneira gratuita.
            </div>
          </div>
          <div className={classes.containerBenefits}>
            <img src={star} alt="star-main" className={classes.imgBenefits} />
            <div className={classes.titleBenefits}>Controle rápido</div>
            <div className={classes.descriptionBenefits}>
              Gerencie seus alertas de forma prática.
            </div>
          </div>
          <div className={classes.containerBenefits}>
            <img src={star} alt="star-main" className={classes.imgBenefits} />
            <div className={classes.titleBenefits}>Interface simples</div>
            <div className={classes.descriptionBenefits}>
              Padrão de navegação entre as páginas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityInfo;
