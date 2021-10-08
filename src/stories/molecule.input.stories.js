import { MoleculeSearchInput } from 'components';

export default {
  title: 'MoleculeSearchInput',
  component: MoleculeSearchInput,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
    },
  },
};

const Template = (args) => <MoleculeSearchInput {...args} />;
export const Input = Template.bind({});
Input.args = {
  placeholder: 'Enter Name',
  label: 'Name',
  disabled: false,
  type: 'text',
};
