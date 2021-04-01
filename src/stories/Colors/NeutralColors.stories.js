import React from 'react';

import { NeutralColorDisplay } from './ColorDisplays';

export default {
  title: 'Colors/Neutral Colors',
  component: NeutralColorDisplay,
  parameters: {
    docs: {
      description: {
        component: "These are a set of chosen neutral colors that correspond well with the background colors in the above section. While these colors aren't cognitively associated with FoamFactory, they can be used for anything so long as the contrast minimums are met."
      }
    },
    status: 'stable'
  }
};

const Template = (args) => (
  <NeutralColorDisplay />
);

export const NeutralColors = Template.bind({});
