import React, { Fragment } from 'react';

import { ColorGrid } from './ColorGrid';
import { ColorSwatch } from './ColorSwatch';
import { ShadeChart } from './ShadeChart';

class ColorDisplay extends React.PureComponent {
  constructor(props, title, colors=[], columns=4, showShades=false) {
    super(props);

    this.state = {
      columns: columns,
      colors: colors,
      title: title,
      showShades: showShades
    };
  }

  render() {
    let colors = this.state.colors.map((color) => {
      let isGradient = false;
      let name = '';
      if (typeof color === 'object' && color.isGradient) {
        isGradient = true;
        name = color.name;
      } else {
        name = color;
      }

      let key = `${this.state.title.replace(' ', '-').toLowerCase()}-colorSwatch-${name}`;
      return (<ColorSwatch key={key} color={name} isGradient={isGradient}/>);
    });

    let shades = '';
    if (this.state.showShades) {
      shades = this.state.colors.map((color) => {
        let key = `${this.state.title.replace(' ', '-').toLowerCase()}-colorShade-${color}`;
        return (<ShadeChart key={key} color={color} />);
      });
      shades.unshift((<h2>Alternate Shades</h2>));
    }

    return (
      <Fragment>
        <ColorGrid columns={this.state.columns}>
          {colors}
        </ColorGrid>

        {shades}
      </Fragment>
    );
  }
}

class ShadeColorDisplay extends ColorDisplay {
  constructor(props, title, colors) {
    super(props);

    this.title = title;
    this.colors = colors;
    this.keyTitle = this.title.replace(" ", "-").toLowerCase();
  }

  render() {
    let shades = this.colors.map((colorName) => {
      return (<ShadeChart key={`${this.keyTitle}-shade-${colorName}`} color={colorName} />);
    });

    return (
      <Fragment>
        {shades}
      </Fragment>
    );
  }
}

export class PrimaryColorDisplay extends ColorDisplay {
  constructor(props) {
    super(props, 'Primary Colors', [
      'grain',
      'cream-ale',
      'california-common'
    ], 4, true);
  }

  render() {
    return super.render();
  }
}

export class SecondaryColorDisplay extends ShadeColorDisplay {
  constructor(props) {
    super(props, 'Secondary Colors',
    [
      'violet-eggplant',
      'jade'
    ]);
  }

  render() {
    return super.render();
  }
}

export class TertiaryColorDisplay extends ShadeColorDisplay {
  constructor(props) {
    super(props, 'Tertiary Colors', [
      'allports',
      'fire-brick'
    ]);
  }

  render() {
    return super.render();
  }
}

export class NeutralColorDisplay extends ColorDisplay {
  constructor(props) {
    super(props, "Neutral Colors", [
      'white',
      'french-gray',
      'tin',
      'charcoal',
      'black'
    ], 5);
  }

  render() {
    return super.render();
  }
}

export class BackgroundColorDisplay extends ColorDisplay {
  constructor(props) {
    super(props, 'Background Colors', [
      'white',
      'antique-white',
      'thunder',
      'spring-wood',
      'mystic',
      'cyprus',
      {
        name: 'beer',
        isGradient: true
      },
      {
        name: 'caramel-shimmer',
        isGradient: true
      }
    ], 4);
  }
  render() {
    return super.render();
  }
}
