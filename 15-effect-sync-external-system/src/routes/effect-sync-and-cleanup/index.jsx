import { useState } from 'react';
import ClockOnOff from './components/ClockOnOff';
import PrintMousePosition from './components/PrintMousePosition';
import UselessCheckbox from './components/UselessCheckbox';
import S from './style.module.css';

const SUBJECTS = {
  MOUSE: '마우스 위치 추적',
  CLOCK: '시계 ON/OFF',
  CHECKBOX: '쓸모없는 체크박스',
};

function EffectSyncAndCleanup() {
  const [subject, setSubject] = useState(SUBJECTS.MOUSE);

  const [isClockOn, setIsClockOn] = useState(false);

  let renderSubjectComponent = null;

  switch (subject) {
    default:
    case SUBJECTS.MOUSE:
      renderSubjectComponent = <PrintMousePosition />;
      break;
    case SUBJECTS.CLOCK:
      renderSubjectComponent = (
        <ClockOnOff isOn={isClockOn} onToggle={() => setIsClockOn((s) => !s)} />
      );
      break;
    case SUBJECTS.CHECKBOX:
      renderSubjectComponent = <UselessCheckbox />;
  }

  const selectSubject = (subject) => () => setSubject(subject);

  const getActiveClassName = (key) => (key === subject ? S.active : '');

  return (
    <main id="page">
      <h1 className="headline">마우스 위치 (이벤트 연결 &amp; 클린업)</h1>

      <div className="description">
        <p>이펙트(Effects)는 리액트를 벗어난 시스템과 동기화에 사용됩니다.</p>
        <p>
          하지만 리액트 시스템은 리-렌더링이 될 경우 남은 이펙트가 반복될 수
          있습니다.
        </p>
        <p>그러므로 일부 이펙트는 정리(cleanup)가 필요합니다.</p>
      </div>

      <nav className={S.nav}>
        <button
          type="button"
          className={getActiveClassName(SUBJECTS.MOUSE)}
          onClick={selectSubject(SUBJECTS.MOUSE)}
        >
          마우스 위치 추적
        </button>
        <button
          type="button"
          className={getActiveClassName(SUBJECTS.CLOCK)}
          onClick={selectSubject(SUBJECTS.CLOCK)}
        >
          시계 ON/OFF
        </button>
        <button
          type="button"
          className={getActiveClassName(SUBJECTS.CHECKBOX)}
          onClick={selectSubject(SUBJECTS.CHECKBOX)}
        >
          쓸모없는 체크박스
        </button>
      </nav>

      {renderSubjectComponent}
    </main>
  );
}

export default EffectSyncAndCleanup;
