import React from 'react';
import $ from 'jquery';

import { MenuBar } from '../02-Molecules/MenuBar';

import './Workbench.scss';

/**
 *  A 'workbench' is a sub-part of the overall application. It is a place for
 *  the user to perform work. It always has a MenuBar, but may have a
 *  ToolContainer, Tool, Router, or other infrastructure.
 */
export class Workbench extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setWorkbenchClassOnParentBody = this.setWorkbenchClassOnParentBody.bind(this);
    this.removeWorkbenchClassFromParentBody = this.removeWorkbenchClassFromParentBody.bind(this);
  }

  componentDidMount() {
    // Traverse up the DOM and set the parent body element of this element to
    // have 'workbench' in the class names.
    this.setWorkbenchClassOnParentBody();
  }

  componentWillUnmount() {
    this.removeWorkbenchClassFromParentBody();
  }

  setWorkbenchClassOnParentBody() {
    $('body').addClass('workbench');
  }

  removeWorkbenchClassFromParentBody() {
    $('body').removeClass('workbench');
  }

  render() {
    return (
      <div className="workbench">
        <MenuBar
          logoPath={this.props.logoPath}
          structure={this.props.menuStructure}
        />
        { this.props.children }
      </div>
    );
  }
}
