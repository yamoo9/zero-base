// ---------------------------------------------------------------------
// TODO
// ---------------------------------------------------------------------
// - [ ] 첫번째 전달인자 콜백 함수가 반복 횟수만큼 실행되어야 한다.
// - [ ] 반복 횟수는 2번째 전달인자로 설정 가능하다.
// - [x] 반복 횟수의 기본값은 10회이다.

export const repeat = (callback, repeatCount = 10) => {
  if (typeof callback !== 'function') {
    throw new TypeError('첫번째 인자인 callback의 유형은 함수여야 합니다.');
  }
  Array(repeatCount).fill(null).forEach(callback);
};
