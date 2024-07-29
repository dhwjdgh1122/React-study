import React from 'https://esm.sh/react';


// 컴포넌트 추출

// 컴포넌트란? 재사용 메커니즘(클래스 또는 함수)을 사용해 리액트 엘리먼트를 반환하는 것을 말합니다.

// 1. 리액트 클래스 컴포넌트 (재사용)
// 리액트 컴포넌트는 반드시 파스칼케이스(ParcalCase) 유형으로 이름으로 작성
// 웹 컴포넌트 반드시 이름을 케밥케이스 유형으로 작성 (예: <euid-list>)
class NumberList extends React.Component {
  // 컨스트럭터(construcgtor)
  // constructor(props/* 컴포넌트 속성 */) {
  //   // 반드시 [ super ] 실행이 필요함.
  //   super(props);

  //   // 암묵적으로 클래스로부터 생성된 인스턴스
  //   // return this;

  //   // 상태 설정
  //   // this 이벤트 바인딩
  // }
  
  // 렌더(render) 메서드 (인스턴스 공용)
  render() {

    // 컴포넌트 속성(props) 접근
    // props는 읽기 전용(readonly)
    // console.log(this.props); // { id, count }

    // 컴포넌트의 자식들은 배열이다.
    const children = Array(this.props.count).fill(null).map((_, index) => 
      React.createElement('li', {}, `${index + 1}01`)
    );

    // 리액트 엘리먼트 반환
    return React.createElement(
      'ul', 
      { id: this.props.id, className: 'architectures', lang: 'en' }, 
      children
    );
  }
}

export default NumberList;





// 리액트 월드에서 컴포넌트를 사용해 리액트 엘리먼트를 생성하려면?
// 별칭 h === React.createElement(컴포넌트_참조)
// const list1 = h(NumberList, { id: 'number-1', count: 3 });
// const list2 = h(NumberList, { id: 'number-2', count: 5 });
// const list3 = h(NumberList, { id: 'number-3', count: 11 });