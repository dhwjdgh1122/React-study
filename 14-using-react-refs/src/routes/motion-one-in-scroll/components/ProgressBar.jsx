// --------------------------------------------------------------------------
// ✅ 스크롤 애니메이션
// --------------------------------------------------------------------------
// - [ ] 대상 요소의 스크롤 위치에 따라 프로그래스바 scaleX 값이 애니메이션 되도록 설정합니다.
// - [ ] 대상 요소의 스크롤 위치에 따라 아웃풋 텍스트 콘텐츠 값이 %로 출력되도록 설정합니다.
// --------------------------------------------------------------------------

import { oneOf, string } from 'prop-types';
import S from './Progress.module.css';

ProgressBar.propTypes = {
  containerSelector: string,
  axis: oneOf(['x', 'y']),
};

function ProgressBar({ containerSelector = null, axis = 'y' }) {
  console.log(containerSelector, axis);

  return (
    <>
      <div className={S.progress} />
      <output className={S.output}>0%</output>
    </>
  );
}

export default ProgressBar;
