import React from 'react';

import { Box, Grid } from 'grommet';

export const IconGrid = (props) => {
  return (
    <Box
      direction="row"
      align="center"
      justify="around">
      <Grid
        columns={['medium', 'medium', 'medium']}
        rows={['30em']}
        gap="small"
      >
        {props.children}
      </Grid>
    </Box>
  );
}
