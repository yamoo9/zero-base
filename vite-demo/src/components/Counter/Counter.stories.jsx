import { Counter } from './Counter.stateless';

/* -------------------------------------------------------------------------- */
/* ComponentMeta                                                              */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Components/Counter',
  component: Counter,
  args: { ...Counter.defaultProps },
};

/* -------------------------------------------------------------------------- */
/* ComponentStories                                                           */
/* -------------------------------------------------------------------------- */

const Template = (args) => (
  <div style={{ background: '#ff0' }}>
    <Counter {...args} />
  </div>
);

export const Base = Template.bind({});

export const DisabledButtons = Template.bind({});
DisabledButtons.args = {
  disabledButtons: true,
};
