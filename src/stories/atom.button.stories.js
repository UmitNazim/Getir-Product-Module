import { AtomButton } from 'components';
import { colors } from './_shared/';

export default {
  title: 'AtomButton',
  component: AtomButton,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
    bgColor: {
      control: { type: 'select' },
      options: colors,
    },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

const Template = (args) => <AtomButton {...args} />;
export const Button = Template.bind({});
Button.args = {
  children: 'Button',
  color: 'seas-hell',
  bgColor: 'terra-cotta',
  size: 'sm',
  block: false,
  disabled: false,
  flat: false,
  type: 'button',
};
