import React from 'react';

import { RibbonArrow } from '../../../';

export default {
  title: 'Components/Molecules/RibbonArrow',
  component: RibbonArrow,
  argTypes: {
    phase: { control: 'text' },
    timeline: { control: 'text' }
  }
};

const twoHundredPixelWidthContainer = {
    width: '200px'
};

export const Default = (args) => (
  <div style={twoHundredPixelWidthContainer}>
    <RibbonArrow {...args} />
  </div>
);

Default.args = {
  phase: "Prep",
  timeline: "2 hours"
};
