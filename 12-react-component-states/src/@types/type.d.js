import { arrayOf, exact, shape, number, string } from 'prop-types';

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

export const NoteType = shape({
  id: number,
  title: string.isRequired,
  content: string.isRequired,
  userId: number.isRequired,
  createdAt: string,
  updatedAt: string,
  expand: {
    user: UserType,
  },
});

export const NoteListType = arrayOf(NoteType);
