// --------------------------------------------------------------------------
// ✅ 백엔드 환경과 리액트 앱 동기화
// --------------------------------------------------------------------------

import DataFetching from './components/DataFetchingWithUseImmer';
import DataMutation from './components/DataMutation';

function SyncBackend() {
  return (
    <main id="page">
      <h1 className="headline">백엔드 환경과 동기화</h1>

      <div className="description">
        <p>리액트는 클라이언트 앱이므로 백엔드 환경과 동기화가 필요합니다.</p>
        <p>
          백엔드 환경에 요청하고, 응답받는 것은 리액트가 처리하는 일이 아닙니다.
        </p>
        <p>
          그러므로 이펙트를 사용해 백엔드 시스템과 리액트 앱을 동기화해야
          합니다.
        </p>
      </div>

      <div className="description">
        <p>
          백엔드 환경은{' '}
          <a
            href="https://pocketbase.io/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Pocketbase
          </a>{' '}
          백엔드 서비스를 활용합니다.
        </p>
        <p>
          백엔드 환경에 요청/응답하는 인터페이스는{' '}
          <a
            href="https://developer.mozilla.org/ko/docs/Web/API/Fetch_API"
            rel="noreferrer noopener"
            target="_blank"
          >
            Fetch
          </a>{' '}
          API를 사용합니다.
          <br />
          <a
            href="https://axios-http.com/kr/"
            rel="noreferrer noopener"
            target="_blank"
          >
            axios
          </a>{' '}
          라이브러리를 사용할 수강생은 axios를 활용해 실습하세요.
        </p>
      </div>

      <h2 className="headline2">실습 안내</h2>

      <div className="description">
        <p>
          수강생분들은 바닐라 프로젝트를 수행하며 유사한 UI를 구현한 경험이
          있습니다.
        </p>
        <p>
          그러니 먼저 수강생 분들이 직접 실습해 리액트 앱을 구현합니다. (1시간)
        </p>
        <p>이후 강사와 함께 실습하며 주요 개념을 정리합니다.</p>
      </div>

      <h2 className="headline2">데이터 패칭</h2>
      <p>서버에 데이터 요청/응답 (읽기)</p>
      <DataFetching />

      <h2 className="headline2">데이터 뮤테이션</h2>
      <p>서버의 데이터 변경 요청/응답 (생성/수정/삭제)</p>
      <DataMutation />
    </main>
  );
}

export default SyncBackend;
