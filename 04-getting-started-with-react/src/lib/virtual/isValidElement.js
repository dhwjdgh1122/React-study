import { VIRTUAL_ELEMENT_TYPE } from './createElement.js';

/** @type{(node: any) => boolean} */
function isValidElement(node) {
  // 전달받은 node는 가상 요소인가? 반환
  if ('$$typeof' in node && node?.$$typeof === VIRTUAL_ELEMENT_TYPE) {
    return true;
  } else {
    return false;
  }
}

export default isValidElement;