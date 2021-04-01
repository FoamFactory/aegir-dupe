import React from 'react';

import { AuthorsBlock } from '../../../';

export default {
  title: 'Components/Cells/AuthorsBlock',
  component: AuthorsBlock
};

const Template = (args) => <AuthorsBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  authors: [
    {
     "imageUrl": "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png"
   },
   {
     "imageUrl": "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png"
   },
   {
     "imageUrl": "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png"
   }]
};
