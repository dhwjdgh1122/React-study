// --------------------------------------------------------------------------
// ✅ 수동 화면 업데이트
// --------------------------------------------------------------------------
// - [ ] 렌더 함수 작성
// - [ ] 반응성 상태 구현 (with Proxy)
// - [ ] 반응성 상태를 사용해 수동 화면 업데이트
// --------------------------------------------------------------------------

import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Learn from './learn';

const container = document.getElementById('react-app');

if (!container)
  throw new Error('문서에 "#react-app" 요소가 존재하지 않습니다.');

const reactDOMRoot = createRoot(container);

function render(label) {
  if (label) console.log(label);

  reactDOMRoot.render(
    <StrictMode>
      <Learn count={state.count} />
    </StrictMode>
  );
}

// Reactivity (Proxy)
const state = {
  count: 1
}

const getState = (key) => state[key];

const setState = (key, nextValue) => {
  state[key] = nextValue;
}

globalThis.update = function update() {
  const prevCountValue = getState('count');
  const nextCountValue = prevCountValue + 1;
  
  // update state
  setState('count', nextCountValue);

  // re-render
  render('re-render');
}

// first render
render('first render');
