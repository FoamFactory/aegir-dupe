import React from 'react';

import { Box } from 'grommet';

export const IconDisplayBlock = (props) => {
  const descriptionStyle = {
    marginTop: '5em',
    marginBottom: '1em',
    height: 'calc(30em-160px)'
  };

  return (
    <Box
      direction='column'
      align='center'
      justify='start'
      background='light-2'
      pad={{ vertical: 'small', horizontal: 'medium' }}
      elevation='medium'
      height={props.height}
    >
      {props.icon}
      <Box
        direction="column"
        align="start"
        justify="start"
        style={descriptionStyle}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Box>
    </Box>
  );
}
