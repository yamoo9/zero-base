import { ToggleButton } from './ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  // tags: ['docsPage'],
  parameters: {
    docs: {
      description: {
        component:
          '토글 버튼 컴포넌트\n**on** prop을 전달받아 상태를 전환하거나, **onToggle** prop에 전달된 콜백에 의해 상태가 전환됩니다.',
      },
    },
  },
  args: {
    ...ToggleButton.defaultProps,
    onText: 1,
    offText: 0,
  },
};

const Template = (args) => <ToggleButton {...args} />;

export const Off = Template.bind({});
Off.parameters = {
  docs: {
    description: {
      story: '비활성 상태의 ToggleButton 컴포넌트',
    },
  },
};

export const On = Template.bind({});
On.args = { on: true };
On.parameters = {
  docs: {
    description: {
      story: '활성 상태의 ToggleButton 컴포넌트',
    },
  },
};
