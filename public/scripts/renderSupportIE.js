import SupportIE from '../components/SupportIE.js';

async function renderSupportIE() {
  await customElements.whenDefined('support-ie');
  const supportIE = document.createElement('support-ie');
  document.body.insertAdjacentElement('afterbegin', supportIE);
}

export default renderSupportIE;
