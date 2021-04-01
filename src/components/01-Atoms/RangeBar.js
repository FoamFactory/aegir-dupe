import React from 'react';

import './RangeBar.scss';

// XXX_jwir3: We want a font size of 24pt at width of 1310 px
const fontSizeFactor = (24.0 / 800.0);

export class RangeBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      widthPx: null,
      styleRangeMin: this.props.styleRangeMin,
      styleRangeMax: this.props.styleRangeMax,
      type: this.props.type,
      min: this.props.min,
      max: this.props.max
    }

    this.renderContainerContent = this.renderContainerContent.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      widthPx: this.container.offsetWidth
    });
  }

  renderContainerContent() {
    let fontSize = this.state.widthPx * fontSizeFactor;
    let styleRangeMin = `${this.state.styleRangeMin}`;
    let styleRangeMax = `${this.state.styleRangeMax}`;

    if (Number(styleRangeMin) < Number(this.state.min)) {
      styleRangeMin = this.state.min;
    }

    if (Number(styleRangeMax) > Number(this.state.max)) {
      styleRangeMax = this.state.max;
    }

    if (this.props.type === 'gravity') {
      styleRangeMin = styleRangeMin.padEnd(5, "0");
      styleRangeMax = styleRangeMax.padEnd(5, "0");
    }

    let padding = 10; // Change here if padding changes in scss file

    let markerPosition = (this.state.value - this.state.min) / (this.state.max - this.state.min);
    let markerLeftPos = (markerPosition * this.state.widthPx);

    let styleRangeClass = `style-range-highlight`;
    if (Number(styleRangeMin) <= Number(this.state.min)) {
      styleRangeClass = styleRangeClass + " fully-left";
    }

    if (Number(styleRangeMax) >= Number(this.state.max)) {
      styleRangeClass = styleRangeClass + " fully-right";
    }

    let leftStylePosition = ((styleRangeMin - this.state.min)
      / (this.state.max - this.state.min) * this.state.widthPx);

    let rightStylePosition = (styleRangeMax - this.state.min)
      / (this.state.max - this.state.min) * this.state.widthPx;

    let highlightWidthInPx = rightStylePosition - leftStylePosition;

    let styleRangeInlineStyle = {
      "left": `${leftStylePosition}px`,
      "width": `${highlightWidthInPx}px`
    };

    let markerStyle = {
      "left": `${markerLeftPos}px`
    };

    let markerLabelWidth = `${this.state.value}`.length * 16.0; // Originally measured in em and converted to px
    let markerLabelPosition = markerPosition * this.state.widthPx - (markerLabelWidth/2.0);

    let rangeBarLegendMinStyle = {
      "position": "absolute",
      "left": `${leftStylePosition}px`,
      fontSize: `${15.0*fontSize/16.0}px`
    };

    /* eslint eqeqeq: "off" */
    if (styleRangeMin == this.state.min) {
      rangeBarLegendMinStyle.display = "none";
    }

    let rangeBarLegendAbsMinStyle = {
      "position": "absolute",
      "left": `0px`,
      fontSize: `${15.0*fontSize/16.0}px`
    };

    let rangeBarLegendMaxStyle = {
      "position": "absolute",
      "left": `${rightStylePosition-(2*padding)}px`,
      fontSize: `${15.0*fontSize/16.0}px`
    };

    /* eslint eqeqeq: "off" */
    if (styleRangeMax == this.state.max) {
      rangeBarLegendMaxStyle.display = "none";
    }

    let rangeBarLegendAbsMaxStyle = {
      "position": "absolute",
      "right": `0px`,
      fontSize: `${15.0*fontSize/16.0}px`
    };

    let rangeBarMarkerLegendStyle = {
      "position": "absolute",
      "left": `${markerLabelPosition}px`
    };

    let rangeBarClass = "style-range-display fully-left fully-right";
    if (this.props.type === 'ibu') {
      rangeBarClass = rangeBarClass + " ibu";
      styleRangeClass = styleRangeClass + " ibu";
    } else if (this.props.type === 'srm') {
      rangeBarClass = rangeBarClass + " srm";
      styleRangeClass = styleRangeClass + " srm";
    } else if (this.props.type === 'temperature') {
      rangeBarClass = rangeBarClass + " temperature";
      styleRangeClass = styleRangeClass + " temperature";
    } else {
      rangeBarClass = rangeBarClass + " default";
      styleRangeClass = styleRangeClass + " default";
    }

    return (
      <React.Fragment>
        <div className="range-bar-legend">
          <div style={rangeBarMarkerLegendStyle} className="range-bar-marker-label">{this.state.value}</div>
        </div>
        <div className="range-bar">
          <span style={styleRangeInlineStyle} className={`${styleRangeClass}`}></span>
          <span className={`${rangeBarClass}`}></span>
          <div style={markerStyle} className="range-marker"></div>
        </div>
        <div className="range-bar-legend">
          <div style={rangeBarLegendAbsMinStyle}>{this.state.min}</div>
          <div style={rangeBarLegendMinStyle}>{styleRangeMin}</div>
          <div style={rangeBarLegendMaxStyle}>{styleRangeMax}</div>
          <div style={rangeBarLegendAbsMaxStyle}>{this.state.max}</div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    let fontSize = 24;
    if (this.state.widthPx) {
      fontSize = fontSizeFactor * this.state.widthPx;
    }

    let fontStyle = {
      fontSize: `${fontSize}pt`
    };

    return (
      <div style={fontStyle} className="range-flex-container">
        <div className="range-bar-label">{this.props.label.padEnd(3, " ")}</div>
        <div className="range-container" ref={el => (this.container = el)}>
          {this.state.widthPx && this.renderContainerContent()}
        </div>
      </div>
    );
  }
};
