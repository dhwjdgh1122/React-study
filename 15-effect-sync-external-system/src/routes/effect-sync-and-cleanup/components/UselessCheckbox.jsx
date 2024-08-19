// --------------------------------------------------------------------------
// ✅ 쓸모없는 체크박스 / 정리
// --------------------------------------------------------------------------
// - [x] 체크 상태 해제해도, 1초 뒤 다시 체크되는 쓸모없는 체크박스를 구현합니다. (타이머 API 사용)
// - [x] 컴포넌트가 언마운트 된 이후, 남은 이펙트를 깨끗하게 정리합니다.
// --------------------------------------------------------------------------

import { useEffect, useId, useState } from 'react';
import S from './UselessCheckbox.module.css';

function UselessCheckbox() {
  const id = useId();

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    // 이펙트 콜백 함수 안에서
    // 상태 업데이트 조건 처리

    let clearId = 0;

    // checked = false 일 때만 실행
    if (checked === false) {
      console.log('타이머 연결');
      clearId = setTimeout(() => {
        setChecked(true);
        console.log('쓸데없는 기능 실행');
      }, 1000);
    }

    // checked = true 일 때는 무시

    return () => {
      console.log('타이머 클린업');
      clearTimeout(clearId);
    };
  }, [checked]);

  const handleChecked = () => setChecked((c) => !c);

  return (
    <div className={S.component}>
      <label htmlFor={id} className="sr-only">
        쓸모없는 체크박스
      </label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChecked}
      />
    </div>
  );
}

export default UselessCheckbox;
