import React from 'react';
import { useForm } from 'react-hook-form';
import classes from '../Help.module.scss';
import { FormInterface } from '../../../../utils/Interfaces';
import Input from '../../../../components/Input/Input';
import Textarea from '../../../../components/Textarea/Textarea';

function HelpForm(): React.ReactElement {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
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
        <Input
          name="userName"
          register={register}
          placeholder="Name*"
          type="text"
          clearErrors={clearErrors}
          errors={errors}
          pattern={{
            value: /[A-Za-z]/,
            message: 'Digite seu nome',
          }}
          minLength={{
            value: 2,
            message: 'Mínimo 2 caracteres',
          }}
          required="Digite seu nome"
        />
        <Input
          name="userEmail"
          register={register}
          placeholder="Email*"
          clearErrors={clearErrors}
          type="text"
          errors={errors}
          pattern={{
            value:
              /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
            message: 'E-mail inválido',
          }}
          required="Digite seu nome"
        />
        <Input
          name="userItem"
          register={register}
          placeholder="Assunto*"
          clearErrors={clearErrors}
          type="text"
          errors={errors}
          maxLength="40"
          pattern={{
            value: /[A-Za-z]/,
            message: 'Idioma errado',
          }}
          minLength={{
            value: 3,
            message: 'Mínimo 3 caracteres',
          }}
          required="Digite o nome do assunto"
        />
        <Textarea
          register={register}
          type="text"
          errors={errors}
          name="userMessage"
          placeholder="Mensagem*"
          required="Escreva sua mensagem"
          minLength={{
            value: 20,
            message: 'Mínimo 20 caracteres',
          }}
        />
        {errors?.message && (
          <span className={classes.errorValidationMessage}>
            {errors?.message}
          </span>
        )}
      </form>
      <button className={classes.formButton} type="button" onClick={onSubmit}>
        Enviar
      </button>
    </div>
  );
}

export default HelpForm;
