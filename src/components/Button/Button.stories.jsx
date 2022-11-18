import { Button } from './Button';

const Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rO5CSuCoDK5z6BC5dUWUZh/SignIn-%E2%8C%81-Coupang-(Share)?node-id=1%3A117&t=q4ZCIgRyBciTEWb2-4',
    },
  },
};

export default Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
