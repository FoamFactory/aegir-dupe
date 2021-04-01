import React from 'react';
import styled from 'styled-components';

import { Icons, Tool, Toolbelt } from '../../../';

export default {
  title: 'Components/Molecules/Toolbelt',
  component: Toolbelt
};

const StyledDiv = styled.div`
  height: 30em;
`;

export const BasicExample = (props) => {
  return (
    <StyledDiv>
      <Toolbelt>
        <Tool icon={<Icons.RecipeBook size="34px"/>} name="recipe-book" label="Recipe Book" />
        <Tool icon={<Icons.Inventory size="34px" />} name="inventory" label="Inventory" />
        <Tool icon={<Icons.Quartermaster size="34px" />} name="quartermaster" label="Quartermaster" />
        <Tool icon={<Icons.GroupsGuilds size="34px" />} name="groups-and-guilds" label="Groups and Guilds" />
        <Tool icon={<Icons.RatingSheets size="34px" />} name="rating-sheets" label="Rating Sheets" />
      </Toolbelt>
    </StyledDiv>
  );
};

export const BottomIconExample = (props) => {
  return (
    <StyledDiv>
      <Toolbelt>
        <Tool icon={<Icons.Add size="34px" />} name="recipe-book" label="Recipe Book" />
        <Tool icon={<Icons.AddFolder size="34px" />} name="add-folder" label="Add Folder" />
        <Tool icon={<Icons.Trash size="34px" />} name="trash" label="Trash" bottom />
      </Toolbelt>
    </StyledDiv>
  );
};

export const BottomIconWithTopSpacingExample = (props) => {
  return (
    <StyledDiv>
      <Toolbelt underTopMenu="true">
        <Tool icon={<Icons.Add size="34px" />} name="recipe-book" label="Recipe Book" />
        <Tool icon={<Icons.AddFolder size="34px" />} name="add-folder" label="Add Folder" />
        <Tool icon={<Icons.Trash size="34px" />} name="trash" label="Trash" bottom />
      </Toolbelt>
    </StyledDiv>
  );
};
