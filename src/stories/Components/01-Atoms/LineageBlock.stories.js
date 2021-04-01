import React from 'react';

import { LineageBlock } from '../../../';

export default {
  title: 'Components/Atoms/LineageBlock',
  component: LineageBlock
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
        <LineageBlock { ...args } />
      </div>
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  ancestorTree: {
      name: "Mark V",
      ancestors: {
        name: "Mark IV",
        ancestors: {
          name: "Mark III"
        }
      }
  }
};
