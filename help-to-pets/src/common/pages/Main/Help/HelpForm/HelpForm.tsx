import React from 'react';
import { useForm } from 'react-hook-form';
import classes from '../Help.module.scss';
import { FormInterface } from '../../../../utils/Interfaces';

function HelpForm(): React.ReactElement {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValidating, isDirty },
  } = useForm<FormInterface>({
    mode: 'onChange',
  });
  const onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void> =
    handleSubmit((data): void => {
      reset();
    });
  return (
    <div className={classes.formGroup}>
      <h6 className={classes.notice}>
        Preenchimento obrigatório<span>*</span>
      </h6>
      <form className={classes.formItems} onSubmit={onSubmit}>
        <div className={classes.inputWrapper}>
          <input
            {...register('userName', {
              required: 'Digite seu nome',
              minLength: {
                value: 2,
                message: 'Mínimo 2 caracteres',
              },
            })}
            className={classes.formItem}
            maxLength="20"
            type="text"
            placeholder="Name*"
            style={errors?.userName && { background: 'rgba(255, 216, 216, 1)' }}
          />
          {errors?.userName?.message && (
            <span className={classes.errorValidationMessage}>
              {errors.userName.message}
            </span>
          )}
        </div>
        <div className={classes.inputWrapper}>
          <input
            {...register('userEmail', {
              required: 'Digite seu e-mail',
              pattern: {
                value:
                  /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
                message: 'E-mail inválido',
              },
            })}
            className={classes.formItem}
            maxLength="50"
            type="text"
            placeholder="Email*"
            style={
              errors?.userEmail && { background: 'rgba(255, 216, 216, 1)' }
            }
          />
          {errors?.userEmail?.message && (
            <span className={classes.errorValidationMessage}>
              {errors.userEmail.message}
            </span>
          )}
        </div>
        <div className={classes.inputWrapper}>
          <input
            {...register('userItem', {
              required: 'Digite o nome do assunto',
              minLength: {
                value: 3,
                message: 'Mínimo 3 caracteres',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Idioma errado',
              },
            })}
            className={classes.formItem}
            maxLength="40"
            type="text"
            placeholder="Assunto*"
            style={errors?.userItem && { background: 'rgba(255, 216, 216, 1)' }}
          />
          {errors?.userItem?.message && (
            <span className={classes.errorValidationMessage}>
              {errors.userItem.message}
            </span>
          )}
        </div>
        <div className={classes.inputWrapper}>
          <textarea
            {...register('userMessage', {
              required: 'Escreva sua mensagem',
              minLength: {
                value: 20,
                message: 'Mínimo 20 caracteres',
              },
            })}
            className={classes.formItem}
            rows="5"
            placeholder="Mensagem*"
            style={
              (errors?.userMessage && {
                background: 'rgba(255, 216, 216, 1)',
              }) ||
              (!errors?.userMessage &&
                isDirty && {
                  background: 'green',
                })
            }
          />
          {errors?.userMessage?.message && (
            <span className={classes.errorValidationMessage}>
              {errors.userMessage.message}
            </span>
          )}
        </div>
      </form>
      <button className={classes.formButton} type="button" onClick={onSubmit}>
        Enviar
      </button>
    </div>
  );
}

export default HelpForm;
