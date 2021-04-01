import React from 'react';

import { RecipeBlock } from '../../../';

export default {
  title: 'Components/Molecules/RecipeBlock',
  component: RecipeBlock,
  argTypes: {
    name: { control: 'text' },
    lastBrewDate: {
      control: {
        type: 'date'
      }
    },
    srm: {
      control: {
          type: "range",
          min: 1,
          max: 30,
          step: 1
      }
    }
  }
};

let largerStyle = {
  minWidth: "10em",
  minHeight: "15em"
};

const Template = (args) => <div style={largerStyle}><RecipeBlock {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  name: 'Damned Squirrel',
  category: 'British Brown Ale',
  ibu: 28.10,
  abv: 4.99,
  srm: 21,
  numTimesBrewed: 46,
  lastBrewDate: '2021-01-29'
};

let extraStyling = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
};

const TwoRecipesTemplate = (args) => {
  return (
    <div style={extraStyling}>
      <RecipeBlock
        index={1}
        name="Damned Squirrel"
        category="British Brown Ale"
        ibu="28.10"
        abv="4.99"
        srm="21"
        numTimesBrewed="46"
        lastBrewDate="2021-01-29"
      />
      <RecipeBlock
        index={2}
        name="Dobroy Nochi"
        category="Imperial Stout"
        version="2"
        abv="11.12"
        ibu="67.1"
        srm="38.51"
        lastBrewDate="2018-08-16"
        numTimesBrewed="2"
      />
    </div>
  );
};

export const TwoRecipes = TwoRecipesTemplate.bind({});
TwoRecipes.args = {
};
