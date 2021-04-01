import React from 'react';

import './PasswordField.scss';

export class PasswordField extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      visible: false
    };
  }

  toggleVisibility() {
    this.setState((currentState) => {
      return {
        visible: !currentState.visible
      };
    });
  }

  render() {
    let classes = [
      this.props.className,
      'password-field'
    ];

    let iconType = this.state.visible ? 'fa-eye-slash' : 'fa-eye';

    let iconClasses = [
      'fa',
      'fa-fw',
      iconType,
      'password-icon',
      'show-password'
    ];

    let passwordFieldType = this.state.visible ? 'text' : 'password';

    return (
      <div className="password-icon-container">
        <input
          id={this.props.id}
          type={passwordFieldType}
          placeholder={this.props.placeholder}
          className={classes.join(' ')}
        ></input>
        <i
          onClick={this.toggleVisibility}
          className={iconClasses.join(' ')}
          aria-label="password-visibility-control"
          aria-hidden="true"
          aria-controls={this.props.id}></i>
      </div>
    );
  }
}
