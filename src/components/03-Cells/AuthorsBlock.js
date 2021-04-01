import React from 'react';

import { HexagonalAvatarPack } from '../02-Molecules/HexagonalAvatarPack';

import './AuthorsBlock.scss';

export class AuthorsBlock extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      authors: props.authors
    };
  }

  render() {
    let heading = 'Author';
    if (this.state.authors.length > 1) {
      heading = 'Authors';
    }

    return (
      <div className="small-block">
        <h4>{heading}</h4>
        <div className="authors-avatars">
          <HexagonalAvatarPack avatars={this.state.authors} />
        </div>
      </div>
    );
  }
}
