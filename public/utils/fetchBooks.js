// `/api/books.json` 모듈을 불러와 booksApi 이름으로 사용합니다.
// import('../api/books.json', { assert: { type: 'json' } });

// import fetch from 'node-fetch';
import booksApi from '../api/books.json' assert { type: 'json' };

export const fetchBooksPromise = (timeout = 1000, shouldReject = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject({ message: 'UNKNOWN ERROR' });
      } else {
        resolve(booksApi.data);
      }
    }, timeout);
  });
};

export const fetchBooks = (endpoint = '/api/books.json') => {
  return fetch(endpoint)
    .then((response) => response.json())
    .catch(() => ({ message: 'UNKNOWN ERROR' }));
};
