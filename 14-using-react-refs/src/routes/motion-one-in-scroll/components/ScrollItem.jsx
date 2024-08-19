import { exact, number, string } from 'prop-types';
import S from './ScrollItem.module.css';

ScrollTriggerItem.propTypes = {
  item: exact({
    id: number.isRequired,
    image: string.isRequired,
    text: string.isRequired,
  }).isRequired,
};

function ScrollTriggerItem({ item }) {
  return (
    <li
      className={S.component}
      style={{ background: `url(${item.image}) no-repeat center / cover` }}
    >
      <p className={S.text}>{item.text}</p>
    </li>
  );
}

export default ScrollTriggerItem;
