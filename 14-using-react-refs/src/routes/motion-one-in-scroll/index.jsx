import ScrollAnimation from './components/ScrollAnimation';
import S from './style.module.css';

function MotionOneScroll() {
  return (
    <main className={S.component}>
      <h1 className={S.headline} lang="en">
        scroll()
      </h1>
      <div className={S.description}>
        <p>
          Motion One 라이브러리를 사용해 스크롤 높이 위치에 따라 애니메이션을
          구현하세요.
        </p>
        <p>
          자세한 사용법은{' '}
          <a
            href="https://motion.dev/docs/scroll"
            rel="noreferrer noopener"
            target="_blank"
          >
            scroll()
          </a>
          문서를 참고합니다.
        </p>
      </div>
      <ScrollAnimation />
    </main>
  );
}

export default MotionOneScroll;
