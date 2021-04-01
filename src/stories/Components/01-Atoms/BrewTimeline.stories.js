import React from 'react';

import { BrewTimeline } from '../../../';

export default {
  title: 'Components/Atoms/BrewTimeline',
  component: BrewTimeline,
  argTypes: {
    phases: 'object'
  }
};

const Template = (args) => <BrewTimeline { ...args } /> ;

export const Default = Template.bind({});
Default.args = {
  phases: [
    {
      id: "plan",
      className: "plan-phase",
      title: "Planning",
      length: {
        amount: 2,
        unit: "days"
      }
    },
    {
      id: "brewing",
      className: "brewing-phase",
      title: "Brewing",
      length: {
        amount: 1,
        unit: "days"
      }
    },
    {
      id: "primaryFermentation",
      className: "primaryFermentation-phase",
      title: "Primary Fermentation",
      length: {
        amount: 5,
        unit: "days"
      }
    },
    {
      id: "secondaryFermentation",
      className: "secondaryFermentation-phase",
      title: "Secondary Fermentation",
      length: {
        amount: 29,
        unit: "days"
      }
    },
    {
      id: "aging",
      className: "aging-phase",
      title: "Aging",
      length: {
        amount: 30,
        unit: "days"
      }
    },
    {
      id: "carbonation",
      className: "carbonation-phase",
      title: "Carbonation",
      length: {
        amount: 2,
        unit: "days"
      }
    }
  ]
};
