import React from 'react';

import { SecondaryColorDisplay } from './ColorDisplays';

export default {
  title: 'Colors/Secondary Colors',
  component: SecondaryColorDisplay,
  parameters: {
    docs: {
      description: {
        component: "The palette's secondary colors are designed to accent the colors in the primary palette and to provide visual flair in the application. These colors should be used to highlight important features on a page, such as buttons, or for visual style elements, such as illustrations. Note that these should be used sparingly so as not to draw attention to more than one piece of information at a time."
      }
    },
    status: 'stable'
  }
};

const Template = (args) => (
  <SecondaryColorDisplay />
);

export const SecondaryColors = Template.bind({});
