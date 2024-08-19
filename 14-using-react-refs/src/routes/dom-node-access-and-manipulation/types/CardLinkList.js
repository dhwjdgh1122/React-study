import { arrayOf, exact, number, string } from 'prop-types';

const CardLinkImagesType = exact({
  cover: string.isRequired,
  title: string.isRequired,
  character: string.isRequired,
});

export const CardLinkItemType = exact({
  id: number.isRequired,
  href: string.isRequired,
  label: string.isRequired,
  images: CardLinkImagesType.isRequired,
});

export const CardLinkListType = arrayOf(CardLinkItemType);
