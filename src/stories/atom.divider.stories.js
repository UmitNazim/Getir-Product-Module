import { AtomDivider } from 'components';
import { colors } from './_shared/';

export default {
  title: 'AtomDivider',
  component: AtomDivider,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

const Template = (args) => <AtomDivider {...args} />;
export const Divider = Template.bind({});
Divider.args = { size: 'sm', color: 'ball-blue' };
