import VirtualDomRoot from './VirtualDomRoot.js';

// React DOM API 유사
// ReactDOM.createRoot(container, options?)
function createRoot(rootElement) {
  return new VirtualDomRoot(rootElement);
}

export default createRoot;