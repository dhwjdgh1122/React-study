import { exact, number, string, arrayOf } from 'prop-types';

export const UserType = exact({
  id: number.isRequired,
  name: string.isRequired,
  username: string.isRequired,
  email: string.isRequired,
  phone: string.isRequired,
  website: string,
  province: string,
  city: string,
  district: string,
  street: string,
  zipcode: string,
  createdAt: string,
  updatedAt: string,
});

export const UsersListType = arrayOf(UserType);
