import React from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';

import { RecipeBlockTitle, SrmUtil } from '../../';

import './RecipeBlock.scss';

/**
 *  A block displaying information about a recipe.
 *
 *  In order to enable the ability to drag and drop, an index must be specified.
 *  This represents the order (from high to low) of the recipe in the
 *  overarching container or list.
 *
 *  Note that onDropCompleted must be specified by the parent.
 */
export class RecipeBlock extends React.PureComponent {
  render() {
    let gradientCss = SrmUtil.getCSSForBeerGradientWithHighlight(this.props.srm);

    let StyledDiv = styled.div`
      background: ${gradientCss};
    `;

    let shouldHaveDarkText = SrmUtil.isBeerColorTooLightForText(this.props.srm);

    let method;
    switch (this.props.method) {
      case 'partialMash':
        method = 'Partial Mash';
        break;
      case 'extract':
        method = 'Extract';
        break;
      default:
        method = 'All Grain';
    };

    let lastBrewedString = 'Never Brewed';
    if (this.props.lastBrewDate) {
      let lastBrewDate = DateTime.fromISO(this.props.lastBrewDate);

      if (lastBrewDate.invalid) {
        lastBrewDate = DateTime.fromMillis(this.props.lastBrewDate);
      }

      lastBrewedString = "Last Brewed: " + lastBrewDate.toFormat('MM.dd.yyyy')
    }

    let subTitleClasses = [ 'recipe-block-subtitle' ];
    if (shouldHaveDarkText) {
      subTitleClasses.push('dark-text');
    }

    let version = this.props.version ? this.props.version : 1;

    return (
      <React.Fragment>
        <div
          id={`recipe-block-${this.props.id}`}
          className='recipe-block'
        >
          <RecipeBlockTitle name={this.props.name} version={`${version}`} />
          <div
            className="wave wave--top">
            <StyledDiv className="recipe-beer-content">
              <div className="recipe-block-subtitle-group">
                <div className={subTitleClasses.join(' ')}>Brewed {this.props.numTimesBrewed} {this.props.numTimesBrewed === 1 ? "Time" : "Times"}</div>
                <div className={subTitleClasses.join(' ')}>{lastBrewedString}</div>
              </div>
              <div className="recipe-block-stats">
                <div></div>
                <div>{this.props.abv}% ABV</div>
                <div>{method}</div>
                <div>{this.props.ibu} IBU</div>
                <div>{this.props.category}</div>
                <div>{this.props.srm} SRM</div>
              </div>
            </StyledDiv>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
