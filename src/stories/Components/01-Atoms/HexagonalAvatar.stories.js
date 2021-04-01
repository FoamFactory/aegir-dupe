import React from 'react';

import { HexagonalAvatar } from '../../../';

export default {
  title: 'Components/Atoms/HexagonalAvatar',
  component: HexagonalAvatar
};

const Template = (args) => <HexagonalAvatar {...args} />;

export const Static = Template.bind({});
Static.args = {
  imageUrl: 'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png'
};

export const Modifiable = Template.bind({});
Modifiable.args = {
  modifiable: true,
  imageUrl: 'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png'
};
