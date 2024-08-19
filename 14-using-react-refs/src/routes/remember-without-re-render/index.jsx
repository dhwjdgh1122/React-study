// --------------------------------------------------------------------------
// ✅ 리액트 탈출구(Escape Hatches) - useRef 훅
// --------------------------------------------------------------------------
// - [x] 함수 지역 변수 또는 함수 vs. 클래스 인스턴스 멤버(변수, 함수)
// - [x] 리-렌더 없이 컴포넌트 내부의 데이터를 기억하는 방법 (useRef 훅)
// - [x] useState() 훅으로 리-렌더 없이 기억하기 (useState 훅으로 useRef 흉내내기)
// --------------------------------------------------------------------------

import { useId, useRef, useState } from 'react';
import S from './style.module.css';

function RememberWithoutReRender() {
  const refInputId = useId();
  const stateInputId = useId();

  // 매뉴얼 방식의 리-렌더 함수
  // 실제 선언된 상태가 아닙니다.
  // 사용자가 직접 리-렌더 요청 목적
  const reRender = useState(0)[1];

  // 함수 내 지역 변수 (함수 실행 이후에 기억되지 않는다.)
  // let message = '';
  //
  // 함수 내 데이터 기억하는 방법
  // 1. useState() 훅 함수 사용 (메모이제이션, 외부에 데이터 기억 저장/읽기)
  //    필연적으로 리액트로 하여금 다시 컴포넌트를 리-렌더하도록 요청
  const [message, setMessage] = useState(''); // return [state, setState] [Immutable]

  const handleStateChange = ({ target: { value } }) => {
    setMessage(value);
  };
  //
  // 2. useRef() 훅 함수 사용 (메모이제이션, 외부에 데이터 기억 저장/읽기)
  //    현재(current) 기억된 값이 변경되더라도 기억은 하지만, 리-렌더하도록 요청하지 않음
  const messageRef = useRef('멋사! 광화문으로 가자!'); // return Plain Object { current: value } [Mutable]
  // const [messageRef] = useState({ current: '멋사! 광화문으로 가자!' }); // state { current: mutableValue }

  // 이벤트 핸들러 (사용자 입력에 의해 실행되는 함수)
  const handleRefChange = ({ target: { value } }) => {
    // JavaScript 지역 변수 변경 방식
    // message = value; // event.target.value
    //
    // React 선언된 상태 변경 방식
    // setMessage(value);
    //
    // ref 객체의 현재(current) 값 변경 방식
    // messageRef = { current: value }
    // 현재 값 읽기: messageRef.current
    // 현재 값 쓰기: messageRef.current = newValue
    // ref 객체의 현재 값이 변경되어도 리액트는 아무런 일을 하지 않는다.
    messageRef.current = value;
    console.log('ref 참조 객체의 현재 값을 변경 중입니다.');
  };

  const handleClick = () => {
    console.log({ messageRef });
  };

  const handleReRender = () => {
    // 참조 객체 : 리액트의 것이 아닌 것을 기억해야 할 때!
    document.getElementById(refInputId).value = ''; // mutable

    // 상태 : 리액트의 것을 기억하고 리액트에게 컴포넌트(함수)를 다시 실행시키도록 요청할 때!
    // document.getElementById(stateInputId).value = ''; // immutable
    setMessage('');
    reRender((r) => --r); // 0, -1, -2, ...
  };

  // 컴포넌트(함수)가 실행될 때마다
  // 초기 렌더, 리-렌더 될 때마다 이 값 출력
  console.log({ messageRef, message });

  return (
    <main className={S.component}>
      <h1 className={S.headline}>다시 렌더링 하지 않고 기억</h1>

      <div className={S.description}>
        <p>다시 렌더링 되더라도 사용자 메시지를 기억해야 합니다.</p>
        <p>하지만 사용자가 입력할 때마다 다시 렌더링되지 않아야 합니다.</p>
        <p>어떻게 해야 리-렌더 요청 없이 메시지를 기억할 수 있을까요?</p>
      </div>

      <div className={S.control}>
        <label htmlFor={refInputId} className="sr-only">
          메시지 Ref
        </label>
        <input
          id={refInputId}
          type="text"
          defaultValue={messageRef.current}
          onChange={handleRefChange}
        />
      </div>

      <div className={S.control}>
        <label htmlFor={stateInputId} className="sr-only">
          메시지 State
        </label>
        <input
          id={stateInputId}
          type="text"
          value={message}
          onChange={handleStateChange}
        />
      </div>

      <div className={S.group}>
        <button type="button" onClick={handleClick}>
          메시지 확인
        </button>
        <button type="button" onClick={handleReRender}>
          다시 렌더링
        </button>
      </div>

      <div style={{ marginBlockStart: 40 }}>
        <h3>Ref 메시지 값</h3>
        <p>{messageRef.current}</p>
        <h3>State 메시지 값</h3>
        <p>{message}</p>
      </div>
    </main>
  );
}

export default RememberWithoutReRender;
