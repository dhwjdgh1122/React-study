import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { exact, string } from 'prop-types';
import S from './DataFetching.module.css';

const ENDPOINT = '//yamoo9.pockethost.io/api/collections/olive_oil/records';

function DataFetching() {
  const [state, setState] = useImmer({
    keyPoint: '상태가 복잡해지면 관리도 덩달아 어려워진다.',
    stateData: {
      one: {
        isLoading: false,
        error: null,
        data: null,
      },
    },
    two: {
      three: {
        four: {
          five: 'deep state object',
        },
      },
    },
  });

  useEffect(() => {
    const abortController = new AbortController();

    // useImmer 관리 코드
    setState((draft) => {
      draft.stateData.one.isLoading = true;
    });

    // useState 관리 코드
    // setState((prevState) => ({
    //   ...prevState,
    //   stateData: {
    //     ...prevState.stateData,
    //     one: {
    //       ...prevState.stateData.one,
    //       isLoading: true,
    //     },
    //   },
    // }));

    const fetchOliveOil = async () => {
      try {
        const response = await fetch(ENDPOINT, {
          signal: abortController.signal,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        // useImmer 관리 코드
        setState((draft) => {
          draft.stateData.one.data = responseData;
          draft.stateData.one.isLoading = false;
        });

        // useState 관리 코드
        // setState((prevState) => ({
        //   ...prevState,
        //   stateData: {
        //     ...prevState.stateData,
        //     one: {
        //       ...prevState.stateData.one,
        //       data: responseData,
        //       isLoading: false,
        //     },
        //   },
        // }));
      } catch (error) {
        if (!(error instanceof DOMException)) {
          // useImmer 관리 코드
          setState((draft) => {
            draft.stateData.one.error = error;
            draft.stateData.one.isLoading = false;
          });

          // useState 관리 코드
          // setState((prevState) => ({
          //   ...prevState,
          //   stateData: {
          //     ...prevState.stateData,
          //     one: {
          //       ...prevState.stateData.one,
          //       error,
          //       isLoading: false,
          //     },
          //   },
          // }));
        }
      }
    };

    fetchOliveOil();

    return () => {
      abortController.abort();
    };
  }, [setState]);

  if (state.stateData.one.isLoading) {
    return <LoadingMessage />;
  }

  if (state.stateData.one.error) {
    return <PrintError error={state.stateData.one.error} />;
  }

  return (
    <div className={S.component}>
      <ul>
        {state.stateData.one.data?.items.map?.((item) => (
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
