import { useId, useState, useEffect } from 'react';
import S from './Counter.module.css';
import { getStorageData, setStorageData } from '@/utils';

const DOCUMENT_INITIAL_TITLE = '문서 제목 동기화';

// 스토리지 저장할 키
// - @counter/count
const COUNTER_COUNT = '@counter/count';
// - @counter/step
const COUNTER_STEP = '@counter/step';

// - [x] [이펙트] 문서 제목 - 웹 스토리지 동기화
// - [x] [이벤트] 사용자 액션 → 스토리지에 데이터 동기화
// - [x] [스토리지 타입] 로컬 또는 세션 스토리지 선택

function Counter() {
  const id = useId();

  const [count, setCount] = useState(() =>
    getStorageData(COUNTER_COUNT, 0, 'session')
  );
  useEffect(() => {
    // 브라우저 윈도우 동기화
    document.title = `(${count}) ` + DOCUMENT_INITIAL_TITLE;
    //   // 브라우저 웹 스토리지 동기화
    //   setStorageData(COUNTER_COUNT, count);
  }, [count]);

  const [step, setStep] = useState(() =>
    getStorageData(COUNTER_STEP, 1, 'session')
  );
  // useEffect(() => {
  //   // 브라우저 웹 스토리지 동기화
  //   setStorageData(COUNTER_STEP, step);
  // }, [step]);

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

  // 이벤트를 사용해 사용자 액션이 감지되면
  // 웹 스토리지에 데이터 저장
  const handleSaveToStorage = () => {
    setStorageData(COUNTER_COUNT, count, 'session');
    setStorageData(COUNTER_STEP, step, 'session');
  };

  const isDisabled = count <= 1;

  return (
    <>
      <div className={S.component}>
        <div style={{ marginBlockEnd: 20 }}>
          <button type="button" onClick={handleSaveToStorage}>
            이벤트로 웹 스토리지 동기화
          </button>
        </div>

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
