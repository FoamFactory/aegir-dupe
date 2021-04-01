import React from 'react';
import './MenuBar.scss';

let NavItem = (props) => {
  return (
    <a href={props.location}>{props.label}</a>
  );
};

let NavSubMenu = (props) => {
  let classNames = "nav-sub-menu";

  if (!props.shouldShow) {
    classNames = classNames + " hidden";
  }

  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
};

let LogoNavItem = (props) => {
  return (
    <div className="nav-bar-logo no-highlight">
      <a href="/"><img alt={props.altText} src={props.path}></img></a>
    </div>
  );
};

class NavMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setSubMenuDisplayed = this.setSubMenuDisplayed.bind(this);

    this.state = {
      hovered: false
    };
  }

  setSubMenuDisplayed(shouldDisplay) {
    this.setState({
      hovered: shouldDisplay
    });
  }

  render() {
    if (this.props.topLevel) {
      return (
        <nav className="top-level">
          {this.props.children}
        </nav>
      );
    }

    if (this.props.label) {
      return (
        <div
          onMouseEnter={() => {this.setSubMenuDisplayed(true)}}
          onMouseLeave={() => {this.setSubMenuDisplayed(false)}}
        >
          <div className="icon nav-dropdown">
            {this.props.label}
          </div>

          <NavSubMenu
            shouldShow={this.state.hovered ? true : false}
          >
            {this.props.children}
          </NavSubMenu>
        </div>
      );
    }
  }
}

export class MenuBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderMenu = this.renderMenu.bind(this);
  }

  renderMenu(menu) {
    // XXX_jwir3: Even though this is recursive, we don't really have a style
    //            for sub-sub-menus right now. IF we decide we need it, we
    //            should add a right arrow to these so they can be rendered.
    let renderedMenuItems = [];
    for (let menuItemIdx in menu) {
      let menuItem = menu[menuItemIdx];
      if (menuItem.hasOwnProperty('location')) {
        renderedMenuItems.push((<NavItem key={menuItem.label + "-menuItem"} id={menuItem.label + "-menuItem"} location={menuItem.location} label={menuItem.label} />));
      } else if (menuItem.hasOwnProperty('subMenu')) {
        let subMenuItems = this.renderMenu(menuItem.subMenu)
        let subMenu = (
          <NavMenu
            key={menuItem.label + "-SubMenu"}
            id={menuItem.label + "-SubMenu"}
            label={menuItem.label}>
            {subMenuItems}
          </NavMenu>
        );

        renderedMenuItems.push(subMenu);
      }
    }

    return renderedMenuItems;
  }

  render() {
    let renderedMenuItems = this.renderMenu(this.props.structure);

    return (
      <NavMenu topLevel="true">
        <LogoNavItem
          key="foamfactory-logo-navitem"
          path={this.props.logoPath}
          altText="FoamFactory Logo" />
        { renderedMenuItems }
      </NavMenu>
    );
  }
}
