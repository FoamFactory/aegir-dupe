import React from 'react';

import { DropdownTextButton } from '../01-Atoms/DropdownTextButton'
import { InlineInputButton } from '../01-Atoms/InlineInputButton';
import { IconButtonSingleSelectionGroup } from '../02-Molecules/IconButtonSingleSelectionGroup';
import { RecipeSortUtil } from '../../util/RecipeSortUtil';

import './SearchListingOptionsBar.scss';

export class SearchListingOptionsBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onSortSelected = this.onSortSelected.bind(this);

    this.state = {
      sortType: 'name-az'
    };
  }

  onSortSelected(sortType) {
    if (this.props.onSortSelected) {
      this.props.onSortSelected(sortType);
    }
  }

  render() {
    return (
      <div className="search-listing-options">
        <div className="search-bar">
          <InlineInputButton placeholder="e.g. british" actionLabel="Search" />
        </div>

        <DropdownTextButton
          className="sort-dropdown"
          icon="sort"
          activeItemId={this.state.sortType}
          options={RecipeSortUtil.getRecipeSortMethods()}
          onItemChanged={this.onSortSelected}
        />

        <IconButtonSingleSelectionGroup
          id="searchListingOptionsBar-selectionGroup"
          additionalStyles="listing-options"
          iconSize="small"
          icons={
            [
              "GridView",
              "ListView"
            ]
          }

          default="GridView"
        />
      </div>
    );
  }
}
