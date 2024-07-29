import { createElement as h } from 'https://esm.sh/react';
import Avatar from '../components/Avatar.js';

function AvatarListPage() {
  return h(
    'ul',
    {
      className: 'AvatarList',
    },
    h(
      'li',
      null,
      h(Avatar, { name: '야무', photo: 'man-02.jpg', status: 'online' })
    ),
    h(
      'li',
      null,
      h(Avatar, { name: '범쌤', photo: 'man-04.jpg', status: 'away' })
    ),
    h(
      'li',
      null,
      h(Avatar, { name: '주원', photo: 'woman-04.jpg', status: 'dont-disturb' })
    ),
    h('li', null, h(Avatar, { name: '정민', photo: 'woman-01.jpg' }))
  );
}

export default AvatarListPage;