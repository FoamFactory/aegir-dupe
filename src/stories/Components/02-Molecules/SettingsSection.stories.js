import React from 'react';

import { CondensedSelectionField,
         HexagonalAvatar,
         IconAndEditableField,
         Icons,
         PasswordAndConfirmationSet,
         SettingsSection } from '../../../';
import { Grid } from 'grommet';

import './SettingsSection.stories.scss';

export default {
  title: 'Components/Molecules/SettingsSection',
  component: SettingsSection,
  parameters:{
    docs: {
      description: {
        component: 'Section of related settings with a named anchor for linking.'
      }
    }
  }
};

export const PersonalInfo = () => {
  let firstFieldStyle = {
    gridArea: 'first-field'
  };

  let secondFieldStyle = {
    gridArea: 'second-field'
  };

  let avatarStyle = {
    gridArea: 'avatar',
    marginLeft: '7em'
  };

  let gridContainerStyle = {
    display: 'flex',
    flexDirection: 'row'
  };

  return (
    <SettingsSection
      title="Personal Info"
      description="Basic information, like your name and email address that is used across FoamFactory services and may be shown to other users.">
      <div
        style={gridContainerStyle}
        className="settings-avatar-container">
        <Grid
          rows={['45px', '45px']}
          columns={['medium', 'small']}
          gap="small"
          align="start"
          areas={[
            { name: 'first-field', start: [0, 0], end: [0, 0] },
            { name: 'second-field', start: [0, 1], end: [0, 1] },
            { name: 'avatar', start: [1, 0], end: [1, 1] }
          ]}
        >
          <IconAndEditableField
            id="editable-name"
            content={"Scott Johnson"}
            icon={(<Icons.Person className="icon" fill="#000000" size="45px" />)}
            style={firstFieldStyle}
          />
          <IconAndEditableField
            id="editable-email"
            style={secondFieldStyle}
            content={"jaywir3@gmail.com"}
            icon={(<Icons.Mail className="icon" fill="#000000" size="45px" />)}
          />
          <HexagonalAvatar
            style={avatarStyle}
            modifiable="true"
            imageUrl="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png" />
        </Grid>
      </div>
    </SettingsSection>
  );
}

export const MeasurementSettings = () => {
  let volumeOptions = [
    {
      label: 'Quarts'
    },
    {
      label: 'Gallons'
    },
    {
      label: 'Liters'
    },
    {
      label: 'Barrels'
    },
    {
      label: 'Hectoliters'
    }
  ];

  let tempOptions = [
    {
      label: '°F'
    },
    {
      label: '°C'
    },
    {
      label: 'K'
    }
  ];

  let colorOptions = [
    {
      label: "SRM"
    },
    {
      label: "EBC"
    }
  ];

  return (
    <SettingsSection
      title="Measurement Settings"
      description="Settings for measurement scales, such as the units in which volume and temperature measurements are made.">
      <div className="measurement-settings-layout">
        <CondensedSelectionField title="Volume Units" options={volumeOptions} />
        <CondensedSelectionField title="Temperature Units" options={tempOptions} />
        <CondensedSelectionField title="Color Method" options={colorOptions} />
      </div>
    </SettingsSection>
  );
}

export const SecuritySettings = () => {
  return (
    <SettingsSection
      title="Security Settings"
      description="Settings related to the security of your account, such as passwords and cryptographic keys.">
      <PasswordAndConfirmationSet
        label="Change Password"
        description="Changing your password will log you out of FoamFactory" />
    </SettingsSection>
  );
};
