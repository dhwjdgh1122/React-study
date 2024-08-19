import axios from 'axios';
import { useEffect, useState } from 'react';
import { exact, string } from 'prop-types';
import S from './DataFetching.module.css';

const ENDPOINT = '//yamoo9.pockethost.io/api/collections/olive_oil/records';

function DataFetching() {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const fetchOliveOil = async () => {
      try {
        const response = await axios.get(ENDPOINT, {
          signal: abortController.signal,
        });

        setState((prevState) => ({
          ...prevState,
          data: response.data,
          isLoading: false,
        }));
      } catch (error) {
        if (error.name !== 'CanceledError') {
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
      <span style={{ fontWeight: 500, color: 'red' }}>{error.message}</span>
    </p>
  );
}

export default DataFetching;
