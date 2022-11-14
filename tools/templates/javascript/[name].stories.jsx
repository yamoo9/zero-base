import { {name} } from './{name}';

export default {
  title: 'Components/{name}',
  component: {name},
};

const Template = (args) => <{name} {...args} />

export const Default = Template.bind({});