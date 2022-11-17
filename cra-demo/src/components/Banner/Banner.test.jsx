import { render, screen } from '@testing-library/react';
import { Banner } from './Banner';

describe('Banner 컴포넌트', () => {
  test('Banner 컴포넌트는 정상적으로 렌더링됩니다.', () => {
    render(<Banner>테스트</Banner>);
    const element = screen.getByText(/테스트/);
    expect(element).toBeInTheDocument();
  });

  test('컴포넌트는 기본적으로 <figure> 요소로 렌더링 됩니다.', () => {
    render(<Banner />);

    const element = screen.getByRole('figure');
    expect(element.localName).toBe('figure');
  });

  test('컴포넌트의 `as` 속성(prop) 값이 "div"인 경우, <div> 요소로 렌더링 됩니다.', () => {
    render(<Banner as="div" data-testid="tester" />);

    const element = screen.getByTestId('tester');
    expect(element.localName).toBe('div');
  });

  test('컴포넌트의 `url` 속성(prop) 값은 정적 에셋(public/assets)의 이미지 경로를 반환합니다.', () => {
    let filename = 'banner.jpg';
    let expected = `url(${process.env.PUBLIC_URL}/assets/${filename})`;

    render(<Banner url={filename} />);

    const element = screen.getByRole('figure');
    expect(element.style._values['background-image']).toBe(expected);
  });

  test('컴포넌트에 `className` 속성(prop) 값이 추가된 경우, 해당 클래스 이름을 포함합니다.', () => {
    let expected = 'userDefinedClassName';
    render(<Banner className={expected} />);

    const element = screen.getByRole('figure');
    expect(element).toHaveClass('Banner', expected);
  });

  test('컴포넌트의 `width`, `height` 속성(prop) 값이 설정된 경우, 인라인 스타일로 반영됩니다.', () => {
    const expected = {
      width: '280px',
      height: '590px',
    };

    render(<Banner width={expected.width} height={expected.height} />);

    const element = screen.getByRole('figure');
    expect(element).toHaveStyle(expected);
  });

  test('컴포넌트의 `style` 속성(prop) 값이 설정된 경우, 인라인 스타일로 반영됩니다.', () => {
    const expected = {
      margin: '20px',
      width: '200px',
      height: '600px',
    };

    render(
      <Banner
        width={200}
        height={600}
        style={{
          margin: 20,
        }}
      />
    );

    const element = screen.getByRole('figure');

    expect(element).toHaveStyle(expected);
  });

  test('컴포넌트가 포함하는 자식 콘텐츠는 접근성 감춤 요건에 충족합니다.', () => {
    render(
      <Banner data-testid="tester">
        접근성 감춤 요건에 충족한 배너 콘텐츠
      </Banner>
    );
    // eslint-disable-next-line testing-library/no-node-access
    const element = screen.getByTestId('tester').firstElementChild;
    expect(element).toBeA11yHidden();
  });
});
