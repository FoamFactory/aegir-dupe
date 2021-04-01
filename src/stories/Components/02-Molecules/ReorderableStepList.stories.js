import React from 'react';

import { ReorderableStepList } from '../../../';

export default {
  title: 'Components/Molecules/ReorderableStepList',
  component: ReorderableStepList,
  argTypes: {
    initialItems: { control: 'array' }
  }
};

const Template = (args) => <ReorderableStepList {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialItems: [
    "Purchase inventory",
    "Start Yeast",
    "Prepare hops additions"
  ]
};
