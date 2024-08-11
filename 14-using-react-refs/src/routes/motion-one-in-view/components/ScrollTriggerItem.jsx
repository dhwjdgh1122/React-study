import { exact, number, string } from 'prop-types';
import S from './ScrollTriggerItem.module.css';

ScrollTriggerItem.propTypes = {
  item: exact({
    id: number.isRequired,
    image: string.isRequired,
    text: string.isRequired,
  }).isRequired,
};

function ScrollTriggerItem({ item }) {
  return (
    <article
      className={S.component}
      style={{ background: `url(${item.image}) no-repeat center / cover` }}
    >
      <p className={S.text}>{item.text}</p>
    </article>
  );
}

export default ScrollTriggerItem;
