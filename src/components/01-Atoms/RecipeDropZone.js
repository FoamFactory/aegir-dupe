import React from 'react';

import './RecipeDropZone.scss';

export class RecipeDropZone extends React.PureComponent {
  render() {
    let styleClasses = [
      'recipe-drop-zone'
    ];

    if (this.props.active) {
      styleClasses.push('active');
    }

    return (
      <div
        id={this.props.id}
        className={styleClasses.join(' ')}
      ></div>
    );
  }
}
