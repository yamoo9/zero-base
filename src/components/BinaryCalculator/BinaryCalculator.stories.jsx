import { BinaryCalculator } from './BinaryCalculator';

/* -------------------------------------------------------------------------- */
/* META                                                                       */
/* -------------------------------------------------------------------------- */

/** @type {import('@storybook/react').Meta} */
export default {
  title: 'Components/BinaryCalculator',
  component: BinaryCalculator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '이진(Binary) 계산 컴포넌트',
      },
    },
  },
  argTypes: {
    numberOfButtons: {
      description: '렌더링 할 버튼 갯수',
    },
  },
};

/* -------------------------------------------------------------------------- */
/* STORIES                                                                    */
/* -------------------------------------------------------------------------- */

const Template = (args) => <BinaryCalculator {...args} />;

/* -------------------------------------------------------------------------- */

export const setNumberOfButtons = Template.bind({});
setNumberOfButtons.args = {
  numberOfButtons: 2,
};
setNumberOfButtons.argTypes = {
  numberOfButtons: {
    control: {
      type: 'range',
      min: 1,
      max: 9,
    },
  },
};
setNumberOfButtons.parameters = {
  docs: {
    description: {
      story: '숫자 값으로 버튼 갯수와 상태(모두 `false`) 설정',
    },
  },
};

/* -------------------------------------------------------------------------- */

export const setArrayOfButtons = Template.bind({});
setArrayOfButtons.args = {
  numberOfButtons: [true, false, false, false],
};
setArrayOfButtons.parameters = {
  docs: {
    description: {
      story: '배열 값으로 버튼 갯수와 활성/비활성 상태 설정',
    },
  },
};

/* -------------------------------------------------------------------------- */

export const DarkSetNumberOfButtons = Template.bind({});
DarkSetNumberOfButtons.args = {
  numberOfButtons: 5,
};
DarkSetNumberOfButtons.argTypes = {
  ...setNumberOfButtons.argTypes,
};
DarkSetNumberOfButtons.parameters = {
  theme: 'dark',
  docs: {
    description: {
      story: '다크 모드: 숫자 값으로 버튼 갯수와 상태(모두 `false`) 설정',
    },
  },
};

/* -------------------------------------------------------------------------- */

export const DarkSetArrayOfButtons = Template.bind({});
DarkSetArrayOfButtons.args = {
  numberOfButtons: [true, false, true, true, false],
};
DarkSetArrayOfButtons.parameters = {
  ...DarkSetNumberOfButtons.parameters,
  docs: {
    description: {
      story: '다크 모드: 배열 값으로 버튼 갯수와 활성/비활성 상태 설정',
    },
  },
};
