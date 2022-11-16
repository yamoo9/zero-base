import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FC_Demo } from './FC_Demo';

export default {
  title: 'Demo / FC_Demo',
  component: FC_Demo,
} as ComponentMeta<typeof FC_Demo>;

export const Default: ComponentStory<typeof FC_Demo> = (args) => (
  <FC_Demo {...args} />
);
Default.args = {
  endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
};
