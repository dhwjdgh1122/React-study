// --------------------------------------------------------------------------
// ✅ 마우스 위치 동기화 / 정리
// --------------------------------------------------------------------------
// - [ ] 마우스가 움직이면 마우스 위치가 화면에 출력되도록 이펙트를 사용해 구현합니다.
// - [ ] 컴포넌트가 언마운트 된 이후 남은 이펙트를 깨끗하게 정리합니다.
// --------------------------------------------------------------------------

import { useEffect, useState } from 'react';
import S from './PrintMousePosition.module.css';
// import { throttle } from '@/utils';

function PrintMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { x, y } = mousePosition;

  // [이펙트]
  // 이펙트를 사용해 컴포넌트 마운트 시점에
  // document 객체에 마우스 움직임을 추적하는 이벤트를 연결

  // 개발 중일 때 이펙트는 2번 실행
  // 배포되면 이펙트는 1번 실행
  useEffect(
    // 1. 이펙트 콜백 추가
    () => {
      // console.log('이벤트 연결');
      // [이벤트 연결]
      // 사용자가 화면에서 마우스를 움직이면 이를 추적해
      // 마우스의 x, y 좌표 값을 읽어온다.
      const handleMove = ({ pageX: x, pageY: y }) => {
        console.log('moving mouse cursor');
        // 상태 업데이트
        setMousePosition({ x, y });
      };

      console.log('마우스 추적 이벤트 연결(구독)');
      // document.addEventListener('mousemove', throttle(handleMove, 100));
      document.addEventListener('mousemove', handleMove);

      // 3. 이펙트 콜백 함수 안에서 반환하는 함수 = 클린업(정리, cleanup) 함수
      //    클린업 함수는 언제 실행될까?
      //    - 컴포넌트가 다시 실행될 때 (렌더 트리거 -> 렌더 -> DOM 커밋)
      //      1. 컴포넌트의 속성(props)이 변경될 때
      //      2. 컴포넌트의 상태(states)가 변경될 때
      //    - 리-렌더링 시, 이펙트 콜백과 클린업 중 먼저 실행되는 것은?
      //      1. 이펙트 클린업 함수
      //      1. 이펙트 콜백 함수
      return () => {
        // 컴포넌트 마운트 시점에 설정했던 일을 정리
        console.log('마우스 추적 이벤트 연결 해지(정리)');
        document.removeEventListener('mousemove', handleMove);
      };
    },
    // 2. 종속성 설정
    //    가급적 종속성 설정은 필요
    //    설정하지 않은 경우 문제가 발생 (예: 성능)
    // 마운트 시점 이후 1회 실행
    []
  );

  return (
    <div className={S.component}>
      <output>
        {x} <span>/</span> {y}
      </output>
    </div>
  );
}

export default PrintMousePosition;
