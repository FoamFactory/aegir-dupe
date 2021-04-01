import React from 'react';

import { ArticleHeader } from '../01-Atoms/ArticleHeader';

export class Article extends React.PureComponent {
  render() {
    return (
      <article>
        <ArticleHeader title={this.props.title} />
        {this.props.children}
      </article>
    );
  }
}
