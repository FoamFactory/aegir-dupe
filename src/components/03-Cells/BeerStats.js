import React from 'react';

import { RangeBar } from '../01-Atoms/RangeBar';
import { InfoContainer } from '../02-Molecules/InfoContainer';

import { ABVCalculator } from '../../util/Calculators';

import './BeerStats.scss';

// TODO_jwir3: We should externalize this and make sure we have all of the
//             necessary categories.
let beerStyles = {
  "bjcp-13b": {
    "ogMin": 1.040,
    "ogMax": 1.052,
    "fgMin": 1.008,
    "fgMax": 1.013,
    "abvMin": 4.2,
    "abvMax": 5.4,
    "srmMin": 12.0,
    "srmMax": 22.0,
    "ibuMin": 20,
    "ibuMax": 30,
  }
};

export class BeerStats extends React.PureComponent {
  constructor(props) {
    super(props);

    let beerStyle = this.props.beerStyle;

    let ogValue = this.props.originalGravity;
    let ogMin = beerStyles[beerStyle].ogMin;
    let ogMax = beerStyles[beerStyle].ogMax;

    let fgValue = this.props.finalGravity;
    let fgMin = beerStyles[beerStyle].fgMin;
    let fgMax = beerStyles[beerStyle].fgMax;

    let srmValue = this.props.srm;
    let srmMin = beerStyles[beerStyle].srmMin;
    let srmMax = beerStyles[beerStyle].srmMax;

    let ibuValue = this.props.ibu;
    let ibuMin = beerStyles[beerStyle].ibuMin;
    let ibuMax = beerStyles[beerStyle].ibuMax;

    let abvValue = ABVCalculator.calculateStandard(ogValue, fgValue);
    let abvMin = beerStyles[beerStyle].abvMin;
    let abvMax = beerStyles[beerStyle].abvMax;


    let idealTemp = 68;
    let yeastMin = 64;
    let yeastMax = 72;

    this.state = {
      originalGravity: {
        min: ogMin,
        max: ogMax,
        value: ogValue
      },

      finalGravity: {
        min: fgMin,
        max: fgMax,
        value: fgValue
      },

      color: {
        min: srmMin,
        max: srmMax,
        value: srmValue
      },

      ibu: {
        min: ibuMin,
        max: ibuMax,
        value: ibuValue
      },

      abv: {
        min: abvMin,
        max: abvMax,
        value: abvValue
      },

      temp: {
        min: yeastMin,
        max: yeastMax,
        value: idealTemp
      }
    };
  }

  render() {
    return (
      <InfoContainer title="Beer Stats" classNames={[`beerStats-infoContainer`]}>
        <div className="beer-stats-container">
          <div className="grid-two-column-even">
            <RangeBar label="SRM" type="srm" min="0" max="30" styleRangeMin={this.state.color.min} styleRangeMax={this.state.color.max} value={this.state.color.value} />
            <RangeBar label="OG" type="gravity" min="1.000" max="1.075" styleRangeMin={this.state.originalGravity.min} styleRangeMax={this.state.originalGravity.max} value={this.state.originalGravity.value} />
            <RangeBar label="IBU" type="ibu" min="5" max="70" styleRangeMin={this.state.ibu.min} styleRangeMax={this.state.ibu.max} value={this.state.ibu.value} />
            <RangeBar label="FG" type="gravity" min="1.000" max="1.020" styleRangeMin={this.state.finalGravity.min} styleRangeMax={this.state.finalGravity.max} value={this.state.finalGravity.value} />
            <RangeBar label="°F" type="temperature" min="30" max="90" styleRangeMin={this.state.temp.min} styleRangeMax={this.state.temp.max} value={this.state.temp.value} />
            <RangeBar label="ABV" type="percent" min="0" max="10" styleRangeMin={this.state.abv.min} styleRangeMax={this.state.abv.max} value={this.state.abv.value} />
          </div>
        </div>
      </InfoContainer>
    );
  }
}
