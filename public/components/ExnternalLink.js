export default class ExternalLink extends HTMLAnchorElement {
  constructor() {
    super();
    let href = this.getAttribute('href');

    if (href.startsWith('http')) {
      this.setAttribute('target', '_blank');
      this.setAttribute('rel', 'noopener noreferrer');
    }
  }
}

customElements.define('external-link', ExternalLink, { extends: 'a' });
