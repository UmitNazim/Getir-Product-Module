import { AtomCheckBox } from 'components';

export default {
  title: 'AtomCheckBox',
  component: AtomCheckBox,
};

const Template = (args) => <AtomCheckBox {...args} />;
export const CheckBox = Template.bind({});
CheckBox.args = {
  label: 'This is a label',
  value: false,
};
