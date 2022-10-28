export default class MaximPhrase extends HTMLParagraphElement {
  #phrase;
  #phraseElement;

  // 커스텀 요소에서 connectedCallback에 구성된 DOM 코드가 attributeChangedCallback() 후에 호출되기에 발생하는 문제입니다.
  // 이 문제는 connectedCallback에 포함된 로직을 constructor로 이동하면 문제가 해결됩니다.

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        .phrase {
          font-weight: bold;
          font-size: 1.4rem;
          font-style: normal;
          color: #16697a;
        }
      </style>
      <em class="phrase"></em>
    `;

    this.#phraseElement = this.shadowRoot.querySelector('.phrase');
  }

  static get observedAttributes() {
    return ['data-phrase'];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'data-phrase') {
      this.phrase = newValue;
    }
  }

  get phrase() {
    return this.#phrase;
  }

  set phrase(newPhrase) {
    this.#phrase = newPhrase;
    this.#phraseElement.textContent = this.phrase;
  }
}

customElements.define('maxim-phrase', MaximPhrase, { extends: 'p' });
