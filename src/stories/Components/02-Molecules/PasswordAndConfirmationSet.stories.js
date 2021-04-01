
import React from 'react';

import { PasswordAndConfirmationSet } from '../../../';

export default {
  title: 'Components/Molecules/PasswordAndConfirmationSet',
  component: PasswordAndConfirmationSet,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' }
  }
};

let constrainedWidthContainer = {
  width: '80vw'
};

const Template = (args) => {
  return (
    <div style={constrainedWidthContainer}>
      <PasswordAndConfirmationSet {...args} />
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  label: 'Change Password',
  description: 'Changing your password will log you out of FoamFactory'
};
