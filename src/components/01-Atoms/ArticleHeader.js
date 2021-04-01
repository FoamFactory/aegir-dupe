import React from 'react';

import './ArticleHeader.scss';

export class ArticleHeader extends React.PureComponent {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}
