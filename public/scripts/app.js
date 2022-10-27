import { fetchBooks } from '../utils/index.js';

fetchBooks()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error.message));
