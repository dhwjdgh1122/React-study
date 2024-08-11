// --------------------------------------------------------------------------
// ✅ 스크롤 트리거 애니메이션
// --------------------------------------------------------------------------
// - [ ] 모션원의 inView() 함수를 사용해 뷰포트 영역에 대상 요소가 들어오면 애니메이션을 트리거합니다.
// - [ ] 이미 애니메이션이 종료된 이후, 다시 뷰포트 영역에 진입할 경우 애니메이션 되도록 설정합니다.
// --------------------------------------------------------------------------

import { useState } from 'react';
import { IMAGES } from './constants';
import S from './ScrollTriggerAnimation.module.css';
import ScrollTriggerItem from './ScrollTriggerItem';

function ScrollTriggerAnimation() {
  const [images] = useState(IMAGES);

  return (
    <section className={S.component}>
      <h2 className="sr-only">스크롤 트리거 애니메이션</h2>
      {images.map((item) => (
        <ScrollTriggerItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default ScrollTriggerAnimation;
