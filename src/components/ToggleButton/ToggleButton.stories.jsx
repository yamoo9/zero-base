import { ToggleButton } from './ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  tags: ['docsPage'],
  args: {
    ...ToggleButton.defaultProps,
    onText: 1,
    offText: 0,
  },
};

const Template = (args) => <ToggleButton {...args} />;

export const Off = Template.bind({});

export const On = Template.bind({});
On.args = { on: true };
