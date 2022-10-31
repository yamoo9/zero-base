import { Headline } from './Headline.js';
import { ReactLogo } from './ReactLogo.js';
export function App() {
  return React.createElement("div", {
    className: "App"
  }, React.createElement(Headline, null, "React"), React.createElement(Headline, null, "Vue"), React.createElement(Headline, null, "Svelte"), React.createElement(Headline, null, "Solid"), React.createElement(ReactLogo, null, "React Logo"));
}
//# sourceMappingURL=App.js.map