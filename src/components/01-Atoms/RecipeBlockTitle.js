import React from 'react';

import './RecipeBlockTitle.scss';

export class RecipeBlockTitle extends React.PureComponent {
  render() {
    return (
      <div className="recipe-block-title-section">
        <div className="recipe-block-title">{this.props.name}</div>
        <div className="recipe-block-version">Version {this.props.version}</div>
      </div>
    );
  }
}
