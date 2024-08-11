import { bool } from 'prop-types';
import { CardLinkItemType } from '../types/CardLinkList';
import S from './CardLinkItem.module.css';

CardLinkItem.propTypes = {
  item: CardLinkItemType.isRequired,
  popup: bool,
  external: bool,
};

function CardLinkItem({ item, popup = false, external = false }) {
  const { href, label, images = {} } = item;

  const cardClassNames = `${S.card} ${popup ? S.popup : ''}`.trim();

  let externalLinkProps = null;

  if (external) {
    externalLinkProps = {
      target: '_blank',
      rel: 'noreferrer noopener',
    };
  }

  return (
    <a
      className={S.component}
      aria-label={label}
      title={label}
      href={href}
      {...externalLinkProps}
    >
      <figure className={cardClassNames}>
        <div className={S.wrapper}>
          <img className={S.coverImage} src={images.cover} alt="" />
        </div>
        <img className={S.title} src={images.title} alt="" />
        <img className={S.character} src={images.character} alt="" />
      </figure>
    </a>
  );
}

export default CardLinkItem;
