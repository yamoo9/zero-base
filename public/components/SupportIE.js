/* Component extends HTMLElement -------------------------------------------- */

export default class SupportIE extends HTMLElement {
  // [WARNING]
  // HTMLElement를 상속받은 Custom Elements의 constructor의 실행 시점은 아직 DOM에 추가되지 않은 상태입니다.
  // 그러므로 constructor에서 어떠한 DOM 조작도 할 수 없습니다. 이 영역에서는 DOM과 무관한 것만 수행해야 합니다.

  connectedCallback() {
    this.innerHTML = `
<noscript>이 사이트를 이용하려면? 사용 중인 웹 브라우저에서 JavaScript를 활성화 해야 합니다.</noscript>

<!--[if IE]>
<div class="notice--upgrade-browser">
  <h1>서비스를 정상적으로 이용할 수 없습니다.</h1>
  <p>
    사용 중인 오래된 웹 브라우저를 사용하면 서비스를 정상적으로 이용할 수 없습니다. 안전하고 빠른 서비스 이용을 위해
    <a href="https://browsehappy.com/?locale=ko_KR" target="_blank" rel="noopener noreferrer">
      구형 웹 브라우저를 최신 브라우저로 업그레이드 하세요<span style="font-style: italic">!</span>
    </a>
  </p>
</div>
<![endif]-->
    `;
  }
}

/* define custom element ---------------------------------------------------- */

customElements.define('support-ie', SupportIE);

/* Component extends HTMLParagraphElement ----------------------------------- */
