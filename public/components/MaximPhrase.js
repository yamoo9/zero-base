export default class MaximPhrase extends HTMLParagraphElement {
  #phrase;
  #phraseElement;

  connectedCallback() {
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
