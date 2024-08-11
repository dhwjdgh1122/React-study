// --------------------------------------------------------------------------
// ✅ 리액트 탈출구(Escape Hatches) - useRef 훅
// --------------------------------------------------------------------------
// - [ ] 함수 지역 변수 vs. 클래스 인스턴스 멤버(변수)
// - [ ] 리-렌더 없이 컴포넌트 내부의 데이터를 기억하는 방법
// - [ ] useState() 훅으로 리-렌더 없이 기억하기
// --------------------------------------------------------------------------

import { useId, useState } from 'react';
import S from './style.module.css';

function RememberWithoutReRender() {
  const id = useId();
  const reRender = useState(0)[1];

  let message = '';

  const handleChange = ({ target: { value } }) => {
    message = value;
  };

  const handleClick = () => {
    console.log({ message });
  };

  const handleReRender = () => {
    document.getElementById(id).value = '';
    reRender((r) => --r);
  };

  console.log({ message });

  return (
    <main className={S.component}>
      <h1 className={S.headline}>다시 렌더링 하지 않고 기억</h1>

      <div className={S.description}>
        <p>다시 렌더링 되더라도 사용자 메시지를 기억해야 합니다.</p>
        <p>하지만 사용자가 입력할 때마다 다시 렌더링되지 않아야 합니다.</p>
        <p>어떻게 해야 리-렌더 요청 없이 메시지를 기억할 수 있을까요?</p>
      </div>

      <div className={S.control}>
        <label htmlFor={id} className="sr-only">
          메시지
        </label>
        <input id={id} type="text" onChange={handleChange} />
      </div>

      <div className={S.group}>
        <button type="button" onClick={handleClick}>
          메시지 확인
        </button>
        <button type="button" onClick={handleReRender}>
          다시 렌더링
        </button>
      </div>
    </main>
  );
}

export default RememberWithoutReRender;
