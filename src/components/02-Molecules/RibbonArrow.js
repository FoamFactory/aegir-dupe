import React from 'react';

import './RibbonArrow.scss';

export class RibbonArrow extends React.PureComponent {
  constructor(props) {
    super(props);

    let color = 'cream';
    this.state = {
      phase: this.props.phase,
      color: color
    }
  }

  render() {
    let pathStyle = {
      fill: this.state.color
    };

    let middleClasses = ['ribbon-arrow-middle', this.state.color];
    let topPathClasses = ['ribbon-arrow-top', this.state.color];
    let bottomPathClasses = [this.state.color];

    return (
      <div className="ribbon-arrow">
        <svg viewBox="0 0 130 49" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={topPathClasses.join(' ')} d="M0 50 V 0 L65 20 L 130 0 V 50 H 0 Z" />
        </svg>
        <div className={middleClasses.join(' ')}>
          <div className="ribbon-arrow-text">{this.state.phase}</div>
          <div className="ribbon-arrow-text">({this.props.timeline})</div>
        </div>
        <svg viewBox="0 0 130 49" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={bottomPathClasses.join(' ')} style={pathStyle} d="M130 0 H 0 V 29 L 65 49 L 130 29 Z"/>
        </svg>
      </div>
    );
  }
}
