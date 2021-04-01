import React from 'react';

import { DestinyStyleSelect } from '../../../';

export default {
  title: 'Components/Atoms/DestinyStyleSelect',
  component: DestinyStyleSelect
};

const onItemChanged = (newItemLabel) => {
  console.log("Item changed to: " + newItemLabel);
}

const Template = (args) => <DestinyStyleSelect onItemChanged={onItemChanged} {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'defaultDestinySelect',
  options: [
    {
      label: 'Quarts'
    },
    {
      label: 'Gallons'
    },
    {
      label: 'Liters'
    },
    {
      label: 'Barrels'
    },
    {
      label: 'Hectoliters'
    }
  ]
}
