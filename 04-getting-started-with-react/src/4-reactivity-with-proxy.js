// 반응성(Reactivity) 구현
// 개발자 -> 데이터 수정 -> 반응성(변경 감지) -> 리액트 -> 화면 업데이트 구현

// 일반 JavaScript 객체
// 개발자가 선언된 데이터 관리
const listData = {
  items: [
    // { id: '1', title: 'Climatology' },
    // { id: '2', title: 'History of Architecture' },
    // { id: '3', title: 'Graphics' },
    // { id: '4', title: 'Building design' },
  ],
};

// 반응성 구현 : Proxy 객체 활용 (like Vue.js)
const reactiveListData = new Proxy(listData, {
  // GET (원본 수정 대신, 프록시를 사용해 가로채서 읽기)
  get(target, prop) {
    console.log('[GET]');
    // 객체의 속성 반환
    return target[prop];
  },

  // SET (원본 수정 대신, 프록시를 사용해 가로채서 쓰기)
  set(target, prop, newValue) {
    // 이전 값
    const oldValue = target[prop];

    // 새로운 값으로 업데이트 로직 작성
    target[prop] = newValue;

    console.log('[SET] update', JSON.stringify(newValue));

    // 리액트로 하여금 반응(수정 감지)되면 화면을 다시 그려라
    console.log('리-렌더링(re-render)');
    render();

    return true;
  },
});

const container = document.getElementById('root');

const reactDomRoot = ReactDOM.createRoot(container);

function render() {
  const children = reactiveListData.items.map(({ id, title }) => {
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

  const list = React.createElement(
    'ul',
    { className: 'architectures', lang: 'en' },

    children
  );

  reactDomRoot.render(list);
}

function unmount() {
  reactDomRoot.unmount();
}

// 최초 마우트 시 실행 (렌더링)
render();

// TODO:
// 1초 마다 반응성 데이터에 새로운 아이템 추가 (업데이트)
setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 1,
      title: 'Climatology',
    },
  ];
}, 1000);
setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 2,
      title: 'History of Architecture',
    },
  ];
}, 2000);
setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 3,
      title: 'Graphics',
    },
  ];
}, 3000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 4,
      title: 'Building design',
    },
  ];
}, 4000);