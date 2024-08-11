// [학습 내용 정리]
//   1. [x] 데이터 분리
//   2. [x] 컴포넌트 상태로 정의(선언)
//   3. [x] 이벤트 핸들러 작성(기능 구현)
//   4. [x] 사용자 상호작용에 따라 화면 업데이트 (확인)
//   5. [-] 컴포넌트 테스트 (SKIP)

import { useState } from 'react';
import Avatar from '@/components/Avatar/Avatar';
import { avatarsData } from '@/data/avatars';

function AvatarListPage() {
  // 컴포넌트 상태 선언
  // 리액트에 의해 관리 (컴포넌트 리-렌더 -> 화면 업데이트)
  const [list, setList] = useState(avatarsData);

  // 컴포넌트 상태 업데이트 로직을 포함하는 이벤트 핸들링 함수
  const handleDeleteItem = (deleteId) => () => {
    console.log('delete item', deleteId);

    // 다음 렌더링에서 화면에 표시할 상태 데이터
    const nextList = list.filter((item) => item.id !== deleteId);

    // 상태 업데이트 (렌더 트리거)
    setList(nextList);
  };

  if (list.length === 0) {
    return <p style={{ fontSize: 24 }}>화면에 표시할 아바타가 없습니다. 😳</p>;
  }

  return (
    <ul className="AvatarList">
      {list.map((item) => (
        <li key={item.id} style={{ textAlign: 'center' }}>
          <Avatar name={item.name} photo={item.photo} status={item.status} />
          <button
            type="button"
            onClick={handleDeleteItem(item.id)}
            style={{ marginBlockStart: 8 }}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
