/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import { exact, string } from 'prop-types';
import S from './DataFetching.module.css';

const ENDPOINT = '//yamoo9.pockethost.io/api/collections/olive_oil/records';

function DataFetching() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [data, setData] = useState(null);

  const [state, setState] = useState({
    isLoading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    // API 1
    // setState(nextState);
    // setState({ ...state, key: value });

    // setIsLoading(true);

    // API 2
    // setState((previousState) => nextState);
    // setState((prevState) => ({ ...prevState, key: value }));

    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const fetchOliveOil = async () => {
      try {
        const response = await fetch(ENDPOINT, {
          signal: abortController.signal,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        // setData(responseData);
        // setIsLoading(false);
        // setState({
        //   ...state,
        //   data: responseData,
        //   isLoading: false,
        // });

        setState((prevState) => ({
          ...prevState,
          data: responseData,
          isLoading: false,
        }));
      } catch (error) {
        if (!(error instanceof DOMException)) {
          // setError(error);
          // setIsLoading(false);
          // setState({
          //   ...state,
          //   error,
          //   isLoading: false,
          // });

          setState((prevState) => ({
            ...prevState,
            error,
            isLoading: false,
          }));
        }
      }
    };

    fetchOliveOil();

    return () => {
      abortController.abort();
    };
  }, []);

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
      <span style={{ fontWeight: 500, color: 'red' }}>"{error.message}"</span>
    </p>
  );
}

export default DataFetching;
