import { BinaryCalcurator } from './BinaryCalcurator';

/** @type {import('@storybook/react').Meta} */
export default {
  title: 'Components/BinaryCalcurator',
  component: BinaryCalcurator,
};

export const Default = (args) => <BinaryCalcurator {...args} />;
Default.args = {
  numberOfButtons: 6,
};
