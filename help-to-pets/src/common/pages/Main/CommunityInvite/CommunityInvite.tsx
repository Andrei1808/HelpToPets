import React from 'react';
import classes from './CommunityInvite.module.scss';

function CommunityInvite(): React.ReactElement {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.info}>
          <h3 className={classes.title}>Pronto para começar na SavPets?</h3>
          <p className={classes.description}>
            Ajudando os animais que precisam de cuidados a ficarem protegidos,
            bem cuidados e felizes, oferecendo todo o suporte necessário para
            que isso possa se tornar cada vez mais realidade.
          </p>
        </div>
        <button className={classes.button} type="button">
          Começar
        </button>
      </div>
    </div>
  );
}

export default CommunityInvite;
