// --------------------------------------------------------------------------
// ✅ SVG 패스 타임라인 애니메이션
// --------------------------------------------------------------------------
// - [ ] 스타일 모듈에서 stroke-dasharray, visibility 값 설정을 확인합니다.
// - [ ] 사용자가 버튼을 클릭하면, SVG 패스 애니메이션이 표시되도록 설정합니다.
//   - [ ] 타임라인 시퀀스(배열)를 설정합니다.
//   - [ ] circle → path 순으로 움직이도록 설정합니다.
//   - [ ] strokeDashoffset 속성에 키프레임을 사용하세요. (1 → 0)
// --------------------------------------------------------------------------

import { number } from 'prop-types';
import S from './SVGPathTimeline.module.css';

SVGPathTimeline.propTypes = {
  size: number,
};

function SVGPathTimeline({ size = 60 }) {
  const handleTimelineAnimate = () => {};

  return (
    <div className={S.component}>
      <button
        className={S.button}
        type="button"
        onClick={handleTimelineAnimate}
      >
        타임라인 애니메이션
      </button>

      <svg width={size} height={size} viewBox="0 0 200 200">
        <circle className={S.circle} cx="100" cy="100" r="80" pathLength="1" />
        <path
          className={S.path}
          d="M 54 107.5 L 88 138.5 L 144.5 67.5"
          pathLength="1"
        />
      </svg>
    </div>
  );
}

export default SVGPathTimeline;
