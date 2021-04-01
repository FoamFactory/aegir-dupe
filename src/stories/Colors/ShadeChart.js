import React from 'react';

import { ColorSwatch } from './ColorSwatch';

export class ShadeChart extends React.PureComponent {
  render() {
    return (
      <div className="aegir-grid three-columns">
        <div className="one-third">
          <ColorSwatch color={this.props.color} size="small" shade="normal" />
        </div>
        <div className="multi-shade-container two-thirds">
          <ColorSwatch color={this.props.color} size="small" type="shade" shade="lightest" />
          <ColorSwatch color={this.props.color} size="small" type="shade" shade="light" />
          <ColorSwatch color={this.props.color} size="small" type="shade" shade="dark" />
          <ColorSwatch color={this.props.color} size="small" type="shade" shade="darkest" />
        </div>
      </div>
    );
  }
}
