import { addClass, removeClass } from '../classList.js';

describe('dom 유틸리티', () => {
  beforeAll(() => {
    document.body.innerHTML = /* html */ `
      <div class="app">
        <h1 class="headline">Jest 테스트 러너</h1>
      </div>
    `;
  });

  test('app 요소에 addClass("app__container app--fixed") 설정', () => {
    const app = document.querySelector('.app');
    let classes = 'app__container app--fixed'.split(' ');

    addClass(app, ...classes);

    classes.forEach((className) => expect(app).toHaveClass(className));
  });

  test('app 제목 요소에 removeClass("headline") 설정', () => {
    const appHeadline = document.querySelector('.app h1');
    let className = 'headline';

    removeClass(appHeadline, className);

    expect(appHeadline).not.toHaveClass(className);
  });
});
