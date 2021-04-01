import React from 'react';

import { HexagonalAvatarPack } from '../../../';

export default {
  title: 'Components/Molecules/HexagonalAvatarPack',
  component: HexagonalAvatarPack
};

const Template = (args) => <HexagonalAvatarPack {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatars: [
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
