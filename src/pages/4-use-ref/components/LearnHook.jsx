import { useEffect, useRef } from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export function LearnHook(props) {
  // 이전 props와 현재 props를 비교할 목적으로
  // useRef 훅을 사용할 수 있다.
  const prevPropsRef = useRef({});

  useEffect(() => {
    if (prevPropsRef.current !== props) {
      console.log('이전 props와 현재 props는 다릅니다.');
    } else {
      console.log('이전 props와 현재 props는 같습니다.');
    }

    console.log({
      prev: JSON.stringify(prevPropsRef.current),
      current: JSON.stringify(props),
    });

    prevPropsRef.current = props;
  }, [props]);

  // 클릭 이벤트 핸들러를 실행했을 때
  // 이전 props 객체, 현재 props 객체에 접근/비교

  const mountedRef = useRef(false); // { current: false }

  // console.log('initial mounted value: ', mountedRef.current);

  useEffect(() => {
    mountedRef.current = true;
    // console.log('mounted value', mountedRef.current);
  }, []);

  // dom ref
  // 문서 객체 접근/조작
  const ref = useRef(null);
  // memory value
  // 클래스 컴포넌트의 인스턴스 멤버처럼
  // 함수 컴포넌트 내에서 특정 값을 기억하되,
  // 값을 변경해도 컴포넌트 렌더링에 영향을 주지 않아야 할 경우 사용한다.
  const memoryRef = useRef(0);

  // side effects #1. DOM 요소 접근/조작
  useEffect(() => {
    ref.current.style.padding = '20px';
    ref.current.style.border = '3px solid currentColor';
  }, []);

  // console.log('#update');

  return (
    <Container ref={ref}>
      <button
        onClick={() => {
          memoryRef.current = memoryRef.current + 2;
          console.log(memoryRef.current);
        }}
      >
        update useRef.current value
      </button>

      <div>
        <output>{memoryRef.current}</output>
      </div>
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.div``;
