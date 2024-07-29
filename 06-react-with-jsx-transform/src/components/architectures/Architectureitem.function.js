import { createElement as h } from 'https://esm.sh/react';

function ArchitectureItem({ id, title } /* props */) {
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

export default ArchitectureItem;