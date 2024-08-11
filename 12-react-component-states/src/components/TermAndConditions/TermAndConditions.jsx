// --------------------------------------------------------------------------
// ✅ TermAndConditions 함수형 컴포넌트 (Functional Component)
// --------------------------------------------------------------------------
// - [ ] 사용자가 이용 약관에 동의하면 확인 버튼 활성화
// - [ ] 사용자가 이용 약관에 동의하지 않으면 확인 버튼 비활성화
// --------------------------------------------------------------------------
import './TermAndConditions.css';
import { useState } from 'react';

// [2018] React Hooks (functions) API 공개
//        - const [state, setState] = React.useState(initialState);
// [2019] 패러다임 시프트 : Class 기반 프로그래밍 (객체 지향) → Functional 기반 프로그래밍 (함수형)
function TermAndConditions() {
  // 일반 변수를 사용해 데이터 기억
  // let checked = false;

  // 리액트의 훅 API를 사용해 (함수형) 컴포넌트의 상태 선언
  const [checked, setChecked] = useState(false);
  // console.log(checked, typeof setChecked);

  // 데이터를 변경하는 함수
  // 상태 업데이트 함수가 실행되는 코드를 포함하는 함수
  const handleCheck = (e) => {
    const nextCheckedValue = e.target.checked;

    // 지역 변수 값만 교체
    // - 리액트는 이 변수의 값 변경에 관심이 없습니다.
    // checked = Boolean(e.target.checked);
    // console.log({ 지역변수: checked });

    // 선언된 리액트의 컴포넌트 상태 업데이트 트리거(렌더 요청)
    // - 리액트는 선언된 상태 업데이트 함수 실행에 관심이 많습니다.
    setChecked(nextCheckedValue);
  };

  // 파생된 상태(데이터)
  // - 리액트가 렌더 트리거를 받아 렌더하면 다시 계산됩니다.
  const isDisabled = checked ? false : true;

  // 이 코드가 출력되면 컴포넌트가 렌더링 되었음을 의미합니다.
  console.log('RENDER COMPONENT');

  return (
    <form className="TermAndConditions">
      <h2>이용 약관</h2>
      <p>
        OOO 서비스를 이용함으로써 귀하는 본 약관에 동의하게 되므로 본 약관을
        숙지하는 것이 중요합니다. 본 약관 외에도 OOO은 개인정보처리방침을
        게시합니다.
      </p>
      <div>
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />{' '}
        <label htmlFor="terms">이용 약관에 동의합니다.</label>
      </div>
      <button type="submit" disabled={isDisabled}>
        확인
      </button>
    </form>
  );
}

export default TermAndConditions;
