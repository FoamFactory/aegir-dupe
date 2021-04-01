import React from 'react';

import { PasswordField } from '../01-Atoms/PasswordField';

import './PasswordAndConfirmationSet.scss';

export class PasswordAndConfirmationSet extends React.PureComponent {
  render() {
    let label = (
      <div className="label-description-container">
        <h4 className="field-title">{this.props.label}</h4>
        <p className="field-description">{this.props.description}</p>
      </div>
    );
    return (
      <div className="password-confirmation-set">
        {this.props.label && label}
        <PasswordField placeholder="New Password" id="change-password" />
        <PasswordField placeholder="Confirm New Password" id="change-password-confirm" />
        <button className="standard">Change</button>
      </div>
    );
  }
}
