// --------------------------------------------------------------------------
// ✅ 스태거 애니메이션
// --------------------------------------------------------------------------
// - [x] stagger() 함수를 사용해 스태거 애니메이션을 적용합니다.
// - [x] getMap 함수를 작성해 참조 객체의 current 값으로 Map 객체를 반환하도록 합니다.
// - [x] <SoccorBall /> 요소에 mountedRef 속성을 사용해 맵(map) 데이터로 수집합니다.
// - [x] 사용자가 버튼을 누르면 스태거 애니메이션이 적용되도록 구현합니다.
// --------------------------------------------------------------------------
import { animate, stagger } from 'motion';
import { useRef, useState } from 'react';
import SoccorBall from './components/SoccorBall';
import S from './style.module.css';

function MotionOneStagger() {
  const [balls] = useState(Array(6).fill(null));

  // const handleAnimateBallsUsingTestId = () => {
  //   // 사커볼 객체 참조
  //   const balls = Array.from(
  //     document.querySelectorAll('[data-testid="soccor-ball"]')
  //   );

  //   if (balls.length > 0) {
  //     // animate()
  //     animate(
  //       balls,
  //       { x: [0, 400, 0], rotate: [0, 360, -360 * 2] },
  //       { duration: 2, delay: stagger(0.3) }
  //     );
  //   }
  // };

  const soccorBallsRef = useRef(null); // { current: null }

  const getMap = () => {
    if (!soccorBallsRef.current) {
      soccorBallsRef.current = new Map();
    }

    return soccorBallsRef.current;
  };

  const handleAnimateBalls = () => {
    // Map 활용 예시 코드 (공식 문서에서 기술하는 방법)
    const map = getMap();
    const mapArray = Array.from(map.values());

    if (mapArray.length > 0) {
      animate(
        mapArray,
        { x: [0, 400, 0], rotate: [0, 360, -360] },
        {
          delay: stagger(0.3),
          duration: 2,
        }
      );
    }

    // Array 활용 예시 코드
    // const soccorBalls = Array.from(new Set(soccorBallsRef.current));

    // if (soccorBalls.length > 0) {
    //   animate(
    //     soccorBalls,
    //     { x: [0, 400, 0], rotate: [0, 360, -360] },
    //     {
    //       delay: stagger(0.3),
    //       duration: 2,
    //     }
    //   );
    // }
  };

  const mountedCallback = (index, el) => {
    // Map 활용
    const map = getMap();

    if (el) {
      map.set(index, el);
    } else {
      map.delete(index);
    }

    // Array 활용
    // 참조 객체의 current 값에 담긴 객체 (얼마든지 수정)
    // const soccorBalls = soccorBallsRef.current;
    // soccorBalls.push(soccorBallElement);
  };

  return (
    <main className={S.component}>
      <h1 className={S.headline} lang="en">
        stagger()
      </h1>
      <div className={S.description}>
        <p>
          Motion One 라이브러리를 사용해 실제 DOM 노드에 애니메이션을
          적용합니다.
        </p>
        <p>
          자세한 사용법은{' '}
          <a
            href="https://motion.dev/docs/stagger"
            rel="noreferrer noopener"
            target="_blank"
          >
            stagger()
          </a>
          문서를 참고합니다.
        </p>
      </div>

      <div className={S.description}>
        <p>
          사커볼이 화면 벽면에 부딫힌 후, 다시 돌아오도록 애니메이션을
          설정합니다.
        </p>
      </div>

      <button className={S.button} type="button" onClick={handleAnimateBalls}>
        스태거 애니메이션
      </button>

      <div className={S.balls}>
        {balls.map((color, index) => {
          return (
            <SoccorBall ref={mountedCallback.bind(null, index)} key={index} />
          );
        })}
      </div>
    </main>
  );
}

export default MotionOneStagger;
