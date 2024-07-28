class VirtualDomRoot {
  #rootElement;

  constructor(rootElement) {
    this.#rootElement = rootElement;
  }

  #parseVNode(vNode) {
    if (typeof vNode === 'string') return vNode;

    const { type, props } = vNode;

    const element = document.createElement(type);
    const children = props.children;
    delete props.children;

    Object.entries(props).forEach(([key, value]) => {
      if (key === 'className') {
        element.classList.add(value);
      } else {
        element.setAttribute(key, value);
      }
    });

    children.forEach((child) => {
      if (typeof child === 'string') {
        element.append(child);
      } else {
        element.append(this.#parseVNode(child));
      }
    });

    return element;
  }

  render(vNode) {
    const parsedElements = this.#parseVNode(vNode); // 가상 -> 실제 DOM 생성
    this.#rootElement.append(parsedElements);
  }

  umount() {
    Array.from(this.#rootElement.children).forEach((child) => child.remove());
  }
}

export default VirtualDomRoot;