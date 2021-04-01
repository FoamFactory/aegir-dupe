import React from 'react';

import { PrimaryColorDisplay } from './ColorDisplays';

export default {
  title: 'Colors/Primary Colors',
  component: PrimaryColorDisplay,
  parameters: {
    docs: {
      description: {
        component: "The palette's primary colors are a golden yellow, a brown, and a coppery orange-red. The colors are meant to signify beer, its different hues within the glass, and the components used to create beer (grain, hops, water, and yeast)."
      }
    },
    status: 'stable'
  }
};

const Template = (args) => (
  <PrimaryColorDisplay />
);

export const PrimaryColors = Template.bind({});
