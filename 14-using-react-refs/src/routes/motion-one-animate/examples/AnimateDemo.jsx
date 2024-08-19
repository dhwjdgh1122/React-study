// --------------------------------------------------------------------------
// ✅ animate() 함수 사용법
// --------------------------------------------------------------------------
// - [x] animate(선택자_또는_DOM_요소_집합, 속성, 옵션?)
// - [x] 롤리팝을 x축 방향으로 400px만큼 이동해보세요.
// - [x] 롤리팝을 360도(시계 방향) 회전해 굴러가도록 설정해보세요.
// - [x] 롤리팝 애니메이션 진행 속도를 4초로 설정해보세요.
// - [ ] 진행률이 화면에 표시되도록 애니메이션 해봅니다.
// --------------------------------------------------------------------------

import { useRef } from 'react';
import S from './AnimateDemo.module.css';

// 리액트 엘리먼트가 아닌, 실제 DOM 엘리먼트에 애니메이션 적용
// useRef(), ref callback, event handlers
import { animate } from 'motion';

function AnimateDemo() {
  const lollipopRef = useRef(null); // { current: HTMLFigureElement }

  const handleMoveAnimation = () => {
    // const lollipopElement = lollipopRef.current;
    const { current: element } = lollipopRef;

    // animate(selector or HTMLElement or NodeList, props, options?)
    // animate(
    //   element,
    //   { transform: 'translateX(400px) rotate(-360deg)' },
    //   { duration: 4 }
    // );
    animate(element, { y: -100, x: 400, rotate: 360 * 7 }, { duration: 4 });
  };

  const progressRef = useRef(null); // React Component { current: null } → DOM Mount → { current: HTMLOutputElement }

  const handleProgressAnimation = () => {
    const { current: elelment } = progressRef;

    const progressAnimation = (progress) => {
      // 진행률 애니메이션 로직 작성
      const animationValue = Math.round(progress * 100) + '%';
      elelment.value = animationValue;
    };

    const animationOptions = {
      duration: 2,
      easing: 'ease-in-out',
    };

    animate(progressAnimation, animationOptions);
  };

  return (
    <div className={S.component}>
      <button className={S.button} type="button" onClick={handleMoveAnimation}>
        무빙 애니메이션
      </button>

      <figure ref={lollipopRef} className={S.lollipop} />

      <div className={S.wrapper}>
        <button
          type="button"
          className={S.button}
          onClick={handleProgressAnimation}
        >
          진행률 애니메이션
        </button>
        <output ref={progressRef} className={S.output}>
          0%
        </output>
      </div>
    </div>
  );
}

export default AnimateDemo;
