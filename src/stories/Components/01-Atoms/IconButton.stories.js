import React from 'react';

import { IconButton } from '../../../';

export default {
  title: 'Components/Atoms/IconButton',
  component: IconButton
};

const Template = (args) => <IconButton {...args} />;

export const ListModeNotActive = Template.bind({});
ListModeNotActive.args = {
  size: 'small',
  iconName: 'ListView'
};

export const ListModeActive = Template.bind({});
ListModeActive.args = {
  size: 'small',
  iconName: 'ListView',
  active: true
};

export const GridModeNotActive = Template.bind({});
GridModeNotActive.args = {
  size: 'small',
  iconName: 'GridView',
};

export const GridModeActive = Template.bind({});
GridModeActive.args = {
  size: 'small',
  iconName: 'GridView',
  active: true
};
