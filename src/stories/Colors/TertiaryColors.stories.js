import React from 'react';

import { TertiaryColorDisplay } from './ColorDisplays';

export default {
  title: 'Colors/Tertiary Colors',
  component: TertiaryColorDisplay,
  parameters: {
    docs: {
      description: {
        component: "These colors are used for special circumstances, such as alerts or popups, or when there is a need for more colors than are provided for in the primary or secondary color palettes. They should never overpower the primary colors. In some cases, desaturated versions of the colors or their respective shades are used."
      }
    },
    status: 'stable'
  }
};

const Template = (args) => (
    <TertiaryColorDisplay />
);

export const TertiaryColors = Template.bind({});
