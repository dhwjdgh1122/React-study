// --------------------------------------------------------------------------
// ✅ 사용자와의 상호작용
// --------------------------------------------------------------------------
// - [x] 이벤트에 응답
// - [x] 이벤트 핸들러 추가
//    - [x] 이벤트 핸들러에서 사이드 이펙트 처리 가능
//    - [x] 이벤트 핸들러에서 컴포넌트 속성(props) 읽기
//    - [x] 이벤트 핸들러(함수)를 하위 컴포넌트에 속성(prop)으로 전달
//    - [x] 이벤트 핸들러 prop 이름 설정
// --------------------------------------------------------------------------

import View from './View';
import NavContents from './NavContents';
import ScrollUpAndDown from './responding-to-events/scroll-up-and-down';
import { number } from 'prop-types';

Learn.propTypes = {
  count: number,
};

function Learn({ count }) {
  // console.log('마운트 횟수', ++mountCount);

  console.log({ count });

  return (
    <div className="Learn">
      <output style={{ fontSize: 101 }}>{count}</output>
      <NavContents />
      <View.HTMLvsJSX />
      <View.RespondingToEvents />
      <ScrollUpAndDown />
    </div>
  );
}

export default Learn;
