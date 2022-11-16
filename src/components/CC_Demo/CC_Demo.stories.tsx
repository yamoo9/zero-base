import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CC_Demo } from './CC_Demo';

export default {
  title: 'Demo / CC_Demo',
  component: CC_Demo,
} as ComponentMeta<typeof CC_Demo>;

export const Default: ComponentStory<typeof CC_Demo> = (args) => (
  <CC_Demo {...args} />
);
Default.args = {
  endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
};
