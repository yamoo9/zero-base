import { getElement as $, getElements as $$ } from '../getElements.js';

describe('getElements 테스트', () => {
  beforeAll(() => {
    document.body.innerHTML = /* html */ `
      <div class="app">
        <h1 class="headline">Jest 테스트 러너</h1>
        <ul lang="en">
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

  const ELEMENT_TYPE = 1;
  let app;

  test('getElement(selector) 유틸리티는 요소 노드를 반환한다.', () => {
    app = $('.app');
    const appHeadline = $('.headline');
    expect(app.nodeType).toBe(ELEMENT_TYPE);
    expect(appHeadline.nodeType).toBe(ELEMENT_TYPE);
  });

  test('getElements(selector, context) 유틸리티는 특정 컨텍스트 요소 내부의 집합을 배열로 반환한다.', () => {
    const aList = $$('a', app);
    const liList = $$('li', app);
    const appHeadlineList = $$('.headline');
    expect(Array.isArray(liList)).toBeTruthy();
    expect(Array.isArray(aList)).not.toBeFalsy();
    expect(Array.isArray(appHeadlineList)).toBeTruthy();
  });
});
