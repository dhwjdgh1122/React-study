import PracticeSVGPathAnimation from './components/PracticeSVGPathAnimation';
import SVGPathTimeline from './components/SVGPathTimeline';
import S from './style.module.css';

function MotionOneTimeline() {
  return (
    <main className={S.component}>
      <h1 className={S.headline} lang="en">
        timeline()
      </h1>
      <div className={S.description}>
        <p>Motion One 라이브러리를 사용해 SVG 패스 애니메이션을 구현하세요.</p>
        <p>
          자세한 사용법은{' '}
          <a
            href="https://motion.dev/docs/timeline"
            rel="noreferrer noopener"
            target="_blank"
          >
            timeline()
          </a>
          문서를 참고합니다.
        </p>
      </div>

      <SVGPathTimeline />

      <h2 className={S.headline2}>직접 그려 구현하는 SVG 애니메이션</h2>
      <div className={S.description}>
        <p>Figma에서 SVG 패스 애니메이션을 적용할 아이콘을 직접 그려보세요.</p>
        <p>직접 그린 아이콘에 타임라인 애니메이션을 적용해보세요.</p>
      </div>
      <PracticeSVGPathAnimation />
    </main>
  );
}

export default MotionOneTimeline;
