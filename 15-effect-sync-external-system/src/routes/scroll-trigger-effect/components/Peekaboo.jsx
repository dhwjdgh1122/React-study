// --------------------------------------------------------------------------
// ✅ 스크롤 트리거 이펙트
// --------------------------------------------------------------------------
// - [x] 코드 해설
// - [x] sectionMapRef 참조 객체에 순환된 <section> 요소를 Map 데이터로 수집합니다.
// - [x] 랜덤 <section> 요소가 뷰포트 안에 들어왔는 지 확인합니다. (IntersectionObserver)
// - [x] 랜덤 <section> 요소가 뷰포트 안에 있으면 피카부(까꿍) 애니메이션 발동되도록 구현합니다.
// --------------------------------------------------------------------------

import { useEffect, useRef, useState } from 'react';
import { animate, spring } from 'motion';
import { getRandomMinMax } from '@/utils';
import S from './Peekaboo.module.css';

function Peekaboo() {
  const [sections] = useState(Array(9).fill(null));

  // 스크롤 영역에 랜덤 인덱스의 섹션이 보이면 까꿍~!
  // peekaboo 상태가 true가 되면 유령이 등장!
  const [peekaboo, setPeekaboo] = useState(false);

  const [randomIndex] = useState(() => {
    const min = 1;
    const max = sections.length; // 9
    const randomIndex = getRandomMinMax(min, max);
    // console.log(randomIndex);
    return randomIndex;
  });

  const peekabooRef = useRef(null); // { current: null }

  const renderPeekaboo = (idx) =>
    idx === randomIndex ? (
      <span ref={peekabooRef} className={S.peekaboo}>
        👻
      </span>
    ) : null;

  // 피카부 애니메이션 이펙트
  useEffect(() => {
    const peekabooCharacter = peekabooRef.current;

    if (peekaboo) {
      animate(
        peekabooCharacter,
        { x: [1000, 0], opacity: [0, 1] },
        {
          delay: 0.5,
          easing: spring({ stiffness: 800, damping: 15, mass: 2 }),
        }
      );
    } else {
      animate(peekabooCharacter, { x: [0, 1000], opacity: [0, 1] });
    }
  }, [peekaboo]);

  // 스크롤 트리거 이펙트
  useEffect(() => {
    console.log({ randomIndex });

    const targetIndex = randomIndex - 1;
    const targetSectionElements = Array.from(sectionsRef.current.values());
    const targetSectionElement = targetSectionElements.at(targetIndex);

    // 인터섹션 옵저버 객체 생성
    const intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];

      // 교차했는가? 즉, 뷰포트 안에 관찰 대상이 진입한 상태인가? true or false
      if (entry.isIntersecting) {
        console.log('뷰포트 안에 관찰 대상이 보인다.');
        setPeekaboo(true);
      } else {
        console.log('뷰포트 안에 관찰 대상이 안보인다.');
        setPeekaboo(false);
      }
    });

    // 인터섹션 옵저버 객체 관찰 대상 설정
    // 뷰포트 안에 관찰 대상이 진입(enter)했는 지, 진출(leave)했는 지 감지
    intersectionObserver.observe(targetSectionElement);

    // 클린업(정리)
    return () => {
      // 인터섹션 옵저버 객체가 관찰하는 것을 중단 설정
      intersectionObserver.unobserve(targetSectionElement);
    };
  }, [randomIndex]);

  // ref 참조 { current: 섹션 집합 수집 }
  // - Map 데이터 활용

  const sectionsRef = useRef(null); // { current: null }

  const getSectionMap = () => {
    if (!sectionsRef.current) {
      sectionsRef.current = new Map();
    }
    return sectionsRef.current;
  };

  const collectSections = (key, sectionElement) => {
    const sectionMap = getSectionMap();

    if (sectionElement) {
      sectionMap.set(key, sectionElement);
    } else {
      sectionMap.delete(key);
    }
  };

  return (
    <div className={S.component}>
      {sections.map((section, index) => {
        const idx = index + 1;
        const styles = { backgroundColor: `var(--purple-${idx}00)` };

        return (
          <section
            key={index}
            ref={collectSections.bind(null, index)}
            className={S.section}
            style={styles}
          >
            {idx}
            {renderPeekaboo(idx)}
          </section>
        );
      })}
    </div>
  );
}

export default Peekaboo;
