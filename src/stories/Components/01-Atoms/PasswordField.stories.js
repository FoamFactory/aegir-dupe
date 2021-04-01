import React from 'react';

import { PasswordField } from '../../../';

export default {
  title: 'Components/Atoms/PasswordField',
  component: PasswordField
};

let containerStyle = {
  width: '1220px'
};

const Template = (args) => {
  return (
    <div style={containerStyle}>
    <PasswordField {...args} />
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  id: 'password-field',
  placeholder: 'Enter Password'
}
