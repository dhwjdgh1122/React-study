// --------------------------------------------------------------------------
// ✅ 클록(시계) ON/OFF // 정리
// --------------------------------------------------------------------------
// - [x] 1초마다 시간 정보를 화면에 업데이트하도록 이펙트를 작성합니다. (타이머 API 사용)
// - [x] 컴포넌트가 언마운트 된 이후, 남은 이펙트를 깨끗하게 정리합니다.
// --------------------------------------------------------------------------

import { useEffect, useState } from 'react';
import { bool, func } from 'prop-types';
import S from './ClockOnOff.module.css';

ClockOnOff.propTypes = {
  isOn: bool,
  onToggle: func,
};

function ClockOnOff({ isOn = false, onToggle }) {
  const [time, setTime] = useState(new Date());

  // 이펙트 추가
  useEffect(() => {
    // 1초 마다 로케일 타임 업데이트
    console.log('타이머 연결');
    const clearId = setInterval(() => {
      const nextTime = new Date();
      console.log(nextTime.toLocaleTimeString());
      setTime(nextTime);
    }, 1000);

    // 클린업 필요!
    return () => {
      console.log('타이머 해지');
      clearInterval(clearId);
    };
  }, []);

  return (
    <div className={S.component}>
      <button lang="en" type="button" onClick={onToggle}>
        CLOCK {isOn ? 'OFF' : 'ON'}
      </button>
      <output hidden={!isOn}>{time.toLocaleTimeString()}</output>
    </div>
  );
}

export default ClockOnOff;
