import { HomeLink } from './HomeLink';

export default {
  title: 'Components/HomeLink',
  component: HomeLink,
  args: {
    ...HomeLink.defaultProps,
  },
  argTypes: {
    size: {
      description: '홈 링크 아이콘 크기',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: HomeLink.defaultProps.size,
        },
      },
      control: {
        type: 'range',
        min: 24,
        max: 512,
      },
    },
    color: {
      description: '홈 링크 아이콘 색상',
      table: {
        type: {
          summary: 'color',
          detail: '유효한 CSS 컬러 값',
        },
        defaultValue: {
          summary: HomeLink.defaultProps.color,
        },
      },
    },
  },
};

export const Default = (args) => <HomeLink {...args} />;

export const CustomizeColor = (args) => <HomeLink {...args} />;
CustomizeColor.args = {
  color: '#e75192',
};
