import { useState, useEffect, useId, useTransition } from 'react';
import styled, { css } from 'styled-components';
import { number } from 'prop-types';

import reactLogo from '@/assets/react.svg';

/* -------------------------------------------------------------------------- */

export function LearnHook({ total }) {
  const id = useId();

  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    // 컴포넌트가 마운트 될 때 results 빈 배열 설정
    if (keyword.trim().length === 0) {
      setResults([]);
    }
    // keyword 상태가 변경될 때 마다 total 갯수만큼 아이템 생성
    // 사용자가 입력할 때마다 대량의 데이터 업데이트는 긴급한 업데이트가 아님
    else {
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
        <div css={css``}>{drawRows(results)}</div>
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

export function UsingTransitionHook({ total }) {
  const id = useId();

  // useTransition 훅을 사용해 상태 저장 값, startTransition 함수를 추출
  const [isPending, startTransition] = useTransition();

  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    if (keyword.trim().length === 0) {
      setResults([]);
    } else {
      const items = Array.from(Array(total), (_, index) => {
        return { id: index, keyword };
      });
      startTransition(() => {
        setResults(items);
      });
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
          {/* isPending인 동안 값이 true인 경우 대체 UI 렌더링 */}
          {isPending ? <strong>로딩 중...</strong> : drawRows(results)}
        </div>
      </div>
    </Container>
  );
}

UsingTransitionHook.defaultProps = {
  total: 1000,
};

UsingTransitionHook.propTypes = {
  total: number,
};

/* -------------------------------------------------------------------------- */

const drawRows = (results) =>
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

const Container = styled.div``;
