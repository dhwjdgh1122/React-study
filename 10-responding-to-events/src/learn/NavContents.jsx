function NavContents() {
  // 컴포넌트 바디(함수 몸체) 영역
  // 리액트 렌더링 프로세스와 관련된 것만 코드 작성

  // - 사이드 이펙트 코드 작성
  // - 여기서 이러시면 안됩니다.
  // const firstLink = document.querySelector('[href="#jsx-markup"]');
  // firstLink.dataset.element = 'a';

  // 1. 컴포넌트 바디(함수 몸체) 내부
  // 이벤트 핸들러 정의
  const handleClickFirstLink = (e) => {
    e.preventDefault();

    const firstLink = document.querySelector('[href="#jsx-markup"]');
    firstLink.dataset.element = 'jsx-markup';
  };

  const handleClickLastLink = (e) => {
    e.preventDefault();

    // 사이드 이펙트(부수 효과) 처리 함수
    // 사이드 이펙트: 리액트 렌더링 프로세스와 연관이 없는 것을 처리
    // console.log('이벤트 응답');

    // 사이드 이펙트 코드 작성
    const lasatLink = document.querySelector('[href="#responding-to-events"]');
    lasatLink.dataset.element = 'responding-to-events';
  };

  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a
        href="#jsx-markup"
        // 2. JSX 내부
        // 이벤트 속성(prop, on*: onClick, onDragStart, onMouseEnter, onKeyDown, ...)에 인라인 핸들러 연결
        // onClick={handleClickFirstLink()} // React 월드에서 즉시 실행
        onClick={handleClickFirstLink} // DOM 월드에서 사용자에 의해 실행
      >
        JSX 마크업
      </a>
      {/* 이벤트 속성(prop)에 정의된 이벤트 핸들러 연결 (함수 이름 참조) */}
      <a
        href="#responding-to-events"
        className="active"
        onClick={handleClickLastLink}
      >
        이벤트 응답
      </a>
    </nav>
  );
}

export default NavContents;
