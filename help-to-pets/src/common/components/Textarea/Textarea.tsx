import React from 'react';
import { FieldError, FieldValues, Path, UseFormClearErrors, UseFormRegister, ValidationRule } from 'react-hook-form';
import classes from '../../pages/Main/Help/Help.module.scss';

export interface TextareaInterface<T extends FieldValues> {
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

function Textarea<T extends FieldValues>({
  errors,
  register,
  name,
  required,
  minLength,
  pattern,
  type,
  placeholder,
  min,
  max,
}: TextareaInterface<T>): React.ReactElement {
  return (
    <div className={classes.inputWrapper}>
      <textarea
        {...register(name, {
          required,
          minLength,
          pattern,
        })}
        className={classes.formItem}
        rows={5}
        placeholder={placeholder || ''}
        style={
          errors?.message && {
            background: 'rgba(255, 216, 216, 1)',
          }
        }
      />
      {errors?.message && (
        <span className={classes.errorValidationMessage}>
          {errors?.message}
        </span>
      )}
    </div>
  );
}

export default Textarea;
