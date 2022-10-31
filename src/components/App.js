import { Headline } from './Headline.js';
import { ReactLogo } from './ReactLogo.js';

export function App() {
  return (
    <div className="App">
      <Headline>React</Headline>
      <Headline>Vue</Headline>
      <Headline>Svelte</Headline>
      <Headline>Solid</Headline>
      <ReactLogo>React Logo</ReactLogo>
    </div>
  );
}
