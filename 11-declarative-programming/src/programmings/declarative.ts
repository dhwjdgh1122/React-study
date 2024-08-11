// --------------------------------------------------------------------------
// ✅ 선언적 프로그래밍
// --------------------------------------------------------------------------
// - [x] 선언적 프로그래밍을 가능하게 하는 도구 사용 필요 (createState 함수 활용)
// - [x] 체크박스 활성 "상태를 선언"합니다. (상태 선언)
// - [x] 체크박스 및 버튼을 "렌더링 하는 함수를 작성"합니다. (렌더링 함수 작성)
// - [ ] "선언된 상태가 변경"되면, 체크박스와 버튼을 "다시 렌더링"합니다. (다시 렌더링)
// --------------------------------------------------------------------------

import createState from '../lib/createState';

// 무엇(WHAT)을 상태로 선언할 것인가?
const data = {
  checked: false,
};

// 리액트
// 선언적 상태 변경 감지 -> 설정된 렌더 함수 실행
// UI 업데이트 제어
// 컴포넌트 렌더링 프로세스 (작동, 다시 작동 ....)
const render = () => {
  const { checked } = state;
  // console.log('[checked 업데이트]:', checked);
  // UI 업데이트(다시 렌더링)
  (checkbox as HTMLInputElement).checked = checked;
  if (checked) {
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  } else {
    button.setAttribute('disabled', 'true');
    button.textContent = '비활성 상태';
  }
};

const update = (globalThis.update = (value: boolean): void => {
  setState('checked', value);
});

// React 상태 선언 코드
// const [state, setState] = React.useState(data);
// render = ReactDOM.createRoot(domNode).render(ReactRootElement)

// 임의로 작성한 상태 선언 코드
const [state, setState] = createState(data, render);

// 최초 렌더링
// render();

const container = document.getElementById('declarative-programming');
const checkbox = container.querySelector('input[type="checkbox"]');
const button = container.querySelector('button');

checkbox.addEventListener('change', (e: Event) => {
  const { checked: nextCheckedValue } = e.target as HTMLInputElement;
  // 상태 업데이트 시도
  update(nextCheckedValue);
});
