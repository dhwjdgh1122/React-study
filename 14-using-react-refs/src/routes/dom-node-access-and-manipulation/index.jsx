// --------------------------------------------------------------------------
// ✅ DOM 노드 접근/조작
// --------------------------------------------------------------------------
// - [ ] 리액트 DOM이 아닌, 실제 DOM 노드에 접근 가능한 시점
//   - [ ] 이벤트 핸들러 (사이드 이펙트 처리에 최적)
//   - [ ] ref 콜백 함수 (DOM 노드에 접근 가능)
// - [ ] vanilla-tilt.js를 사용해 링크 카드에 틸트 이펙트 적용
//   - [ ] VanillaTilt 초기화
//   - [ ] vanilla-tilt.js 옵션 설정
// --------------------------------------------------------------------------

import { useState } from 'react';
import CardLinkList from './components/CardLinkList';
import S from './style.module.css';

import darkRiderCover from './assets/dark_rider-cover.jpg';
import darkRiderTitle from './assets/dark_rider-title.png';
import darkRiderCharacter from './assets/dark_rider-character.webp';
import forceMageCover from './assets/force_mage-cover.jpg';
import forceMageTitle from './assets/force_mage-title.png';
import forceMageCharacter from './assets/force_mage-character.webp';

const LINK_LIST = [
  {
    id: 1,
    href: 'https://www.mythrillfiction.com/the-dark-rider',
    label: '어둠의 라이더(the dark rider)',
    images: {
      cover: darkRiderCover,
      title: darkRiderTitle,
      character: darkRiderCharacter,
    },
  },
  {
    id: 2,
    href: 'https://www.mythrillfiction.com/force-mage',
    label: '포스 메이지(force mage)',
    images: {
      cover: forceMageCover,
      title: forceMageTitle,
      character: forceMageCharacter,
    },
  },
];

function DOMNodeAccessAndManipulation() {
  const [linkList] = useState(LINK_LIST);
  const [usingPopup, setUsingPopup] = useState(false);

  const handleToggle = (e) => {
    setUsingPopup(e.target.checked);
  };

  return (
    <main className={S.component}>
      <h1 className={S.headline}>DOM 노드 접근/조작</h1>
      <div className={S.description}>
        <p>
          리액트 DOM이 아닌, 실제 DOM 노드에 접근하여 조작하는 방법을
          학습합니다.
        </p>
        <p>
          <a
            href="https://micku7zu.github.io/vanilla-tilt.js/"
            target="_blank"
            rel="noreferrer noopener"
          >
            vanilla-tilt.js
          </a>
          를 사용해 컴포넌트 DOM 노드에 3D 틸트 이펙트를 설정해보세요.
        </p>
        <label className={S.control}>
          <input type="checkbox" checked={usingPopup} onChange={handleToggle} />{' '}
          팝업 이펙트
        </label>
      </div>

      <CardLinkList list={linkList} usingPopup={usingPopup} />
    </main>
  );
}

export default DOMNodeAccessAndManipulation;
