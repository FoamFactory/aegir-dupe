import React from 'react';

import { SubPhase } from '../../../';

export default {
  title: 'Components/Molecules/SubPhase',
  component: SubPhase,
  argTypes: {
    name: { control: 'text' },
    steps: { control: 'array' },
    time: { control: 'number' },
    timeUnit: {
      control: {
        type: 'select',
        options: [
          'hours',
          'days',
          'weeks',
          'months',
          'years'
        ]
      }
    }
  }
};

const Template = (args) => <SubPhase {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Acquisition',
  steps: [
    "Purchase ingredients",
    "Transfer ingredients to warehouse"
  ],
  time: 2,
  timeUnit: 'hours'
};
