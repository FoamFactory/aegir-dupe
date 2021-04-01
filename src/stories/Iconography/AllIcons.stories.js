import React from 'react';

import { IconDisplayBlock } from './IconDisplayBlock';
import { IconGrid } from './IconGrid';
import { Icons } from '../../'

const Template = (args) => {
  return (
    <IconGrid>
      <IconDisplayBlock icon={(<Icons.Add {...args} size="160px" />)} title="Add" description="Represents the action of adding a new instance of the main representation of a tool to the tool. For example, within the Recipe Book, this represents adding a new Recipe. It should not be used for non-main-instance additions (e.g. adding a Folder within the Recipe Book tool). For these types of additions, use a custom icon instead." />
      <IconDisplayBlock icon={(<Icons.AddFolder {...args} size="160px" />)} title="Add Folder" description="Represents the action of adding a folder to something. Most often used in the Recipe Book for adding a sub-folder to categorize recipes." />
      <IconDisplayBlock icon={(<Icons.Barrels {...args} size="160px" />)} title="Barrels" description="No usage yet. Possibly batch manager tool?" />
      <IconDisplayBlock icon={(<Icons.Barley {...args} size="160px" />)} title="Barley" description="Represents anything relating to grain or fermentables. Also represents actions and classifications related to the 'All Grain' beer brewing method/type." />
      <IconDisplayBlock icon={(<Icons.BeerMug {...args} size="160px" />)} title="Beer Mug" description="Represents beer styles, consumption of beer, and generic beer-related actions." />
      <IconDisplayBlock icon={(<Icons.Filter {...args} size="160px" />)} title="Filter" description="Represents the action of filtering any list or set of elements." />
      <IconDisplayBlock icon={(<Icons.GridView {...args} size="160px" />)} title="Grid View" description="Display a list of items as a grid (as opposed to a vertical listing with one element per row)." />
      <IconDisplayBlock icon={(<Icons.GroupsGuilds {...args} size="160px" />)} title="Groups and Guilds" description="Represents collections of users, including groups and guilds, as well as lists of users that an individual user might have manually curated, such as those users being followed or friended." />
      <IconDisplayBlock icon={(<Icons.IDCard {...args} size="160px" />)} title="IDCard" description="Represents a User's identifying information, such as name, address, etc." />
      <IconDisplayBlock icon={(<Icons.Inventory {...args} size="160px" />)} title="Inventory" description="Represents anything having to do with inventory or supplies." />
      <IconDisplayBlock icon={(<Icons.Lineage {...args} size="160px" />)} title="Lineage" description="Represents the lineage or ancestry of a recipe or batch." />
      <IconDisplayBlock icon={(<Icons.ListView {...args} size="160px" />)} title="List View" description="Display a list of items as a vertical list, with one element per row (as opposed to a grid view)." />
      <IconDisplayBlock icon={(<Icons.Mail {...args} size="160px" />)} title="Mail" description="Represents email, including addresses or fields related to email." />
      <IconDisplayBlock icon={(<Icons.Pencil {...args} size="160px" />)} title="Pencil" description="Represents the editing of a specific piece of data, especially an isolated piece of data, such as a user's avatar." />
      <IconDisplayBlock icon={(<Icons.Person {...args} size="160px" />)} title="Person" description="Represents an individual user, or a piece of identifying information about an individual user, such as their name." />
      <IconDisplayBlock icon={(<Icons.Quartermaster {...args} size="160px" />)} title="Quartermaster" description="Represents anything having to do with equipment." />
      <IconDisplayBlock icon={(<Icons.RatingSheets {...args} size="160px" />)} title="Rating Sheets" description="Represents collections of rating sheets." />
      <IconDisplayBlock icon={(<Icons.Shield {...args} size="160px" />)} title="Shield" description="Represents anything having to do with security or passwords." />
      <IconDisplayBlock icon={(<Icons.Sort {...args} size="160px" />)} title="Sort" description="Represents the action of sorting any list or set of elements." />
      <IconDisplayBlock icon={(<Icons.RecipeBook {...args} size="160px" />)} title="Recipe Book" description="Represents the recipe book tool and collections of recipes." />
      <IconDisplayBlock icon={(<Icons.Ruler {...args} size="160px" />)} title="Ruler" description="Represents any sort of measurement or measuring tool, along with measurement settings." />
      <IconDisplayBlock icon={(<Icons.Trash {...args} size="160px" />)} title="Trash" description="Represents deleting anything, or the trash as a repository for deleted items." />
    </IconGrid>
  );
}

export const AllIcons = Template.bind({});
AllIcons.args = {
  fill: '#FFD041'
}

export default {
  title: 'Iconography/All Icons',
  component: IconGrid,
  parameters: {
    docs: {
      description: {
        component: "The set of icons that can be used, referenced by what they represent or are used to denote. This list is alphabetized by usage."
      }
    },
    status: 'unstable'
  },
  argTypes: {
    fill: {
      control: 'color'
    }
  }
};
