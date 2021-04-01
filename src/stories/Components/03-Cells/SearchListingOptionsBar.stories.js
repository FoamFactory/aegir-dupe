import React from 'react';

import { SearchListingOptionsBar } from '../../../';

export default {
  title: 'Components/Cells/SearchListingOptionsBar',
  component: SearchListingOptionsBar
};

let searchListingStoryStyle = {
  width: '100%',
  minHeight: '5em'
};

const Template = (args) => (
  <div style={searchListingStoryStyle} >
    <SearchListingOptionsBar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  activeButton: 'grid'
};
