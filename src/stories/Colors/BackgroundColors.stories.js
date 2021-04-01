import React from 'react';

import { BackgroundColorDisplay } from './ColorDisplays';

export default {
  title: 'Colors/Background Colors',
  component: BackgroundColorDisplay,
  parameters: {
    docs: {
      description: {
        component: "Background colors should provide a high level of contrast with the content on the page. White is the default background color, just since it is easiest to work with as a background. Following this, the dark backgrounds can be used, but be careful with the content and how it's used in relation to the background. Gradients which combine these colors can also be used."
      }
    },
    status: 'stable'
  }
};

const Template = (args) => (
  <BackgroundColorDisplay />
);

export const BackgroundColors = Template.bind({});
