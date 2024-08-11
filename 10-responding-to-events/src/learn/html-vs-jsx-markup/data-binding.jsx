import { randomNumber, PropTypes } from '@/utils';

function DataBinding({ statusMessages }) {
  const randomStatusMessage =
    statusMessages[randomNumber(0, statusMessages.length - 1)];

  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">{randomStatusMessage}</span>
      </dd>
    </>
  );
}

DataBinding.propTypes = {
  statusMessages: PropTypes.array,
};

export default DataBinding;
