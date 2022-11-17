import { Headline } from './Headline';

export default {
  title: 'Components/Headline',
  component: Headline,
  args: {
    children: 'Storybook is Awesome! 😃',
  },
  argTypes: {
    lv: {
      control: {
        type: 'inline-radio',
        options: [1, 2, 3, 4, 5, 6],
      },
    },
  },
};

const Template = (args) => <Headline {...args} />;

export const Default = Template.bind({});

export const Level3 = Template.bind({});
Level3.args = {
  lv: 3,
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  lv: 1,
  className: 'wow-storybook',
};
