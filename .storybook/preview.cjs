import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import globalDecorators from './decorators';
import ko from 'axe-core/locales/ko.json';

export const parameters = {
  theme: 'light',
  layout: 'padded',
  actions: { argTypesRegex: '^on[A-Z].*' },
  a11y: { config: { locale: ko } },
  viewport: {
    viewports: {
      MacbookPro16_2019: {
        name: 'Macbook Pro 16inch (2019)',
        styles: {
          width: '1536px',
          height: '960px',
        },
      },
      GalaxyNote20: {
        name: 'Galaxy Note 20',
        styles: {
          width: '600px',
          height: '270px',
        },
      },
      ...INITIAL_VIEWPORTS,
    },
    // defaultViewport: 'iphone6',
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = globalDecorators;

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: '컴포넌트 글로벌 테마',
    defaultValue: 'theme',
    toolbar: {
      icon: 'contrast',
      // 일반 문자열 값 또는 MenuItem 모양의 배열
      items: ['light', 'dark'],
      // 항목의 이름을 표시할지 여부를 지정하는 속성
      showName: true,
      // 선택한 값에 따라 제목 변경
      dynamicTitle: true,
    },
  },
};
