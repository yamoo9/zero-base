import favicon from '../public/meta-favicon.png';

const link = document.createElement('link');
link.setAttribute('rel', 'icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);
