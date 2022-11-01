import { createElement as h, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const Headline = () => h('h1', { className: 'headline' }, 'Hello React ⚛');
const App = () => h('div', { className: 'App' }, h(Headline));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(h(StrictMode, null, h(App)));
