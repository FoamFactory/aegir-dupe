import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { Icons } from './Icons';

import './DropdownTextButton.scss';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    className="dropdown-toggle"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </div>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

export class DropdownTextButton extends React.PureComponent {
  constructor(props) {
    super(props);

    if (!this.props.id) {
      console.warn("DropdownTextButton detected without an id property. This may lead to unexpected behavior as keys may not be unique!");
    }

    this.onItemClick = this.onItemClick.bind(this);

    this.state = {
      activeItemId: this.props.activeItemId,
      activeItemLabel: this.props.activeItemLabel
    };
  }

  setActiveItem(itemId) {
    this.setState({
      activeItemId: itemId
    });
  }

  onItemClick(e) {
    let itemId = e.target.id;

    if (itemId && itemId !== this.state.activeItemId) {
      this.setActiveItem(itemId);

      if (this.props.onItemChanged) {
        this.props.onItemChanged(itemId);
      }
    }
  }

  render() {
    let icon = null;
    if (this.props.icon) {
      switch (this.props.icon) {
        case 'filter':
          icon = (<Icons.Filter className="inline-icon" size="24px" />);
          break;

        case 'sort':
          icon = (<Icons.Sort className="inline-icon" size="24px" />);
          break;

        default:
          icon = null;
      }
    }

    let keys = Object.keys(this.props.options);
    let items = keys.map((key) => {
      let item = this.props.options[key];
      if (key === this.state.activeItemId) {
        return (<Dropdown.Item id={key} key={key} active>{item.label}</Dropdown.Item>);
      } else {
        return (<Dropdown.Item id={key} key={key} onClick={this.onItemClick}>{item.label}</Dropdown.Item>);
      }
    });

    let label = this.props.label;
    if (!label) {
      // If an explicit label wasn't given, then let's use the selected item
      // label.
      if (this.state.activeItemId) {
        label = this.props.options[this.state.activeItemId].label;
      }
    }

    return (
      <Dropdown className={this.props.className}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {icon} {label}
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          {items}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
