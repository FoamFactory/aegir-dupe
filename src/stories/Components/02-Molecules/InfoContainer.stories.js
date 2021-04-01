import React from 'react';

import { InfoContainer } from '../../../';

export default {
  title: 'Components/Molecules/InfoContainer',
  component: InfoContainer,
  argTypes: {
    title: { control: 'text' },
    headerButton: { control: "object" }
  }
};

const Template = (args) => <InfoContainer {...args}>Some content</InfoContainer>;

export const Default = Template.bind({});
Default.args = {
  title: 'Info Container',
  headerButton: null
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: 'Info Container with Actions',
  headerButton: {
    id: 'addIngredientButton',
    title: "Add Ingredient",
    actions: [
      {
        title: `Do something Magical`,
        id: `ingredientHeader-doMagic`
      },
      {
        title: `Do something wonderful`,
        id: `ingredientHeader-doWonderful`
      }
    ]
  }
};
