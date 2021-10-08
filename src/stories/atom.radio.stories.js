import { AtomRadio } from 'components';

export default {
  title: 'AtomRadio',
  component: AtomRadio,
};

const Template = (args) => <AtomRadio {...args} />;
export const Radio = Template.bind({});
Radio.args = {
  label: 'This is a label',
  value: false,
};
