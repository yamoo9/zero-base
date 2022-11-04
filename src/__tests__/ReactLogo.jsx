import reactLogo from './react.svg';
import { render, screen } from '@testing-library/react';

console.log(reactLogo);

function ReactLogo() {
  return (
    <h1 className="ReactLogo">
      <a href="/">
        <img src="./react.svg" alt="React" />
      </a>
    </h1>
  );
}

test('ReactLogo 컴포넌트의 이미지는 대체 텍스트를 가진다.', () => {
  render(<ReactLogo />);
  const logo = screen.getByAltText('React');
  expect(logo).toHaveAccessibleName('React');
});
