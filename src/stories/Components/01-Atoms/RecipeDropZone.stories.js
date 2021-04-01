import React from 'react';

import { RecipeDropZone } from '../../../';

export default {
  title: 'Components/Atoms/RecipeDropZone',
  component: RecipeDropZone
};

const Template = (args) => <RecipeDropZone {...args} />;

export const Visible = Template.bind({});
Visible.args = {
  active: true
}
