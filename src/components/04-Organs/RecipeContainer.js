import React from 'react';

import { RecipeBlock } from '../02-Molecules/RecipeBlock';
import { SearchListingOptionsBar } from '../03-Cells/SearchListingOptionsBar';
import { RecipeSortUtil } from '../../util/RecipeSortUtil';
import mapSort from 'mapsort';

import './RecipeContainer.scss';

export class RecipeContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onSortSelected = this.onSortSelected.bind(this);

    let idx = 0;

    this.state = {
      beers: this.props.recipes.map((recipe) => {
        return {
          ...recipe,
          index: idx++
        }
      })
    }
  }

  onSortSelected(sortType) {
    // Get the sort function from recipe sort util
    let sortFunction = RecipeSortUtil.getRecipeSortMethods()[sortType].sortFn;
    let sortedBeers = mapSort(
      this.state.beers,
      (beer) => {
        return beer;
      },
      sortFunction
    );

    this.setState({
      beers: sortedBeers
    });
  }

  render() {
    let beers = this.state.beers.map((recipe) => {
      return (
        <RecipeBlock
          id={recipe.id}
          key={`recipe-block-${recipe.name}${recipe.id}`}
          name={recipe.name}
          version={recipe.version}
          category={recipe.category}
          ibu={recipe.ibu}
          abv={recipe.abv}
          srm={recipe.srm}
          numTimesBrewed={recipe.numTimesBrewed}
          lastBrewDate={recipe.lastBrewDate}
        />);
    });

    return (
      <div className={`recipe-container ${this.props.viewMode}`}>
        <SearchListingOptionsBar
          activeButton={this.props.viewMode}
          onSortSelected={this.onSortSelected}
        />
        {beers}
      </div>
    );
  }
}
