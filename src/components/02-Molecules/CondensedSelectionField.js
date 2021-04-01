import React from 'react';

import { DestinyStyleSelect } from '../01-Atoms/DestinyStyleSelect';

import './CondensedSelectionField.scss';

export class CondensedSelectionField extends React.PureComponent {
  render() {
      return (
        <div className="condensed-selection-field-container">
          <div className="label-description-container">
            <h4 className="field-title">{this.props.title}</h4>
          </div>
          <DestinyStyleSelect options={this.props.options} />
        </div>
      );
  }
}
