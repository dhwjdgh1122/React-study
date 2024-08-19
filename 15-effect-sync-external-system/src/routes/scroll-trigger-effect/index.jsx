import Peekaboo from './components/Peekaboo';

function ScrollTriggerEffect() {
  return (
    <main id="page">
      <h1 className="headline">스크롤 트리거(Scroll Trigger) 이펙트</h1>

      <div className="description">
        <p>실제 DOM 시스템에서의 스크롤 이펙트는 리액트 시스템이 아닙니다.</p>
        <p>
          리액트 시스템을 벗어나, 특정 스크롤 위치에서 액션이 실행되도록
          구현해봅니다.
        </p>
        <p>
          <a
            href="https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver"
            rel="noreferrer noopener"
            target="_blank"
          >
            IntersectionObserver
          </a>{' '}
          API를 활용하세요.
        </p>
      </div>

      <Peekaboo />
    </main>
  );
}

export default ScrollTriggerEffect;
