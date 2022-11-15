import { ComponentMeta, ComponentStory } from '@storybook/react';
import { {name} } from './{name}';

export default {
  title: 'Components/{name}',
  component: {name},
} as ComponentMeta<typeof {name}>;

const Template: ComponentStory<typeof {name}> = (args) => <{name} {...args} />

export const Default = Template.bind({});