import VirtualDomRoot from "./VirtualDomRoot.js";


function createRoot(rootElement) {
  return new VirtualDomRoot(rootElement);
}

export default createRoot;