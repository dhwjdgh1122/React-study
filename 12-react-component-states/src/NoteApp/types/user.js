import { exact, number, string, arrayOf } from 'prop-types';

export const UserType = exact({
  id: number.isRequired,
  name: string.isRequired,
  username: string.isRequired,
  email: string.isRequired,
  phone: string.isRequired,
  website: string.isRequired,
  province: string.isRequired,
  city: string.isRequired,
  district: string.isRequired,
  street: string.isRequired,
  zipcode: string.isRequired,
  createdAt: string.isRequired,
  updatedAt: string.isRequired,
});

export const UserListType = arrayOf(UserType);
