import { ToggleButton } from './ToggleButton';

/* -------------------------------------------------------------------------- */
/* META                                                                       */
/* -------------------------------------------------------------------------- */

/** @type {import('@storybook/react').Meta} */
export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '활성/비활성 상태를 표현하는 토글 버튼 컴포넌트',
      },
    },
  },
  args: {
    ...ToggleButton.defaultProps,
    onText: 1,
    offText: 0,
  },
};

/* -------------------------------------------------------------------------- */
/* STORY                                                                      */
/* -------------------------------------------------------------------------- */

const Template = (args) => <ToggleButton {...args} />;

/* -------------------------------------------------------------------------- */

export const OffButton = Template.bind({});
OffButton.parameters = {
  docs: {
    description: {
      story: '비활성 상태의 토글 버튼',
    },
  },
};

/* -------------------------------------------------------------------------- */

export const OnButton = Template.bind({});
OnButton.args = { on: true };
OnButton.parameters = {
  docs: {
    description: {
      story: '활성 상태의 토글 버튼',
    },
  },
};

/* -------------------------------------------------------------------------- */

export const DarkOnButton = Template.bind({});
DarkOnButton.parameters = {
  theme: 'dark',
  docs: {
    description: {
      story: '다크 모드 → 비활성 상태의 토글 버튼',
    },
  },
};

/* -------------------------------------------------------------------------- */

export const DarkOffButton = Template.bind({});
DarkOffButton.args = { on: true };
DarkOffButton.parameters = {
  theme: 'dark',
  docs: {
    description: {
      story: '다크 모드 → 활성 상태의 토글 버튼',
    },
  },
};
