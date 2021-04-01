import React from 'react';

import { MenuBar } from '../../../';

import logoFile from '../../../assets/images/Logo.svg';

export default {
  title: 'Components/Molecules/MenuBar',
  component: MenuBar
};

const Template = (args) => <MenuBar {...args} />;

export const TopMenuBar = Template.bind({});
TopMenuBar.args = {
  logoPath: logoFile,
  structure: [
    {
      label: 'Dashboard',
      location: '#'
    },
    {
      label: 'Libraries',
      subMenu: [
        {
          label: 'Fermentables',
          location: '/library/fermentables'
        },
        {
          label: 'Hops',
          location: '/library/hops'
        }
      ]
    },
    {
      label: 'Tools',
      subMenu: [
        {
          label: 'Hop Calculator',
          location: '/tools/hop-calculator'
        },
        {
          label: 'Recipe Designer',
          location: '/tools/recipe-designer'
        },
        {
          label: 'Equipment Manager',
          location: '/tools/equipment-manager'
        }
      ]
    }
  ]
};
