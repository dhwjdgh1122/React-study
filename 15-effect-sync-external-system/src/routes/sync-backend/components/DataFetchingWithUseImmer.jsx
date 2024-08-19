import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { exact, string } from 'prop-types';
import S from './DataFetching.module.css';

const ENDPOINT = '//yamoo9.pockethost.io/api/collections/olive_oil/records';

function DataFetching() {
  const [state, setState] = useImmer({
    isLoading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    setState((draft) => {
      draft.isLoading = true;
    });

    const fetchOliveOil = async () => {
      try {
        const response = await fetch(ENDPOINT, {
          signal: abortController.signal,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setState((draft) => {
          draft.data = responseData;
          draft.isLoading = false;
        });
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setState((draft) => {
            draft.error = error;
            draft.isLoading = false;
          });
        }
      }
    };

    fetchOliveOil();

    return () => {
      abortController.abort();
    };
  }, [setState]);

  if (state.isLoading) {
    return <LoadingMessage />;
  }

  if (state.error) {
    return <PrintError error={state.error} />;
  }

  return (
    <div className={S.component}>
      <ul>
        {state.data?.items.map?.((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function LoadingMessage() {
  return <p>데이터 로딩 중...</p>;
}

PrintError.propTypes = {
  error: exact({
    message: string.isRequired,
  }).isRequired,
};

function PrintError({ error }) {
  return (
    <p role="alert">
      오류 발생!{' '}
      <span style={{ fontWeight: 500, color: 'red' }}>{error.message}</span>
    </p>
  );
}

export default DataFetching;
