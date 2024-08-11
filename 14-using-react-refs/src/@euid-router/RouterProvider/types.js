import { arrayOf, element, exact, string } from 'prop-types';

export const RouteType = exact({
  path: string.isRequired,
  element: element.isRequired,
  title: string.isRequired,
});

export const RouteListType = arrayOf(RouteType);
