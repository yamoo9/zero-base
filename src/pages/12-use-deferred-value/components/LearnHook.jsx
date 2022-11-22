/* eslint-disable no-unused-vars */

import { useState, useEffect, useId, useDeferredValue } from 'react';
import styled, { css } from 'styled-components';
import { number } from 'prop-types';

import reactLogo from '@/assets/react.svg';

/* -------------------------------------------------------------------------- */

export function LearnHook({ total }) {
  const id = useId();

  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    if (keyword.trim().length === 0) {
      setResults([]);
    } else {
      const items = Array.from(Array(total), (_, index) => {
        return { id: index, keyword };
      });
      setResults(items);
    }
  }, [keyword, total]);

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Container>
      <div
        css={css`
          width: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-flow: column;
            gap: 4px;

            input {
              border: 3px solid currentColor;
              border-radius: 6px;
              padding: 0.3em 0.6em;
              color: ${({ theme: { color } }) => color.primary[500]};
            }
          `}
        >
          <label htmlFor={id}>키워드</label>
          <input id={id} type="text" value={keyword} onChange={handleChange} />
        </div>
        <div css={css``}>
          <DrawRows results={results} />
        </div>
      </div>
    </Container>
  );
}

LearnHook.defaultProps = {
  total: 1000,
};

LearnHook.propTypes = {
  total: number,
};

/* -------------------------------------------------------------------------- */

export function UsingDeferredValueHook({ total }) {
  const id = useId();

  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    if (keyword.trim().length === 0) {
      setResults([]);
    } else {
      const items = Array.from(Array(total), (_, index) => {
        return { id: index, keyword };
      });
      setResults(items);
    }
  }, [keyword, total]);

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Container>
      <div
        css={css`
          width: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-flow: column;
            gap: 4px;

            input {
              border: 3px solid currentColor;
              border-radius: 6px;
              padding: 0.3em 0.6em;
              color: ${({ theme: { color } }) => color.primary[500]};
            }
          `}
        >
          <label htmlFor={id}>키워드</label>
          <input id={id} type="text" value={keyword} onChange={handleChange} />
        </div>
        <div css={css``}>
          <DrawRowsDeferredValue results={results} />
        </div>
      </div>
    </Container>
  );
}

UsingDeferredValueHook.defaultProps = {
  total: 1000,
};

UsingDeferredValueHook.propTypes = {
  total: number,
};

/* -------------------------------------------------------------------------- */

const DrawRows = ({ results }) =>
  results.map((item) => (
    <div
      key={item.id}
      css={css`
        display: flex;
        flex-flow: column;
        gap: 12px;
        margin-top: 24px;

        strong {
          font-size: 1.3rem;
        }
      `}
    >
      <strong>{item.id}</strong>
      <em>
        {item.keyword} → {item.id}
      </em>
      <img
        src={reactLogo}
        alt={`React Logo ${item.id}`}
        css={css`
          width: 40px;
        `}
      />
    </div>
  ));

/* -------------------------------------------------------------------------- */

const DrawRowsDeferredValue = ({ results }) => {
  const deferredValue = useDeferredValue(results);

  return deferredValue.map((item) => (
    <div
      key={item.id}
      css={css`
        display: flex;
        flex-flow: column;
        gap: 12px;
        margin-top: 24px;

        strong {
          font-size: 1.3rem;
        }
      `}
    >
      <strong>{item.id}</strong>
      <em>
        {item.keyword} → {item.id}
      </em>
      <img
        src={reactLogo}
        alt={`React Logo ${item.id}`}
        css={css`
          width: 40px;
        `}
      />
    </div>
  ));
};

/* -------------------------------------------------------------------------- */

const Container = styled.div``;
