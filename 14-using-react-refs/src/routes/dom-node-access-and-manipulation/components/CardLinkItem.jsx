import { bool } from 'prop-types';
import { CardLinkItemType } from '../types/CardLinkList';
import S from './CardLinkItem.module.css';
import VanillaTilt from 'vanilla-tilt';
import { useRef } from 'react';

const TILT_CONFIG = {
  // 기울이는 방향을 반대로 변경
  reverse: true,
  // 최대 기울기 회전(도°)
  max: 15,
  // X축의 시작 기울기(도°)
  startX: 0,
  // Y축의 시작 기울기(도°)
  startY: 0,
  // 관점(perspective) 값이 낮을수록 기울기가 더 커짐
  perspective: 1000,
  // 스케일 ( 2 = 200%, 1.5 = 150% )
  scale: 1.2,
  // Enter/Exit 전환 속도
  speed: 600,
  // Enter/Exit 시 전환 설정
  transition: true,
  // "x" 또는 "y" 축 활성화 설정 (`null`일 경우 양쪽 모두 활성화)
  axis: null,
  // 종료 시, 기울기 효과를 재설정
  reset: true,
  // 종료 재설정이 [0,0](기본값) 또는 [startX, startY]로 이동하는지 여부
  'reset-to-start': true,
  // Enter/Exit 시 사용되는 이징 함수
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  // "글레어(섬광)" 효과 설정
  glare: false,
  // 최대 "글레이" 불투명도 설정 (1 = 100%, 0.5 = 50%)
  'max-glare': 0.65,
  // false = VanillaTilt가 글레어 요소를 생성함
  // true = .js-tilt-glare > .js-tilt-glare-inner를 사용자가 직접 추가해야 함.
  'glare-prerender': false,
  // CSS 선택자 또는 HTML 요소 링크 마우스 이벤트 수신
  'mouse-event-element': null,
  // 장치 방향 감지 활성/비활성화
  gyroscope: true,
  // 장치 X축 각도 하한(bottom limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 왼쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMinAngleX: -45,
  // 장치 X축 각도 상한(top limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 오른쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMaxAngleX: 45,
  // 장치 Y축 각도 하한(bottom limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 위쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMinAngleY: -45,
  // 장치 Y축 각도 상한(top limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 아래쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMaxAngleY: 45,
};

CardLinkItem.propTypes = {
  item: CardLinkItemType.isRequired,
  popup: bool,
  external: bool,
};

function CardLinkItem({ item, popup = false, external = false }) {
  const { href, label, images = {} } = item;

  const cardClassNames = `${S.card} ${popup ? S.popup : ''}`.trim();

  let externalLinkProps = null;

  if (external) {
    externalLinkProps = {
      target: '_blank',
      rel: 'noreferrer noopener',
    };
  }

  // useRef() 훅을 사용해 리액트 렌더링 프로세스와 상관없는 뭔가를 기억하고자 한다.
  // 여기서 뭔가란? DOM 요소 참조 (with useRef() 훅)
  const titleRef = useRef(null); // { current: null }

  // React 탈출구 방식
  // 실제 DOM에 렌더링 된 이후, HTML 요소에 접근 가능
  // 리액트 -> 렌더 트리 생성 -> 리액트 돔 => 실제 DOM 렌더링 -> [마운트] ref 콜백 함수 실행
  // 참조 콜백(ref callback)
  const refCallback = (el /* domElementNode */) => {
    // 실제 DOM 요소 노드 접근 가능!!!
    // Vanilla Tilt 이펙트 적용

    if (el) {
      // 리-렌더 없이 DOM 요소 참조
      // titleRef.current = el.querySelector(`.${S.title}`);
      // console.log({ titleElement: titleRef.current });

      // titleRef.current.style.opacity = '0';

      // const vanillaTiltInstance = new VanillaTilt(el);
      // console.log('Vanilla Tilt 이펙트 적용!');
      VanillaTilt.init(el, TILT_CONFIG);
      // console.log(el.vanillaTilt);
    }
  };

  // 이벤트 핸들러
  // 외부 시스템인 DOM 요소에 접근, 조작
  // 사용자 액션이 요구에 반응
  const handleEnter = () => {
    // 리액트의 방식이 아닌, 바닐라 스크립트 방식!
    const title = titleRef.current;
    title.style.opacity = '1';
    // 접근성 관점에서 매우 중요!!!
    // title.closest('a').focus();
  };

  const handleLeave = () => {
    titleRef.current.style.opacity = '0';
  };

  return (
    <a
      // JSX에 사용 가능한 특수한 속성
      // key, ref
      key={'identity'}
      ref={refCallback}
      className={S.component}
      aria-label={label}
      title={label}
      href={href}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      {...externalLinkProps}
    >
      <figure className={cardClassNames}>
        <div className={S.wrapper}>
          <img className={S.coverImage} src={images.cover} alt="" />
        </div>
        <img ref={titleRef} className={S.title} src={images.title} alt="" />
        <img className={S.character} src={images.character} alt="" />
      </figure>
    </a>
  );
}

export default CardLinkItem;
