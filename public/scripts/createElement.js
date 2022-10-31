export function createElement(type, props = null, ...children) {
  return { type, props: { ...props, children } };
}

// createElement(
//   'h1',
//   { className: 'headline', lang: 'en' },
//   createElement('strong', null, 'React')
// );
