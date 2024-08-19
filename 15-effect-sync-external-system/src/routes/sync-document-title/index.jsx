import Counter from './components/Counter';

function SyncDocumentTitle() {
  return (
    <main id="page">
      <h1 className="headline">문서 제목 동기화</h1>

      <div className="description">
        <p>
          이펙트(Effects)는 리액트 컴포넌트와 외부 시스템을 동기화 할 때
          사용합니다.
        </p>
        <p>
          문서의 제목은 리액트 시스템을 벗어난, 실제 DOM의 시스템의 일부입니다.
        </p>
        <p>
          이펙트를 사용해 리액트 시스템 내부에서 외부의 시스템을 동기화
          해봅니다.
        </p>
      </div>

      <Counter />
    </main>
  );
}

export default SyncDocumentTitle;
