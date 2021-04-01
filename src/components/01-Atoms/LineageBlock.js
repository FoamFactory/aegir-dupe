import React from 'react';

import { Icons } from './Icons';

import './LineageBlock.scss';

export class LineageBlock extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      hovered: false
    };
  }

  onMouseEnter() {
    this.setState({
      hovered: true
    });
  }

  onMouseLeave() {
    this.setState({
      hovered: false
    });
  }

  render() {
    let fill = "#FFD041";

    if (this.state.hovered) {
        fill = "#D78F25"
    }

    return (
      <div className="small-block">
        <div className="small-block-icon">
          <Icons.Lineage fill={fill} />
        </div>
        <h4>Version</h4>
        <div className='block-content' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <p>Mark IV</p>
        </div>
      </div>
    );
  }
}
