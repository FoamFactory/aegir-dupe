import React from 'react';

import { HexagonalAvatar } from '../01-Atoms/HexagonalAvatar';

import './HexagonalAvatarPack.scss';

export class HexagonalAvatarPack extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      avatars: props.avatars
    };
  }

  render() {
    let avatarRenders = [];
    let avatarPackWidth = 104;
    let avatarPackHeight = 96;

    for (let nextAvatarIdx in this.state.avatars) {
      if (nextAvatarIdx > 0) {
        avatarPackWidth += 10;
        avatarPackHeight += 10;
      }

      let nextAvatar = this.state.avatars[nextAvatarIdx];
      let offsetX = 10 * nextAvatarIdx;
      let offsetY = -10 * nextAvatarIdx + 10;
      let zIndex = this.state.avatars.length - nextAvatarIdx;
      let brightPct = 100 - (nextAvatarIdx * 30);

      let hexAvatarStyle = {
        top: `${offsetY}px`,
        left: `${offsetX}px`,
        zIndex: zIndex,
        filter: `brightness(${brightPct}%)`
      };

      avatarRenders.push((
        <li style={hexAvatarStyle}><HexagonalAvatar imageUrl={nextAvatar.imageUrl}/></li>
      ));
    }

    let avatarPackStyle = {
      width: `${avatarPackWidth}px`,
      height: `${avatarPackHeight}px`
    };

    return (
      <React.Fragment>
        <ul className="avatarPack" style={avatarPackStyle}>
          {avatarRenders}
        </ul>
      </React.Fragment>
    );
  }
}
