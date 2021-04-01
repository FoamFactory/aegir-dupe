// <Ingredients ingredients={this.state.ingredients} brewMethodType={'allGrain'} />
import React from 'react';

import { Ingredients } from '../../../';

export default {
  title: 'Components/Organs/Ingredients',
  component: Ingredients
};

const Template = (args) => <Ingredients {...args} />;
export const Default = Template.bind({});
Default.args = {
  ingredients: {
    mash: [
      {
        maltster: "Rahr",
        description: "Pale 2-Row",
        color: "2-3",
        amount: "9.6",
        amountUnit: "pounds",
        origin: "USA"
      },
      {
        description: "Maris Otter Pale",
        color: "3.75",
        amount: "2.94",
        amountUnit: "pounds",
        origin: "UK"
      },
      {
        description: "Chocolate",
        color: "425",
        amount: "3.2",
        amountUnit: "ounces",
        origin: "UK"
      },
      {
        description: "Carastan",
        color: "34",
        amount: "4.3",
        amountUnit: "pounds",
        origin: "UK"
      }
    ],
    boil: [
      {
        manufacturer: "Northern Brewer",
        description: "East Kent Goldings",
        type: "hops",
        amount: 2.9,
        amountUnit: "ounces",
        alphaAcid: 5.2,
        kind: "pellet"
      },
      {
        manufacturer: "Northern Brewer",
        description: "Fuggles",
        type: "hops",
        amount: 0.7,
        amountUnit: "ounces",
        alphaAcid: 4.5,
        kind: "pellet"
      }
    ],
    primaryFermentation: [
      {
        manufacturer: "Wyeast",
        strain: "1098",
        description: "British Ale Yeast",
        type: "yeast",
        attenuation: .74,
        minTemp: 64,
        maxTemp: 72
      }
    ]
  },
  brewMethodType: 'allGrain'
};
