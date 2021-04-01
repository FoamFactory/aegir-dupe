import React from 'react';

// XXX_jwir3: Importing from the index, rather than the individual source file,
//            allows us to verify that the component was added to the index
//            appropriately.
import { EditableRecipeTitle } from '../../../';

export default {
  title: 'Components/Atoms/EditableRecipeTitle',
  component: EditableRecipeTitle
};

export const Primary = () => {
  return (
    <EditableRecipeTitle id="editable-recipe-title" content={'Some Recipe'} />
  );
}
