import React from 'react';

export class ColorGrid extends React.PureComponent {
  render() {
    let columnCss = '';
    switch (this.props.columns) {
      case 4:
        columnCss = 'four-columns';
        break;

      case 5:
        columnCss = 'five-columns';
        break;

      default:
        columnCss = 'four-columns';
    }

    let cssClasses = [
      'color-swatches',
      'aegir-grid',
      columnCss
    ];

    return (
      <div className={cssClasses.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}
