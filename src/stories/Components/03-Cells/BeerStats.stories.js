import React from 'react';

import { BeerStats } from '../../../';

export default {
  title: 'Components/Cells/BeerStats',
  component: BeerStats
};

const Template = (args) => <BeerStats {...args} />;

export const Default = Template.bind({});
Default.args = {
  beerStyle: "bjcp-13b",
  originalGravity: "1.052",
  finalGravity: "1.014",
  srm: "21.44",
  ibu: "27.18"
};
