import React from 'react';

import './SectionTitleDescription.scss';

export class SectionTitleDescription extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <h2 className="section-title">{this.props.title}</h2>
        <p className="section-description">{this.props.description}</p>
      </React.Fragment>
    );
  }
}
