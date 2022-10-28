const template = document.createElement('template');

template.innerHTML = `
  <style>
    @import "${new URL('style.css', import.meta.url)}";
  </style>
  <em class="phrase" part="emphasis"></em>
`;

export default template;
