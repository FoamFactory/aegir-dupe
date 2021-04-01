import React from 'react';

import { IconAndEditableField, Icons } from '../../../';

export default {
  title: 'Components/Atoms/IconAndEditableField',
  component: IconAndEditableField
};

export const Primary = () => {
  return (
    <IconAndEditableField
      id="editable-name"
      content={"Scott Johnson"}
      icon={(<Icons.Person fill="#000000" size="45px" />)}
    />
  );
}
