import { AtomNoDataCard } from 'components';
import { colors } from './_shared';

export default {
  title: 'AtomNoDataCard',
  component: AtomNoDataCard,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colors,
    },
  },
};

const Template = (args) => <AtomNoDataCard {...args} />;
export const NoDataCard = Template.bind({});
NoDataCard.args = {
  description: 'This is a card',
  color: 'ball-blue',
};
