import React from 'react';

import { Dropdown, DropdownButton } from 'react-bootstrap';

import './InfoContainer.scss';

export class InfoContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      headerButton: this.props.headerButton
    }
  }

  render() {
    let headerClass = "info-container-header";
    let dropDownButton = null;

    if (this.state.headerButton) {
      headerClass = 'info-container-header-with-button';
      let buttonActions = [];
      for (let buttonIdx in this.state.headerButton.actions) {
        let action = this.state.headerButton.actions[buttonIdx];
        buttonActions.push((<Dropdown.Item key={`buttonAction-${action.id}`} href={action.location}>{action.title}</Dropdown.Item>));
      }

      dropDownButton = (
        <DropdownButton id={`dropdown-button-${this.state.headerButton.id}`}
          className={this.state.headerButton.className}
          title={this.state.headerButton.title}>
          { buttonActions }
        </DropdownButton>
      );
    }

    let classNames = "info-container";

    for (let classIdx in this.props.classNames) {
      classNames += " " + this.props.classNames[classIdx];
    }

    return (
      <div className={classNames}>
        <div className={headerClass}>
          <h4 className="container-title">{this.state.title}</h4>
          { dropDownButton }
        </div>
        <div className='info-container-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
