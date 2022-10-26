import { getElement as $, getElements as $$ } from '../getElements.js';

describe('getElements 테스트', () => {
  beforeAll(() => {
    document.body.innerHTML = /* html */ `
      <div class="app">
        <h1 class="headline">Jest 테스트 러너</h1>
        <ul>
          <li>
            <a href="">one</a>
          </li>
          <li>
            <a href="">two</a>
          </li>
        </ul>
      </div>
    `;
  });

  // 사용 예시 코드
  // const app = $('.app'); // ElementNode
  // const linkList = $$('li a', app); // Array
});
