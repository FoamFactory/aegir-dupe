import React, { Fragment } from 'react';

import { PrimaryColorDisplay,
         SecondaryColorDisplay,
         TertiaryColorDisplay,
         BackgroundColorDisplay,
         NeutralColorDisplay } from './ColorDisplays';

export default {
  title: 'Colors/All Colors',
  component: Fragment,
  parameters: {
    status: 'stable'
  }
};

const Template = (args) => (
  <Fragment>
    <h2>Primary Colors</h2>
    <PrimaryColorDisplay />

    <h2>Secondary Colors</h2>
    <SecondaryColorDisplay />

    <h2>Tertiary Colors</h2>
    <TertiaryColorDisplay />

    <h2>Background Colors</h2>
    <BackgroundColorDisplay />

    <h2>Neutral Colors</h2>
    <NeutralColorDisplay />
  </Fragment>
);

export const AllColors = Template.bind({});
