import React from 'react';
import {FieldValues, Path, UseFormClearErrors, UseFormRegister, ValidationRule} from 'react-hook-form';
import classes from '../../pages/Main/Help/Help.module.scss';

export interface InputInterface<T extends FieldValues> {
  type: string;
  placeholderText?: string;
  name: Path<T>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  errors?: object;
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
  maxLength,
  required,
  pattern,
  errors,
  register,
}: InputInterface<T>): React.ReactElement {
  return (
    <div className={classes.inputWrapper}>
      <input
        className={classes.formItem}
        type={type}
        placeholder={placeholder || ''}
        style={
          errors?.[name]?.message && { background: 'rgba(255, 216, 216, 1)' }
        }
        {...register(name, {
          required,
          minLength,
          pattern,
        })}
      />
      {errors?.[name]?.message && (
        <span className={classes.errorValidationMessage}>
          {errors?.[name]?.message}
        </span>
      )}
    </div>
  );
}

// Input.defaultProps = {
//   placeholder: '',
//   errors: undefined,
//   disabled: false,
//   maxLength: 100,
//   minLength: 0,
//   required: false,
//   pattern: undefined,
// };

export default Input;
