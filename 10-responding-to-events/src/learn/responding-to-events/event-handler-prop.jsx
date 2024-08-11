import { func } from 'prop-types';

EventHandlerProp.propTypes = {
  onPrintMessage: func,
};

// 하위 컴포넌트
function EventHandlerProp({ onPrintMessage }) {
  const handleEnter = () => {
    // console.log('enter');
    onPrintMessage?.(' ⭐️');
  };

  const handleLeave = () => {
    // console.log('leave')
  };

  return (
    <details>
      <summary onPointerEnter={handleEnter} onPointerLeave={handleLeave}>
        <b>이벤트 핸들러 추가하기</b>
      </summary>
      <p>
        이벤트 핸들러 추가를 위해서는 먼저 함수를 정의하고
        <br />
        이를 적절한 JSX 요소에 prop으로 전달해야 합니다.
      </p>
    </details>
  );
}

export default EventHandlerProp;
