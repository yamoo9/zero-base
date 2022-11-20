import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    ...Avatar.defaultProps,
    src: 'https://bit.ly/3EneVgU',
    alt: 'Turning Red',
    size: 64,
  },
  argTypes: {
    src: {
      description: '아바타 이미지 URL',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'srting',
          detail: '유효한 웹 리소스 URL',
        },
      },
    },
    alt: {
      description: '아바타 이미지 대체 텍스트',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'srting',
          detail: '적절한 이미지 설명이 요구 됨',
        },
      },
    },
    size: {
      description: '아바타 이미지 크기',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: Avatar.defaultProps.size,
        },
      },
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
