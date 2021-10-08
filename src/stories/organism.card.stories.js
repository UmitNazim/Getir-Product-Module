import { OrganismCard } from 'components';
import { colors } from './_shared';

export default {
  title: 'OrganismCard',
  component: OrganismCard,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
  },
};

const Template = (args) => <OrganismCard {...args} />;
export const Card = Template.bind({});
Card.args = {
  children: 'This is a card',
  title: null,
  color: 'ball-blue',
  shadow: false,
  hover: false,
  flat: false,
  noPadding: false,
};
