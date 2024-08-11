import { arrayOf, number, oneOf, shape } from 'prop-types';
import { PLAYER_LIST } from '../constants';

export const OneOfPlayerType = oneOf(PLAYER_LIST);
export const OneOfPlayerListType = arrayOf(OneOfPlayerType);
export const WinnerInfoType = shape({
  winner: OneOfPlayerType,
  condition: arrayOf(number),
});
