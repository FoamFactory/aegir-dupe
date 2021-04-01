import React from 'react';

import { TypeBlock } from '../../../';

export default {
  title: 'Components/Atoms/TypeBlock',
  component: TypeBlock
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
        <TypeBlock { ...args } />
      </div>
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  type: 'all-grain'
};
