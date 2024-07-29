import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Learn from './learn';

const container = document.getElementById('react-app');

// XML 유사한 구문 사용해야 하는 JSX 구문에서는 여는 태그만 넣을 경우 오류
// 열고 닫고 <tag></tag> / <tag />
if (container) {
  createRoot(container).render(
    <StrictMode>
      <Learn />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
