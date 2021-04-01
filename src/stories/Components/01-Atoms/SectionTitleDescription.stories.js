import React from 'react';

import { SectionTitleDescription } from '../../../';

export default {
  title: 'Components/Atoms/SectionTitleDescription',
  component: SectionTitleDescription,
  parameters:{
    docs: {
      description: {
        component: 'A title and description for a section of related things.'
      }
    }
  }
};

export const Default = () => {
  return (
    <SectionTitleDescription
      title="Personal Info"
      description="Basic information, like your name and email address that is used across FoamFactory services and may be shown to other users." />
  );
}
