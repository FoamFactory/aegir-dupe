import React from 'react';

import { Icons, Tool, Toolbelt, ToolContainer, Workbench } from '../../../';

import logoFile from '../../../assets/images/Logo.svg';

export default {
  title: 'Components/Organs/Workbench',
  component: Workbench
};

const Template = (args) => {
  let menuStructure = [
      {
        label: 'Dashboard',
        location: '/dashboard'
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
            label: 'Recipe Book',
            location: '/tools/recipe-book'
          },
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
    ];

  return (
    <Workbench logoPath={logoFile} menuStructure={menuStructure}>
      <ToolContainer {...args}>
        <Toolbelt underTopMenu="true">
          <Tool icon={<Icons.Add size="34px" />} name="add-new-recipe" label="Add Recipe" />
          <Tool icon={<Icons.AddFolder size="34px" />} name="add-new-folder" label="Add Folder" />
          <Tool icon={<Icons.Lineage size="34px" />} name="lineage" label="Lineage" />
          <Tool icon={<Icons.Trash size="34px" />} name="trash" label="Trash" bottom />
        </Toolbelt>
        <section className="tool">
          <div className="main">
            <h1>Hello, World!</h1>
          </div>
        </section>
      </ToolContainer>
    </Workbench>
  );
}
export const Default = Template.bind({});
