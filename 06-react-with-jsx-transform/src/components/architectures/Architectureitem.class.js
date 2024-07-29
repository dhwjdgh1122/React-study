// TODO: 컴포넌트 정의(with 속성) & 추출
// <li> 리액트 엘리먼트를 생성하는 클래스 컴포넌트를 작성하세요.
// 컴포넌트 이름은 여러분이 생각하는 "그것"입니다. (여러분의 작명 센스를 볼께요.)

import { createElement as h, Component } from 'https://esm.sh/react';

class ArchitectureItem extends Component {
  render() {
    // 컴포넌트 속성(props) 설계(design)
    // this.props 구조 { id, title }
    const { id, title } = this.props;

    return h(
      'li',
      {
        key: id,
        className: 'item',
      },
      h('img', {
        src: `/architectures/architecture-${id}.jpg`,
        alt: '',
      }),
      h(
        'span',
        {
          className: 'content',
        },
        title
      ),
      h(
        'button',
        {
          type: 'button',
          title: '아이템 이동 (위/아래 화살표 키 활용)',
        },
        h('img', {
          src: '/icons/handle.svg',
          alt: '아이템 이동 (위/아래 화살표 키 활용)',
        })
      )
    );
  }
}

export default ArchitectureItem;