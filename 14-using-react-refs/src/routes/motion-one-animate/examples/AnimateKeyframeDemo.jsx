// --------------------------------------------------------------------------
// ✅ animate() 함수 키프레임 사용법
// --------------------------------------------------------------------------
// - [ ] 사커볼이 화면 벽면에 부딫힌 후, 다시 돌아오도록 애니메이션 설정합니다.
// - [ ] 사커볼 움직임이 좀 더 자연스러워지도록 이징(easing)도 키프레임을 적용하세요.
// - [ ] 옵션(duration, delay, easing, direction, repeat, autoPlay)을 설정해보세요.
// --------------------------------------------------------------------------

import { useRef } from 'react';
import { animate } from 'motion';
import SoccorBall from '../components/SoccorBall';
import S from './AnimateDemo.module.css';

function AnimateKeyframeDemo() {
  // 컴포넌트 내부, 실제 DOM 엘리먼트 참조
  const containerRef = useRef(null); // { current: null }
  // 아직은 리액트 월드
  // 컴포넌트 엘리먼트가 아직, 실제 DOM 엘리먼트가 되기 이전 시점
  // console.log(1, containerRef);

  /* -------------------------------------------------------------------------- */

  // 하위 컴포넌트 내부, 실제 DOM 엘리먼트 참조
  const soccorBallRef = useRef(null); // { current: null }
  console.log(1, soccorBallRef);

  const handleMoveAnimate = () => {
    // 여기는 실제 DOM 월드
    // 컴포넌트 엘리먼트가 실제 DOM 엘리먼트가 된 이후 시점
    // console.log(2, containerRef); // { current: HTMLDivElement }
    //
    // --------------------------------------------------------------------------
    //
    // console.log(2, soccorBallRef); // { current: SVGElement }
    const { current: element } = soccorBallRef;

    animate(
      element,
      { x: [0, 400, 0], rotate: [0, 360, -360] },
      {
        duration: 1,
        easing: 'ease-out',
        repeat: 2,
        endDelay: 0.5,
        // x: {
        //   easing: spring({
        //     velocity: 8000,
        //     stiffness: 100,
        //     damping: 10,
        //   }),
        // },
      }
    );
  };

  return (
    <div className={S.component} ref={containerRef}>
      <button className={S.button} type="button" onClick={handleMoveAnimate}>
        키프레임 애니메이션
      </button>

      <SoccorBall ref={soccorBallRef} size={60} />
    </div>
  );
}

export default AnimateKeyframeDemo;
