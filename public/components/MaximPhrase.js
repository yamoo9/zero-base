export default class MaximPhrase extends HTMLParagraphElement {
  #phrase;

  connectedCallback() {
    this.innerHTML = `
      <em class="phrase"></em>
    `;

    this.phraseElemnt = this.querySelector('.phrase');
  }

  get phrase() {
    return this.#phrase;
  }

  set phrase(newPhrase) {
    this.#phrase = newPhrase;
    this.phraseElemnt.textContent = this.phrase;
  }
}

customElements.define('maxim-phrase', MaximPhrase, { extends: 'p' });
