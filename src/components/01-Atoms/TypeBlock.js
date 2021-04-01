import React from 'react';

import { Icons } from './Icons';

import './TypeBlock.scss';

export class TypeBlock extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
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
    const fill = this.state.hovered ? "#D78F25" : "#FFD041";

    return (
      <div className="small-block" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <div className="small-block-icon">
          <Icons.Barley fill={fill} />
        </div>

        <h4>Type</h4>
        <div className='block-content'>
          <p>All-Grain</p>
        </div>
      </div>
    );
  }
}
