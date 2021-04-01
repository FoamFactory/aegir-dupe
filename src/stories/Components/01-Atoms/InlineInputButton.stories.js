import React from 'react';

import { InlineInputButton } from '../../../';

export default {
  title: 'Components/Atoms/InlineInputButton',
  component: InlineInputButton
};

const Template = (args) => <InlineInputButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'e.g. british',
  actionLabel: 'Search'
};
