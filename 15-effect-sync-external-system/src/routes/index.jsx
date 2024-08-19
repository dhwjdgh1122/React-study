import SyncDocumentTitle from './sync-document-title';
import SyncWebStorage from './sync-web-storage';
import EffectSyncAndCleanup from './effect-sync-and-cleanup';
import ScrollTriggerEffect from './scroll-trigger-effect';
import SyncBackend from './sync-backend';

const routes = [
  {
    title: '문서 제목 동기화',
    path: '/',
    element: <SyncDocumentTitle />,
  },
  {
    title: '웹 스토리지 동기화',
    path: '/sync-web-storage',
    element: <SyncWebStorage />,
  },
  {
    title: '이펙트 동기화 / 정리',
    path: '/effects-sync-and-cleanup',
    element: <EffectSyncAndCleanup />,
  },
  {
    title: '스크롤 트리거 이펙트',
    path: '/scroll-trigger-effect',
    element: <ScrollTriggerEffect />,
  },
  {
    title: '백엔드 환경과 동기화',
    path: '/sync-backend',
    element: <SyncBackend />,
  },
];

export default routes;
