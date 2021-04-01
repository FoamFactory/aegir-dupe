import React from 'react';

import { RecipeContainer } from '../../../';

export default {
  title: 'Components/Organs/RecipeContainer',
  component: RecipeContainer,
  parameters: {
    docs: {
      description: {
        component: "A container for recipes to be displayed in either grid or list form, depending on both media type and user preference. Also serves as a drag-and-drop manager for recipes."
      }
    }
  }
};

const Template = (args) => <RecipeContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  viewMode: 'grid',
  dragAndDropEnabled: true,
  recipes: [
    {
      id: 1,
      name: "Damned Squirrel",
      version: 3,
      category: "British Brown Ale",
      ibu: 28.10,
      srm: 21.44,
      numTimesBrewed: 1,
      abv: 4.99,
      lastBrewDate: "2021-01-29"
    },
    {
      id: 2,
      name: "Whipped Cloud",
      category: 'Cream Ale',
      version: 3,
      ibu: 19.17,
      srm: 4.83,
      abv: 4.66,
      lastBrewDate: '2021-01-22',
      numTimesBrewed: 1
    },
    {
      id: 3,
      name: "Red Sunset",
      version: 3,
      category: 'Irish Red Ale',
      abv: 4.27,
      ibu: 25.03,
      srm: 10.37,
      lastBrewDate: '2021-01-16',
      numTimesBrewed: 1
    },
    {
      id: 4,
      name: 'Dobroy Nochi',
      version: 2,
      category: "Imperial Stout",
      abv: 11.12,
      ibu: 67.1,
      srm: 38.51,
      lastBrewDate: '2018-08-16',
      numTimesBrewed: 2
    },
    {
      id: 5,
      name: 'Anti-Scurvy Elixir',
      version: 1,
      category: "American IPA",
      abv: 5.72,
      ibu: 62.97,
      srm: 13.6,
      lastBrewDate: '2020-05-21',
      numTimesBrewed: 2
    },
    {
      id: 6,
      name: 'The Hessian',
      version: 1,
      category: 'Autumn Seasonal Ale',
      abv: 6.60,
      ibu: 23.4,
      srm: 20.87,
      lastBrewDate: '2020-08-31',
      numTimesBrewed: 1
    },
    {
      id: 7,
      name: 'Smoking on 36th Street',
      version: 1,
      category: 'American Porter',
      abv: 5.16,
      ibu: 30.14,
      srm: 30.08,
      lastBrewDate: '2020-08-14',
      numTimesBrewed: 2
    },
    {
      id: 8,
      name: 'The Patriot',
      version: 3,
      category: 'Helles Bock',
      abv: 6.46,
      ibu: 25.74,
      srm: 7.48,
      lastBrewDate: '2018-12-04',
      numTimesBrewed: 2
    },
    {
      id: 9,
      name: 'SeptembreFiesta',
      version: 1,
      category: 'Festbier',
      abv: 5.91,
      ibu: 21.83,
      srm: 6.79,
      lastBrewDate: '2016-08-11',
      numTimesBrewed: 1
    }
  ]
};
