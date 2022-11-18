import { BinaryCalculator } from './BinaryCalculator';

export default {
  title: 'Components/BinaryCalculator',
  component: BinaryCalculator,
  args: {
    numberOfButtons: 2,
  },
};

const Template = (args) => <BinaryCalculator {...args} />;

export const Base = Template.bind({});

export const SetButtonState = Template.bind({});
SetButtonState.args = {
  numberOfButtons: [false, true, true],
};
