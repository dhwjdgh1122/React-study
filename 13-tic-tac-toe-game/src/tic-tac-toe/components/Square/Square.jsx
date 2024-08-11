// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Square 컴포넌트)
// --------------------------------------------------------------------------
// - [x] 아토믹 컴포넌트인 Square 컴포넌트를 화면에 표시되도록 구현할 것입니다.
// - [x] Square 컴포넌트가 속성(props)에 따라 화면에 어떻게 렌더링되어야 하는 지 설계합니다.
//       - [상황 0] 아무런 콘텐츠를 화면에 표시하지 않는다.
//       - [상황 1] 사용자 액션이 있을 경우, 현재 플레이어를 화면에 표시한다.
//       - [상황 2] 이미 사용자 액션이 처리된 경우, 화면에 아무런 변화가 없다.
// - [x] Square 컴포넌트 속성(props) 검사를 작성합니다. (TypeScript or prop-types)
// - [x] Square 컴포넌트의 스타일을 CSS 모듈(modules) 방식으로 설정합니다. (with Vite)
// --------------------------------------------------------------------------

import { func, node } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
};

// 상태를 가지지 않는(Stateless) 컴포넌트
function Square({ children, onPlay, ...restProps }) {
  // [파생된 상태]
  const isDisabled = !!children;

  return (
    <button
      className={S.component}
      onClick={onPlay}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Square;
