import React, { CSSProperties } from 'react';
import {
  FieldError,
  FieldValues,
  Path,
  UseFormClearErrors,
  UseFormRegister,
  ValidationRule,
} from 'react-hook-form';
import classes from '../../pages/Main/Help/Help.module.scss';

export interface InputInterface<T extends FieldValues> {
  type: string;
  placeholder?: string;
  name: Path<T>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  required?: string;
  pattern?: ValidationRule<RegExp>;
  errors?: FieldError;
  disabled?: boolean;
  register: UseFormRegister<T>;
  clearErrors: UseFormClearErrors<T>;
  max?: ValidationRule<string | number>;
  min?: ValidationRule<string | number>;
}

function Input<T extends FieldValues>({
  type,
  placeholder,
  name,
  minLength,
  required,
  pattern,
  errors,
  register,
  clearErrors,
}: InputInterface<T>): React.ReactElement {
  return (
    <div className={classes.inputWrapper}>
      <input
        className={classes.formItem}
        type={type}
        placeholder={placeholder || ''}
        //use here clsx style.
        style={
          errors?.message && {
            background: 'rgba(255, 216, 216, 1)',
          }
        }
        {...register(name, {
          required,
          minLength,
          pattern,
          onChange: () => errors && clearErrors(name),
        })}
      />
      {errors?.message && (
        <span className={classes.errorValidationMessage}>
          {errors?.message}
        </span>
      )}
    </div>
  );
}

Input.defaultProps = {
  placeholder: '',
  errors: undefined,
  disabled: undefined,
  maxLength: undefined,
  minLength: undefined,
  required: true,
  pattern: undefined,
};

export default Input;


