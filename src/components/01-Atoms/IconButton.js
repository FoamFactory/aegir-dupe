import React from 'react';

import { Icons } from './Icons';

import './IconButton.scss';

export class IconButton extends React.PureComponent {
  render() {
    let classes = [
      'icon-button'
    ];

    let color = "#BFBFBF";
    if (this.props.active) {
      classes.push('active');
      color = '#FFD041';
    }

    let size;
    switch (this.props.size) {
      case 'small':
        size = '24px';
        break;

      case 'medium':
        size = '36px';
        break;

      case 'large':
        size = '54px';
        break;

      default:
        size = '24px';
    }

    let buttonIcon;
    switch (this.props.iconName) {
      case 'ListView':
        buttonIcon = (<Icons.ListView size={size} fill={color} />);
        break;
      case 'GridView':
        buttonIcon = (<Icons.GridView size={size} fill={color} />);
        break;
      default:
        buttonIcon = (<Icons.ListView size={size} fill={color} />);
        break;
    }

    return (
      <button
        id={`iconButton-${this.props.iconName}`}
        onClick={(event) => { this.props.onClick(this.props.iconName); } }
        className={classes.join(' ')}>
        { buttonIcon }
      </button>
    );
  }
}
