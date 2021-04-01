import $ from 'jquery';
import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import './Toolbelt.scss';

export class Tool extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onItemClicked = this.onItemClicked.bind(this);

    this.state = {
      icon: this.props.icon,
      label: this.props.label,
      bottom: this.props.bottom
    };
  }

  onItemClicked(event) {
    if (this.props.location) {
      // Then navigate to the location. We use an ephemeral link so that we can
      // track referrer data, which window.navigate does not do.
      // See also: https://stackoverflow.com/a/64953025/281460
      $('<a></a>').attr("href", this.props.location)[0].click();
    }
  }

  render() {
    let navItemStyles = [
      'toolbelt-item'
    ];

    // XXX_jwir3: This doesn't handle the case where there are multiple bottom
    //            icons. We should, ideally, display them from the bottom up
    //            in the reverse order they are specified.
    if (this.state.bottom) {
      navItemStyles.push('bottom');
    }

    return (
      <NavItem
        eventKey={this.props.name}
        onClick={this.onItemClicked}
        className={navItemStyles.join(' ')}>
          <NavIcon>
            <div className="toolbelt-icon-container">
              {this.state.icon}
            </div>
          </NavIcon>
          <NavText>
            <div className="toolbelt-item">
              {this.state.label}
            </div>
          </NavText>
      </NavItem>
    );
  }
}

export class Toolbelt extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      expanded: false
    };
  }

  onMouseEnter() {
    this.setState({
      expanded: true
    });
  }

  onMouseLeave() {
    this.setState({
      expanded: false
    });
  }

  render() {
    let classes = ['toolbelt-side-nav'];

    if (this.props.underTopMenu) {
      classes.push('with-top-space');
    }

    return (
      <SideNav
        onSelect={(selected) => {
          console.log(`Saw selected: ${selected}`);
          // const to = '/' + selected;
          // if (location.pathname !== to) {
          //     history.push(to);
          // }
        }}
        className={classes.join(' ')}
        onToggle={() => {
          // We don't need to do anything here. If we don't provide this,
          // though, SideNav complains.
        }}
        expanded={this.state.expanded}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        <SideNav.Nav>
          {this.props.children}
        </SideNav.Nav>
      </SideNav>
    );
  }
}
