import RememberWithoutReRender from './remember-without-re-render';
import DOMNodeAccessAndManipulation from './dom-node-access-and-manipulation';
import UsingImperativeHandle from './using-imperative-handle';
import MotionOneAnimate from './motion-one-animate';
import MotionOneTimeline from './motion-one-timeline';
import MotionOneInView from './motion-one-in-view';
import MotionOneScroll from './motion-one-in-scroll';
import MotionOneStagger from './motion-one-stagger';
import Home from './home';

// 경로 집합
// 어떤 경로에 어떤 컴포넌트를 렌더링 할 것인가 설정
const routes = [
  {
    title: '싱글 페이지 애플리케이션',
    path: '/',
    element: <Home />,
  },
  // Route Object { title, path, element }
  {
    title: '리-렌더 없이 기억',
    path: '/remember-without-re-render',
    element: <RememberWithoutReRender />,
  },
  {
    title: 'DOM 노드 접근/조작',
    path: '/dom-node-access-and-manipulation',
    element: <DOMNodeAccessAndManipulation />,
  },
  {
    title: '명령형 핸들 노출',
    path: '/using-imperative-handle',
    element: <UsingImperativeHandle />,
  },
  {
    title: '모션원 animate()',
    path: '/motion-one-animate',
    element: <MotionOneAnimate />,
  },
  {
    title: '모션원 timeline()',
    path: '/motion-one-timeline',
    element: <MotionOneTimeline />,
  },
  {
    title: '모션원 inView()',
    path: '/motion-one-in-view',
    element: <MotionOneInView />,
  },
  {
    title: '모션원 scroll()',
    path: '/motion-one-scroll',
    element: <MotionOneScroll />,
  },
  {
    title: '모션원 stagger()',
    path: '/motion-one-stagger',
    element: <MotionOneStagger />,
  },
];

export default routes;
