export default class MaximPhrase extends HTMLParagraphElement {
  #phrase;
  // #phraseElemnt;

  connectedCallback() {
    this.innerHTML = `
      <em class="phrase"></em>
    `;

    this.phraseElement = this.querySelector('.phrase');
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
    this.phraseElement.textContent = this.phrase;
  }
}

customElements.define('maxim-phrase', MaximPhrase, { extends: 'p' });
