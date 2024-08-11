// ------------------------------------------------------------------------------
// ✅ Counter 컴포넌트
// ------------------------------------------------------------------------------
// - [x] `count` 속성(prop, 기본 값: 1)을 전달받아 화면에 표시
// - [x] `step` 속성(기본 값: 1)을 전달받아 버튼 레이블에 표시
// - [x] `min` 속성(기본 값: 1) 보다 `count` 값이 크거나 같아야 함
// - [x] `max` 속성(기본 값: 1000) 보다 `count` 값이 작거나 같아야 함
// - [x] 사용자가 감소 버튼을 클릭하면 `count` 감소 (step 만큼)
// - [x] 사용자가 증가 버튼을 클릭하면 `count` 증가 (step 만큼)
// - [x] 사용자가 감소 버튼을 클릭했을 때 `count` 값이 `min` 보다 작거나 같을 경우 감소 버튼 비활성화
// - [x] 사용자가 증가 버튼을 클릭했을 때 `count` 값이 `max` 보다 크거나 같을 경우 증가 버튼 비활성화
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// ✅ 리액트 상태 업데이트에 대한 이해
// ------------------------------------------------------------------------------
// - [ ] 상태는 스냅샷처럼 즉시 업데이트 되지 않음.
// - [ ] 상태를 업데이트하는 2가지 방법 (Queue 활용)

import { useState } from 'react';
import { number } from 'prop-types';
import './Counter.css';

Counter.propTypes = {
  count: number,
  step: number,
  min: number,
  max: number,
};

/**@type {({ count?: number, step?: number, min?: number, max?: number }) => JSX.Element} */
function Counter({ count: initialCount = 1, step = 1, min = 1, max = 1000 }) {
  const [count, setCount] = useState(() => {
    // 초기화 함수 활용
    // 참고: https://ko.react.dev/reference/react/useState#avoiding-recreating-the-initial-state
    if (initialCount < min || initialCount > max) {
      throw new Error(`count 값이 min 보다 작거나, max보다 큽니다.`);
    }

    return initialCount;
  });

  // only updator function
  // const [, setCount] = useState(initialCount);
  // console.log(count, setCount);

  // 함수 내부의 지역 변수
  // 리액트 월드에서는 상태로 사용할 수 없다!!
  // 함수는 실행 이후 지역 변수를 메모리 상에서 지우기 때문 (가비지 컬렉터)
  let number = 0;

  const handleDecrease = () => {
    // ----------------------------------------------------------------------
    console.groupCollapsed('지역 변수');
    console.log(`[-] number = ${number}`);
    number -= 1;
    // 함수 내부의 지역 변수는 즉시 값이 변경 됨!
    console.log(`[-] number = ${number}`); // 함수 내부의 지역 변수는 즉시 값이 변경 됨!
    console.groupEnd('지역 변수');
    // ----------------------------------------------------------------------

    // ----------------------------------------------------------------------
    console.groupCollapsed('컴포넌트 상태');
    console.log(`[-] count = ${count}`);
    const nextCount = count - step;
    setCount(nextCount);

    // 클래스 컴포넌트
    // this.setState(nextState, callback?)

    // 함수 컴포넌트
    // const [state, setState] = useState() (상태 관리)
    // setState(nextState)
    //     +
    // useEffect (이펙트 관리)

    // 컴포넌트의 상태는 리액트가 관리 (JavaScript가 아니라)
    // - 동일 입력, 동일 출력 조건이 충족되면 순수 함수이다.
    // - 상태는 불변 데이터(Immutable Data)로 관리된다.
    // 컴포넌트의 상태는 즉시 값이 변경되지 않음!
    console.log(`[-] count = ${count}`);
    console.groupEnd('컴포넌트 상태');
    // ----------------------------------------------------------------------
  };

  const handleIncrease = () => {
    // ----------------------------------------------------------------------
    console.groupCollapsed('지역 변수');
    console.log(`[+] number = ${number}`);
    number += 1;
    // 함수 내부의 지역 변수는 즉시 값이 변경 됨!
    console.log(`[+] number = ${number}`);
    console.groupEnd('지역 변수');
    // ----------------------------------------------------------------------

    // ----------------------------------------------------------------------
    // console.groupCollapsed('컴포넌트 상태');
    // console.log(`[+] count = ${count}`);
    // const nextCount = count + step;
    // setCount(nextCount);
    // 컴포넌트의 상태는 즉시 값이 변경되지 않음!
    // console.log(`[+] count = ${count}`);
    // console.groupEnd('컴포넌트 상태');
    // ----------------------------------------------------------------------

    console.group('컴포넌트 상태');
    console.log(`[+] count += ${step * 3}`);

    // -------------------------------------------
    // setState((prevState) => nextState) API
    // React State Queue [updateState1, updateState2, updateState3]
    // const nextState = updateState3(updateState2(updateState1()))
    // -------------------------------------------
    // setCount((prevCount) => prevCount + step); // `3` + 1 = 4
    // setCount((prevCount) => prevCount + step); // `4` + 1 = 5
    // setCount((prevCount) => prevCount + step); // `5` + 1 = 6

    Array(6)
      .fill(null)
      .forEach(() => {
        setCount((c) => c + step);
      });

    // -------------------------------------------
    // setState(nextState) API
    // -------------------------------------------
    // setCount(count + step); // `3` + 1 = 4
    // setCount(count + step); // `3` + 1 = 4
    // setCount(count + step); // `3` + 1 = 4

    // Array(3)
    //   .fill(null)
    //   .forEach(() => {
    //     setCount(count + step);
    //   });

    console.log(`[+] count = ${count}`);
    console.groupEnd('컴포넌트 상태');

    // ----------------------------------------------------------------------
  };

  // 파생된 상태 (Derived States)
  // (컴포넌트의 상태(states) 또는 속성(props)에 의해 (다시) 계산되는 값이 기억된 지역 변수)
  const isDisabledDecrease = count <= min;
  const isDisabledIncrease = count >= max;

  return (
    <div className="Counter">
      <button
        type="button"
        disabled={isDisabledDecrease}
        onClick={handleDecrease}
      >
        -{step}
      </button>
      <output>{count}</output>
      <button
        type="button"
        disabled={isDisabledIncrease}
        onClick={handleIncrease}
      >
        +{step}
      </button>
    </div>
  );
}

export default Counter;
