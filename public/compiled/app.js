import { fetchBooks } from '../utils/index.js';
fetchBooks().then(function (data) {
  console.log(data);
}).catch(function (error) {
  return console.error(error.message);
});
