import { bool } from 'prop-types';
import { CardLinkListType } from '../types/CardLinkList';
import CardLinkItem from './CardLinkItem';
import S from './CardLinkList.module.css';

CardLinkList.propTypes = {
  list: CardLinkListType.isRequired,
  usingPopup: bool,
};

function CardLinkList({ list, usingPopup = false }) {
  return (
    <ul className={S.component}>
      {list.map((linkItem) => (
        <li key={linkItem.id} className={S.item}>
          <CardLinkItem item={linkItem} popup={usingPopup} external />
        </li>
      ))}
    </ul>
  );
}

export default CardLinkList;
