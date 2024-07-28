// 실습 (Practice)
import { createElement, isValidElement } from './lib/virtual/index.js'; // like React
import { createRoot } from './lib/virtual-dom/index.js'; // like React DOM

// Data (Declarative Programming)
const listData = {
  items: [
    { id: '3', title: 'Graphics' },
    { id: '1', title: 'Climatology' },
    { id: '2', title: 'History of Architecture' },
    { id: '4', title: 'Building design' },
  ],
};

// Data + JavaScript Markup = Virtual DOM (VirtualElement Tree)
const listItems = listData.items.map(({ id, title }) => {
  // 가상 요소 반환
  const itemElement = createElement(
    'li',
    { className: 'item' },
    createElement('img', {
      src: `/architectures/architecture-${id}.jpg`,
      alt: '',
    }),
    createElement('span', { className: 'content' }, title),
    createElement(
      'button',
      {
        type: 'button',
        title: '아이템 이동 (위/아래 화살표 키 활용)',
      },
      createElement('img', {
        src: '/icons/handle.svg',
        alt: '아이템 이동 (위/아래 화살표 키 활용)',
      })
    )
  );
  return itemElement;
});

// console.log(...listItems);

// TODO: <ul class="architectures" lang="en"></ul> 가상 요소 생성
// API : createElement(type, props, ...children)
const list = createElement(
  // type
  'ul',
  // props
  { className: 'architectures', lang: 'en' },
  // ...children (child1, child2, ..., childN)
  // <li class="item"></li> 가상 요소 삽입(추가)
  ...listItems
);

// 가상 요소 객체
console.log(isValidElement(list));

// 일반 JavaScript 객체
console.log(isValidElement({ $$typeof: Symbol('virtual.element') }));

// 가상 DOM (실제 DOM 흉내: 단순화)
// console.log(list);
const root = createRoot(document.getElementById('virtual-dom'));

root.render(list);