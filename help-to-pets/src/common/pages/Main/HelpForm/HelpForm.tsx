import React from 'react';
import classes from './HelpForm.module.scss';
import instagramLogo from '../../../assets/SocialNetworkIcons/instagram.png';
import whatsappLogo from '../../../assets/SocialNetworkIcons/whatsapp.png';
import mailLogo from '../../../assets/SocialNetworkIcons/mail.png';

function HelpForm(): React.ReactElement {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.info}>
          <h2 className={classes.title}>Como podemos ajudá-lo? </h2>
          <p className={classes.more}>
            Sinta-se a vontade para nos contatar quando quiser.{' '}
          </p>
          <div className={classes.social}>
            <a href="https://instagram.com" className={classes.socialItem}>
              <img src={instagramLogo} alt="instagram-logo" />
              <p className={classes.socialInfo}>@savpets</p>
            </a>
            <a href="https://web.whatsapp.com" className={classes.socialItem}>
              <img src={whatsappLogo} alt="whatsapp-logo" />
              <p className={classes.socialInfo}>(11) 9 1234-5678</p>
            </a>
            <a href="mailto: savpets@gmail.com" className={classes.socialItem}>
              <img src={mailLogo} alt="mail-logo" />
              <p className={classes.socialInfo}>savpets@gmail.com</p>
            </a>
          </div>
        </div>
        {/*---------------------------------------------------------------------------------------------------*/}
        <div className={classes.formGroup}>
          <h6 className={classes.notice}>
            Preenchimento obrigatório<span>*</span>
          </h6>
          <form className={classes.formItems} htmlFor="username">
            <input
              className={classes.formItem}
              required
              maxLength="20"
              type="text"
              placeholder="Name*"
            />
            <input
              className={classes.formItem}
              maxLength="20"
              required
              type="text"
              placeholder="Email*"
            />
            <input
              className={classes.formItem}
              maxLength="20"
              required
              type="text"
              placeholder="Assunto*"
            />
            <textarea
              className={classes.formItem}
              required
              rows="5"
              maxLength="200"
              placeholder="Mensagem*"
            />
          </form>
          <button className={classes.formButton} type="submit">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpForm;
