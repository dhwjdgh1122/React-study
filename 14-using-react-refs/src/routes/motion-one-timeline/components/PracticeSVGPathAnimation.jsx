// --------------------------------------------------------------------------
// ✅ Figma → SVG 패스 애니메이션
// --------------------------------------------------------------------------
// - [x] Figma를 사용해 SVG 패스 애니메이션을 적용할 아이콘 또는 다이어그램을 그립니다.
// - [x] 드로잉 시, 고려할 점
//   - [x] Stroke 속성으로 그립니다.
// - [x] 애니메이션을 적용하기 위해 고려할 점
//   - [x] strokeDasharray
//   - [x] strokeDashoffset
//   - [x] visibility
//   - [x] pathLength
// --------------------------------------------------------------------------
import { timeline } from 'motion';
import { useRef } from 'react';
import CircleLine from './CircleLine';
import S from './PracticeSVGPathAnimation.module.css';

function PracticeSVGPathAnimation() {
  const svgRef = useRef(null);

  const handleSVGPathAnimation = async () => {
    const { current: el } = svgRef;

    const [circle1, circle2] = Array.from(el.querySelectorAll('circle'));
    const line = el.querySelector('line');

    const animationControls = timeline(
      [
        [circle1, { strokeDashoffset: [1, 0], visibility: 'visible' }],
        [line, { strokeDashoffset: [1, 0], visibility: 'visible' }],
        [circle2, { strokeDashoffset: [1, 0], visibility: 'visible' }],
      ],
      {
        duration: 1.45,
        easing: 'ease-in-out',
      }
    );

    await animationControls.finished;

    // 모든 타임라인 애니메이션이 종료된 이후에 정리(cleanup)가 필요해~!
    // circle1, line, circle2 요소에 visibility: hidden
    // Array.from(el.children).forEach((child) => {
    //   child.style.visibility = 'hidden';
    // });
  };

  return (
    <>
      <button
        type="button"
        className={S.button}
        onClick={handleSVGPathAnimation}
      >
        SVG 패스 애니메이션
      </button>

      <div className={S.component}>
        <CircleLine forwardRef={svgRef} />
      </div>
    </>
  );
}

export default PracticeSVGPathAnimation;
