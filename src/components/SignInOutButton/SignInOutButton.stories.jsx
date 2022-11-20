import { SignInOutButton } from './SignInOutButton';

export default {
  title: 'Components/SignInOutButton',
  component: SignInOutButton,
  args: { ...SignInOutButton.defaultProps },
  argTypes: {
    isLogin: {
      description: '로그인 여부',
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

const Template = (args) => <SignInOutButton {...args} />;

export const LogOut = Template.bind({});

export const LogIn = Template.bind({});
LogIn.args = { isLogin: true };
