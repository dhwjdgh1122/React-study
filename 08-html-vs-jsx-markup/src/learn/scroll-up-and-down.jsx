function ScrollUpAndDown() {
  // 스크롤 다운/업 버튼에 이벤트를 연결해 App 컴포넌트가 부드럽게 스크롤 되도록 핸들러를 작성합니다.
  // 참고: https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView

  return (
    <div role="group" className="buttonGroup">
      <button
        type="button"
        className="scrollDown"
        onClick={/* event handler */() => { console.log('clicked scroll down button') }}
        aria-label="스크롤 다운"
        title="스크롤 다운"
      >
        <svg
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path
            d="m112 268 144 144 144-144M256 392V100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="48px"
          />
        </svg>
      </button>
      <button
        type="button"
        className="scrollUp"
        aria-label="스크롤 업"
        title="스크롤 업"
      >
        <svg
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path
            d="m112 268 144 144 144-144M256 392V100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="48px"
          />
        </svg>
      </button>
    </div>
  );
}

export default ScrollUpAndDown;
