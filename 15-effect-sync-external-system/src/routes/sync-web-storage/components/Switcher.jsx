// --------------------------------------------------------------------------
// ✅ ref callback → effect
// --------------------------------------------------------------------------
// - [ ] Ref 콜백 함수는 마운트 시점에 실행됩니다. 이를 이펙트로 변경해봅니다.
// --------------------------------------------------------------------------

import { animate, spring } from 'motion';
import { bool, func } from 'prop-types';
import S from './Switcher.module.css';

const springAnimation = spring({ stiffness: 500, damping: 40 });

Switcher.propTypes = {
  value: bool,
  onToggle: func,
};

function Switcher({ value = false, onToggle, ...restProps }) {
  const handleToggle = () => onToggle?.(!value);

  const classNames = `${S.component} ${value ? S.dark : ''}`.trim();

  const refCallback = (el) => {
    if (el) {
      if (value) {
        animate(el, { x: 50 }, { easing: springAnimation });
      } else {
        animate(el, { x: 0 }, { easing: springAnimation });
      }
    }
  };

  return (
    <div className={classNames}>
      <button
        role="switch"
        type="button"
        aria-checked={value}
        className={S.button}
        onClick={handleToggle}
        {...restProps}
      >
        <span className={S.ball} ref={refCallback} />
      </button>
    </div>
  );
}

export default Switcher;
