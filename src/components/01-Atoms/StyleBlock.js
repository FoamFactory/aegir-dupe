import React from 'react';

import { Icons } from './Icons';

import './StyleBlock.scss';

export class StyleBlock extends React.PureComponent {
  constructor (props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      style: {
        name: props.name,
        category: props.category,
        hovered: false
      }
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
    const fill = this.state.hovered ? "#D78F25" : "#FFD041";

    return (
      <div className="small-block">
        <div className="small-block-icon">
          <Icons.BeerMug fill={fill} />
        </div>
        <h4>Style</h4>
        <div className='block-content' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <p>{this.props.styleName}</p>
          <p>({this.props.styleReference})</p>
        </div>
      </div>
    );
  }
}
