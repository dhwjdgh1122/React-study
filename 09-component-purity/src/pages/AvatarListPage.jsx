// --------------------------------------------------------------------------
// ✅ 컴포넌트 로직 재구성
// --------------------------------------------------------------------------
// - [x] 데이터 분리
// - [x] 리스트 렌더링
// - [x] 컴포넌트 속성 검사
// - [x] 컴포넌트 순수성 진단
// --------------------------------------------------------------------------
import { arrayOf } from 'prop-types';
import Avatar from '@/components/Avatar';
import { UserType } from '@/@types/globals.d';

AvatarListPage.propTypes = {
  list: arrayOf(UserType).isRequired,
};

const anotherData = {
  count: 10,
};

function AvatarListPage(props) {
  // 컴포넌트 내부 공간에서의 코드 로직은
  // 동일 입력인 경우 동일 출력이 되어야 한다.

  // 배열 객체의 pop() 메서드 사용
  // 입력받은 데이터(props, 원본 데이터) - 뮤테이션(mutation, 수정)
  // 직접 수정
  // list.pop();
  // props.list.pop();

  // 외부의 데이터인 props에 의존한 파생된 데이터
  // props는 읽기 전용 데이터이므로 전달 받은 하위 컴포넌트에서 수정하면 안된다.
  const myList = [...props.list];

  // 로컬 뮤테이션 (지역 내, 수정) 허용
  // myList.pop();

  // 리액트 렌더링 프로세스와 관련 없는 코드
  // 부수 효과(side effects)
  // DOM 요소에 대한 접근/조작
  // 타이머 API 활용
  // let renderCount = 0;
  // setInterval(() => {
  //   console.log(renderCount);
  //   document.getElementById('react-app').dataset.render = ++renderCount;
  // }, 1000);

  return (
    <ul className="AvatarList">
      {myList.map((user) => (
        <li key={user.id}>
          <Avatar user={user} /> {anotherData.count++}
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
