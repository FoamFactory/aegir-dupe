import React from 'react';

import { CondensedSelectionField } from '../../../';

export default {
  title: 'Components/Molecules/CondensedSelectionField',
  component: CondensedSelectionField,
  argTypes: {
    title: { control: 'text' }
  }
};

let constrainedWidthContainer = {
  width: '50vw'
};

const Template = (args) => {
  return (
    <div style={constrainedWidthContainer}>
      <CondensedSelectionField {...args} />
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  title: 'Volume Units',
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
};
