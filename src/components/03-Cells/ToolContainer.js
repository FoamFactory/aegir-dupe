import React from 'react';

import './ToolContainer.scss';

export class ToolContainer extends React.PureComponent {
  render() {
    return (
      <div className="tool-container">
        {this.props.children}
      </div>
    );
  }
}
