import React from 'react';

import { SubPhase, SchedulePhase } from '../../../';

export default {
  title: 'Components/Cells/SchedulePhase',
  component: SchedulePhase
};


const Template = (args) => (<SchedulePhase {...args}>
  <SubPhase
    name="Acquisition"
    steps={[
      "Purchase ingredients",
      "Transfer ingredients to base"
    ]}
    time="12"
    timeUnit="hours"
  />
  <SubPhase
    name="World Domination"
    steps={[
      "Take over the world"
    ]}
    time="2"
    timeUnit="days"
  />
</SchedulePhase>);

export const Default = Template.bind({});
Default.args = {
  phaseName: 'Prep'
};
