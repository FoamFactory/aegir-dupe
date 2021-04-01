import React from 'react';

import { Icons, Tool, Toolbelt, ToolContainer } from '../../../';

export default {
  title: 'Components/Cells/ToolContainer',
  component: ToolContainer,
  parameters: {
    docs: {
      description: {
        component: "A container for for a tool with an associated Toolbelt on the left side."
      }
    }
  }
};

const Template = (args) => {
  return (
    <ToolContainer {...args}>
      <Toolbelt underNavMenu="true">
        <Tool icon={<Icons.Add size="34px" />} name="add-new-recipe" label="Add Recipe" />
        <Tool icon={<Icons.AddFolder size="34px" />} name="add-new-folder" label="Add Folder" />
        <Tool icon={<Icons.Lineage size="34px" />} name="lineage" label="Lineage" />
        <Tool icon={<Icons.Trash size="34px" />} name="trash" label="Trash" bottom />
      </Toolbelt>
      <section className="tool">
        <div className="main">
          <h1>Tool Container</h1>
        </div>
      </section>
    </ToolContainer>
  );
}

export const Default = Template.bind({});
