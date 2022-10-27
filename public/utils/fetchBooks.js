// `/api/books.json` 모듈을 불러와 booksApi 이름으로 사용합니다.
// import('../api/books.json', { assert: { type: 'json' } });
import booksApi from '../api/books.json' assert { type: 'json' };

export const fetchBooks = (timeout = 1000, shouldReject = false) => {
  // Promise 객체를 생성 반환합니다.
  return new Promise((resolve, reject) => {
    // timeout 초가 흐른 뒤, Promise.resolve, Promise.reject가 작동하도록 설정합니다.
    setTimeout(() => {
      // shouldReject 값에 따라 오류 객체를 전송하거나,
      if (!shouldReject) {
        // booksApi.data 값을 전송합니다.
        resolve(booksApi.data);
      } else {
        reject({ message: 'UNKNOWN ERROR' });
      }
    }, timeout);
  });
};
