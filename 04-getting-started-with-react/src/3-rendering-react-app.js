// TODO:
// 데이터를 순환해서 리액트 엘리먼트를 생성한 후,
// list의 자식들(children)로 설정하여 화면에 표시
const listData = {
  items: [
    { id: '1', title: 'Climatology' },
    { id: '2', title: 'History of Architecture' },
    { id: '3', title: 'Graphics' },
    { id: '4', title: 'Building design' },
  ],
};

// React 리스트 렌더링
// Array.prototype.map 메서드 활용
const children = listData.items.map(({ id, title }) => {
  // TODO:
  // React API를 사용해 <li></li> React 엘리먼트 생성
  const reactElement = React.createElement(
    'li',
    {
      key: id,
      className: 'item',
    },
    React.createElement('img', {
      src: `/architectures/architecture-${id}.jpg`,
      alt: '',
    }),
    React.createElement(
      'span',
      {
        className: 'content',
      },
      title
    ),
    React.createElement(
      'button',
      {
        type: 'button',
        title: '아이템 이동 (위/아래 화살표 키 활용)',
      },
      React.createElement('img', {
        src: '/icons/handle.svg',
        alt: '아이템 이동 (위/아래 화살표 키 활용)',
      })
    )
  );

  return reactElement;
});

// React.createElement API
// <ul></ul> 리액트 엘리먼트 생성
const list = React.createElement(
  'ul',
  { className: 'architectures', lang: 'en' },
  // ...children (child1, child2, ..., childN)
  children
);

// 리액트 요소(React Element === 가상 DOM 요소 노드) 생성
// console.log(list);

// React.isValidElement API
// console.log(React.isValidElement(list));

// 리액트 앱 렌더링 (그림을 그리다, 화면에 표시)
// ReactDOM / Server or [Client]
// ReactDOM.createRoot(container/* 실제 DOM 노드: 요소 노드 */)

const container = document.getElementById('root');

// ReactDOM Root 생성
const reactDomRoot = ReactDOM.createRoot(container);

// 렌더링을 처리하는 함수
function render() {
  reactDomRoot.render(list);
}

function unmount() {
  reactDomRoot.unmount();
}

render();

// 타이머 웹 API
// setTimeout

// 특정 시간이 지나면, 앱을 화면에 렌더링(표시) 하세요.
// setTimeout(render, 2000);

// 특정 시간이 지나면, 렌더링된 앱을 화면에서 표시하지 마세요.
// setTimeout(unmount, 4000);