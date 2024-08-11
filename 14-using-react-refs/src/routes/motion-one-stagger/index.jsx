// --------------------------------------------------------------------------
// ✅ 스태거 애니메이션
// --------------------------------------------------------------------------
// - [ ] stagger() 함수를 사용해 스태거 애니메이션을 적용합니다.
// - [ ] getMap 함수를 작성해 참조 객체의 current 값으로 Map 객체를 반환하도록 합니다.
// - [ ] <SoccorBall /> 요소에 mountedRef 속성을 사용해 맵(map) 데이터로 수집합니다.
// - [ ] 사용자가 버튼을 누르면 스태거 애니메이션이 적용되도록 구현합니다.
// --------------------------------------------------------------------------
import { useState } from 'react';
import SoccorBall from './components/SoccorBall';
import S from './style.module.css';

function MotionOneStagger() {
  const [balls] = useState(Array(4).fill(null));

  const handleAnimateBalls = () => {};

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
          return <SoccorBall moundedRef={null} key={index} />;
        })}
      </div>
    </main>
  );
}

export default MotionOneStagger;
