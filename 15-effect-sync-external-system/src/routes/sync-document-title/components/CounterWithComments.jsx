// --------------------------------------------------------------------------
// ✅ 문서 제목 동기화
// --------------------------------------------------------------------------
// - [x] 이펙트를 작성(추가)하는 방법 (React.useEffect() 함수 활용)
// - [x] 카운터 앱의 count 상태가 변경되면 문서 제목을 동기화합니다.
// - [x] step 값이 변경될 때에는 불필요한 문서 제목 동기화가 되지 않도록 설정합니다.
// --------------------------------------------------------------------------

import { useId, useState, useEffect } from 'react';
import S from './Counter.module.css';

// 컴포넌트 JSX(엘리먼트)가 실제 DOM 엘리먼트로 마운트 되었나?
// let isMounted = false;

// 문서의 초기 제목 기억
const DOCUMENT_TITLE = document.title;

function Counter() {
  // [이펙트] React.useEffect() 훅 함수를 사용해 이펙트 추가
  // 첫번째 인수 = 이펙트 콜백 함수
  // - DOM 커밋 이후 시점에 실행
  // - 상태가 업데이트 될 때마다 실행
  // 두번째 인수 = 종속성(의존성) 배열
  // - 아예 설정되지 않은 경우(undefined), 렌더링 시마다 매번 실행된다.
  // - 배열이 비어있는 경우, 마운트 시점에서 1회 실행된다. (단, StrictMode에서는 2회 실행)
  useEffect(() => {
    // console.log('this is a effect callback');
    // 이 안에서 리액트 엘리먼트가 변환된 실제 DOM 트리의 요소에 접근이 가능할까?
    // const decreaseButton = document.querySelector('[aria-label="카운트 감소"]');
    // decreaseButton.setAttribute(
    //   'title',
    //   decreaseButton.getAttribute('aria-label')
    // );
    // console.log('카운트 감소 버튼에 title 속성을 추가했어요!');
    // const increaseButton = document.querySelector('[aria-label="카운트 증가"]');
    // increaseButton.setAttribute(
    //   'title',
    //   increaseButton.getAttribute('aria-label')
    // );
    // console.log('카운트 증가 버튼에 title 속성을 추가했어요!');
  }, []);

  // useEffect(
  //   /* 1 effect callback (!) */ () => {/* 만약 반응성 데이터를 사용했다면 */},
  //   /* 2 dependencies list (?) */ [/* 반응성 데이터, 반응성 데이터, ... */]
  // );

  const id = useId();

  // 지역 변수 (일반 데이터 = 반응하지 않는 데이터)
  // let myName = '야무';
  // console.log(myName);

  // useRef() = (메모리 된, 수정 가능한 일반 JavaScript 객체 = 반응하지 않는 데이터)
  // const [valueRef] = useState({ current: value })

  // useState() = 상태 (반응성 데이터 = 리액트가 반응하는 데이터)
  // useReducer() + 리듀서(reducer) 함수
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(`어머!!! 우리 ${step}이 변경했어요!`);
  }, [step]);

  // 리액트 시스템 (반응성 상태 변경)
  const [count, setCount] = useState(10);

  // 외부 시스템 (반응성 상태 변경에 따라 반응하지 않음, 그래서 이펙트 콜백 필요)
  useEffect(() => {
    // 반응성 상태가 변경되면
    // 외부 시스템인 브라우저의 문서 제목을 변경하려 한다.
    console.log(
      'count 반응성 상태 데이터가 변경되었기 때문에 이펙트가 호출됩니다.'
    );
    document.title = `(${count}) ` + DOCUMENT_TITLE;
  }, [count]);

  const handleDecrease = () => {
    let nextCount = count - step;
    if (nextCount <= 1) nextCount = 1;
    setCount(nextCount);
  };

  const handleIncrease = () => {
    setCount(count + step);
  };

  const handleChangeStep = (e) => {
    setStep(Number(e.target.value));
  };

  const isDisabled = count <= 1;

  // [순수한 로직]
  // 리액트 렌더링 프로세스와 관련된 것만 코드가 존재
  // 부수 효과 코드 작성
  // const decreaseButton = document.querySelector('[aria-label="카운트 감소"]');
  // console.log('리액트 함수 컴포넌트 바디: ', decreaseButton);

  return (
    <>
      <div className={S.component}>
        <button
          type="button"
          aria-label="카운트 감소"
          title="카운트 감소"
          disabled={isDisabled}
          onClick={handleDecrease}
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            width={12}
            height={12}
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <output>{count}</output>
        <button
          type="button"
          aria-label="카운트 증가"
          title="카운트 증가"
          onClick={handleIncrease}
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            width={12}
            height={12}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className={S.changeStep}>
        <label htmlFor={id}>step 변경</label>
        <input type="number" id={id} value={step} onChange={handleChangeStep} />
      </div>
    </>
  );
}

export default Counter;
