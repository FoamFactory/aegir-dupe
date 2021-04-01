import React from 'react';

import './InlineInputButton.scss';

export class InlineInputButton extends React.PureComponent {
  render() {
    return (
      <div className="inline-input-button">
        <input type="text" className="left-side" placeholder={this.props.placeholder}></input>
        <button className="right-half-button">{this.props.actionLabel}</button>
      </div>
    );
  }
}
