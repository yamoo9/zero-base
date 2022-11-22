// 값 증가
// 값 초기화
// 값 감소

// 노트 생성
// 노트 편집
// 노트 읽기
// 노트 삭제

// 액션(사용자의 요구사항 전달을 위한 명세서(객체))
// const action = { type, payload? }

export const initCountVaue = 0;

const INCREMENT_COUNT = 'counter/increment';
const DECREMENT_COUNT = 'counter/decrement';
const RESET_COUNT = 'counter/reset';

// export const COUNTER_ACTIONS = {
//   INCREMENT_COUNT: 'counter/increment',
//   DECREMENT_COUNT: 'counter/decrement',
// };

export const incrementCount = (payload) => ({
  type: INCREMENT_COUNT,
  payload,
});

export const decrementCount = (payload) => ({
  type: DECREMENT_COUNT,
  payload,
});

export const resetCount = (payload) => ({
  type: RESET_COUNT,
  payload,
});

export function counterReducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
    case DECREMENT_COUNT:
      return state + action.payload;
    default:
      return initCountVaue;
  }
}
