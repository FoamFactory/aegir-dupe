import React from 'react';

import { IconButton } from '../01-Atoms/IconButton';

export class IconButtonSingleSelectionGroup extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      active: props.default ? props.default : props.icons[0]
    };
  }

  onClick(iconName) {
    this.setState({
      active: iconName
    });
  }

  render() {
    let iconButtons = [];
    for (let iconIdx in this.props.icons) {
      let iconName = this.props.icons[iconIdx];
      iconButtons.push(
          <IconButton
            key={`selectionGroup-${this.props.id}-iconButton-${iconName}`}
            onClick={this.onClick}
            size={this.props.iconSize}
            iconName={iconName}
            active={this.state.active === iconName} />
      );
    }

    return (
      <div className={this.props.additionalStyles}>
        {iconButtons}
      </div>
    );
  }
}
