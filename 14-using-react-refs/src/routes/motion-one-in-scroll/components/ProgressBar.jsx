// --------------------------------------------------------------------------
// ✅ 스크롤 애니메이션
// --------------------------------------------------------------------------
// - [x] 대상 요소의 스크롤 위치에 따라 프로그래스바 scaleX 값이 애니메이션 되도록 설정합니다.
// - [x] 대상 요소의 스크롤 위치에 따라 아웃풋 텍스트 콘텐츠 값이 %로 출력되도록 설정합니다.
// --------------------------------------------------------------------------

import { useRef } from 'react';
import { scroll } from 'motion';
import { oneOf, string } from 'prop-types';
import S from './Progress.module.css';

ProgressBar.propTypes = {
  containerSelector: string,
  axis: oneOf(['x', 'y']),
};

function ProgressBar({ containerSelector = null, axis = 'y' }) {
  const progressBarRef = useRef(null);
  const outputRef = useRef(null);

  // 사용자  액션 이벤트 X
  // 마운트 시점에 실행될 콜백 함수 : ref callback
  const setProgressBar = () => {
    const container = document.querySelector(containerSelector);
    const scrollOptions = { container, axis };

    // 스크롤 애니메이션
    scroll(({ y: { progress } }) => {
      const progressBar = progressBarRef.current;
      const output = outputRef.current;

      if (progressBar && output) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
        output.value = (progress * 100).toFixed(0) + '%';
      }
    }, scrollOptions);
  };

  return (
    <div ref={setProgressBar}>
      <div ref={progressBarRef} className={S.progress} />
      <output ref={outputRef} className={S.output}>
        0%
      </output>
    </div>
  );
}

export default ProgressBar;
