import React from 'react';
import {toHex} from "@wessberg/color";

import { StringUtil } from '../../util/StringUtil';

import './ColorSwatch.scss';

export class ColorSwatch extends React.PureComponent {
  constructor(props) {
    super(props);

    let colorName = this.props.color.split("-").join(" ");

    let type = 'standard';
    if (this.props.shade) {
      type = 'shade';
    }

    let backgroundClass = `backgroundColor-${this.props.color}`;
    if (type !== 'standard' && this.props.shade && this.props.shade !== 'normal') {
      backgroundClass = backgroundClass + `-${this.props.shade}`;
    }

    let scssName = `$${this.props.color}`;
    if (type !== 'standard' && this.props.shade && this.props.shade !== 'normal') {
        scssName = scssName + `-${this.props.shade}`;
    }

    if (this.props.isGradient) {
      scssName = scssName + "_gradient";
    }

    this.state = {
      name: StringUtil.convertToTitleCase(colorName),
      scssName: scssName,
      type: type,
      backgroundClass: backgroundClass
    };
  }

  componentDidMount() {
    let domElement = document.getElementsByClassName(this.state.backgroundClass)[0];
    let backgroundColor = window.getComputedStyle(domElement).backgroundColor;
    this.setState({
      hexCode: toHex(backgroundColor)
    });
  }

  render() {
    let swatchClasses = [
      this.state.type === 'shade' ? 'color-shade' : 'color-swatch',
      this.props.size,
      this.state.backgroundClass
    ];

    let name = this.state.name;
    if (this.props.shade && this.props.shade !== 'normal') {
        name = StringUtil.convertToTitleCase(this.props.shade);
    }

    let metadataClass = this.state.type === 'shade' ? 'shade-with-metadata' : 'color-swatch-with-metadata';

    let hexCodeElement = (<div className="color-swatch-hexCode">{this.state.hexCode}</div>);
    if (this.props.isGradient) {
      hexCodeElement = '';
    }

    return (
      <div className={metadataClass}>
        <div className={swatchClasses.join(' ')}></div>
        <div className="color-swatch-metadata">
          <div className="color-swatch-name">{name}</div>
          {hexCodeElement}
          <div className="color-swatch-cssName">{this.state.scssName}</div>
        </div>
      </div>
    );
  }
}
