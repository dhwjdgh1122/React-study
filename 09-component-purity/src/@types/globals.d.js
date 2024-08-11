import { exact, oneOf, string, number } from 'prop-types';

export const UserType = exact({
  id: string.isRequired,
  name: string.isRequired,
  photo: string.isRequired,
  status: oneOf(['offline', 'online', 'dont-disturb', 'away']),
  size: number,
});
