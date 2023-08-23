import {
  FieldValues,
  Path,
  UseFormClearErrors,
  UseFormRegister,
  ValidationRule,
} from 'react-hook-form';

export interface PetCardInterface {
  id?: number;
  name: string;
  title: string;
  description: string;
  img: string;
}

export interface PetInterface {
  pets: PetCardInterface[];
  pet: PetCardInterface;
}

export interface FormInterface {
  name: Path<FieldValues>;
  userName: string;
  userEmail: string;
  userItem: string;
  userMessage: string;
  email?: string;
  message?: string;
  item?: string;
}
