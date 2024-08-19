import { useState } from 'react';
import { IMAGES } from './constants';
import ScrollItem from './ScrollItem';
import ProgressBar from './ProgressBar';
import S from './ScrollAnimation.module.css';

function ScrollAnimation() {
  const [images] = useState(IMAGES);

  return (
    <section className={S.component}>
      <h2 className="sr-only">스크롤 트리거 애니메이션</h2>
      <ProgressBar containerSelector={`.${S.component} ul`} />
      <ul>
        {images.map((item) => (
          <ScrollItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default ScrollAnimation;
