const template = document.createElement('template');
template.innerHTML = /* html */ `
  <link rel="stylesheet" href="${new URL('style.css', import.meta.url)}" />
  <div class="container">
    <slot name="header" part="header"></slot>
    <slot part="default"></slot>
    <slot name="footer" part="footer"></slot>
  </div>
`;

export default template;
