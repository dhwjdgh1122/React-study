import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
import App from './App';

const container = document.getElementById('react-app');

if (!container) {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
