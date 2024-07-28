// Virtual DOM
// 가상 문서 객체 모델
// 실제 DOM을 추상화(단순화)

import { createElement } from './lib/virtual/index.js';

// -----------------------------------------------------------------

// 가상(추상화된, 단순화된) 요소(엘리먼트) 생성

// 자식(하위) 요소
const figcaptionVElement = createElement('figcaption');
// console.log(figcaptionVElement);

// 부모(상위) 요소
// API : createElement(type, props, child1, child2, ..., childN)
// API : createElement(type, props, ...children)
const figureVElement = createElement('figure', null, figcaptionVElement);
// console.log(figureVElement);

// -----------------------------------------------------------------

// 실제 DOM 구성 (엘리먼트 트리)
// 웹 API를 사용해 문서 객체(Document Object) 생성
// <figure> 요소를 생성하고 싶어요.

// 부모(상위) 요소 생성
const figureElement = document.createElement('figure');

// 자식(하위) 요소 생성
const figcaptionElement = document.createElement('figcaption');

// 요소간 관계 형성
figureElement.append(figcaptionElement);

// 실제 DOM에 마운트(mount, 착장 === 렌더링)
const actualDomElement = document.getElementById('actual-dom');
console.log(actualDomElement);

actualDomElement.append(figureElement);