import ScrollTriggerAnimation from './components/ScrollTriggerAnimation';
import S from './style.module.css';

function MotionOneInView() {
  return (
    <main className={S.component}>
      <h1 className={S.headline} lang="en">
        inView()
      </h1>
      <div className={S.description}>
        <p>
          Motion One 라이브러리를 사용해 스크롤 트리거 애니메이션을 구현하세요.
        </p>
        <p>
          자세한 사용법은{' '}
          <a
            href="https://motion.dev/docs/inview"
            rel="noreferrer noopener"
            target="_blank"
          >
            inView()
          </a>
          문서를 참고합니다.
        </p>
      </div>
      <ScrollTriggerAnimation />
    </main>
  );
}

export default MotionOneInView;
