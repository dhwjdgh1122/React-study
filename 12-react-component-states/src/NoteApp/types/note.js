import { shape, number, string, arrayOf, exact } from 'prop-types';
import { UserType } from './user';

export const NoteType = shape({
  id: number,
  title: string.isRequired,
  content: string.isRequired,
  userId: number.isRequired,
  createdAt: string,
  updatedAt: string,
  expand: exact({
    user: UserType,
  }).isRequired,
});

export const NoteListType = arrayOf(NoteType);
