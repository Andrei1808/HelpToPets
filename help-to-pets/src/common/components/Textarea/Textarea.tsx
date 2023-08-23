import React from 'react';
import { FieldValues } from 'react-hook-form';
import classes from '../../pages/Main/Help/Help.module.scss';
import { InputInterface } from '../../utils/Interfaces';

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
}: InputInterface<T>): React.ReactElement {
  return (
    <div className={classes.inputWrapper}>
      <textarea
        {...register(name, {
          required,
          minLength,
          pattern,
        })}
        className={classes.formItem}
        rows="5"
        placeholder={placeholder || ''}
        style={
          errors?.[name]?.message && {
            background: 'rgba(255, 216, 216, 1)',
          }
        }
      />
      {errors?.[name]?.message && (
        <span className={classes.errorValidationMessage}>
          {errors?.[name].message}
        </span>
      )}
    </div>
  );
}

export default Textarea;
