export default function renderShadowContainer(
  template,
  willMountElement = document.body
) {
  const container = document.createElement('div');
  container.classList.add('container');
  container.attachShadow({ mode: 'open' });
  container.shadowRoot.innerHTML =
    template ??
    `
    <style>
      header, main, footer {
        border: 3px solid rgba(0 0 0 / 20%);
        padding: 20px;
      }
    </style>
    <header>헤더 콘텐츠</header>
    <main>메인 콘텐츠</main>
    <footer>푸터 콘텐츠</footer>
  `;
  willMountElement.append(container);
}
