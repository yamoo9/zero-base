import { HeaderBar } from './HeaderBar';

export default {
  title: 'Containers/HeaderBar',
  component: HeaderBar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <HeaderBar {...args} />;

export const Default = Template.bind({});
