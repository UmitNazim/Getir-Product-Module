import { AtomLoader } from 'components';
import { colors } from './_shared/';

export default {
  title: 'AtomLoader',
  component: AtomLoader,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },

    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

const Template = (args) => <AtomLoader {...args} />;
export const Loader = Template.bind({});
Loader.args = {
  color: 'ball-blue',
  size: 'sm',
};
