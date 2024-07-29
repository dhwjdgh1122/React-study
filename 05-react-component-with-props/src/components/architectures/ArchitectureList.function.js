import React from 'https://esm.sh/react';

// React 함수 컴포넌트 (Functional Component)
// 컴포넌트는 속성(props)을 전달 받을 수 있다.
function ArchitectureList(props) {
  // 컴포넌트 속성 확인
  // console.log(props);
  const { lang, children } = props;

  // 리액트 엘리먼트(React Element) 반환
  return React.createElement(
    'ul',
    { className: 'architectures', lang },
    children
  );
}

export default ArchitectureList;