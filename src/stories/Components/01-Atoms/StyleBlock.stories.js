import React from 'react';

import { StyleBlock } from '../../../';

export default {
  title: 'Components/Atoms/StyleBlock',
  component: StyleBlock
};

let containerContainerStyle = {
  height: "8.5em",
  padding: "1em .5em"
};

let containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  height: "100%"
};

const Template = (args) => {
  return (
    <div style={containerContainerStyle}>
      <div style={containerStyle}>
        <StyleBlock { ...args } />
      </div>
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  styleName: 'British Brown Ale',
  styleReference: "BJCP-13B"
};
