import React from 'react';

import { DropdownTextButton } from '../../../';

export default {
  title: 'Components/Atoms/DropdownTextButton',
  component: DropdownTextButton
};

const onItemChanged = (newItemLabel) => {
  console.log("Item changed to: " + newItemLabel);
}

const Template = (args) => <DropdownTextButton onItemChanged={onItemChanged} {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
  label: "Text Only",
  activeItemLabel: 'Option 1',
  options: [
    {
      label: 'Option 1',
    },
    {
      label: 'Option 2'
    }
  ]
};

export const TextAndIcon = Template.bind({});
TextAndIcon.args = {
  id: 'textAndIconDropDownButton',
  icon: "sort",
  activeItemLabel: "IBUs",
  options: [
    {
      label: "Name (A-Z)"
    },
    {
      label: "Name (Z-A)"
    },
    {
      label: "Last Brew Date"
    },
    {
      label: "Style"
    },
    {
      label: "IBUs"
    },
    {
      label: "Color"
    },
    {
      label: "ABV"
    }
  ]
}
