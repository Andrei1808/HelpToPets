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
  name?: string;
  email?: string;
  message?: string;
  item?: string;
}
