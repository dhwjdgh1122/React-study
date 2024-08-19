import AnimateDemo from './examples/AnimateDemo';
import AnimateKeyframeDemo from './examples/AnimateKeyframeDemo';
import S from './style.module.css';

function MotionOneAnimate() {
  return (
    <main className={S.component}>
      <h1 className={S.headline} lang="en">
        animate()
      </h1>
      <div className={S.description}>
        <p>
          <a
            href="https://motion.dev/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Motion One
          </a>{' '}
          라이브러리를 사용해 실제 DOM 노드에 애니메이션을 적용합니다.
        </p>
        <p>
          자세한 사용법은{' '}
          <a
            href="https://motion.dev/docs/animate"
            rel="noreferrer noopener"
            target="_blank"
          >
            animate()
          </a>
          문서를 참고합니다.
        </p>
      </div>

      <h2 className={S.headline2}>애니메이션</h2>
      <AnimateDemo />

      <h2 className={S.headline2}>키프레임</h2>
      <div className={S.description}>
        <p>
          사커볼이 화면 벽면에 부딫힌 후, 다시 돌아오도록 애니메이션을
          설정합니다.
        </p>
      </div>
      <AnimateKeyframeDemo />
    </main>
  );
}

export default MotionOneAnimate;
