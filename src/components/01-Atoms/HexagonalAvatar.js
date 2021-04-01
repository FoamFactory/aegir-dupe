import React from 'react';

import { Icons } from './Icons';
import './HexagonalAvatar.scss';

export class HexagonalAvatar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onAvatarClick = this.onAvatarClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.state = {
      hovering: false,
      clickActive: false
    };
  }

  onAvatarClick() {
    console.log("Avatar clicked!");
  }

  onMouseDown() {
    this.setState({
      clickActive: true
    });
  }

  onMouseUp() {
    this.setState({
      clickActive: false
    });
    this.onAvatarClick();
  }

  onMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  onMouseLeave() {
    this.setState({
      hovering: false,
      clickActive: false
    });
  }

  render() {
    let avatarImageStyle = {
      backgroundImage: `url("${this.props.imageUrl}")`
    };

    let modifiableOverlay = (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        className="avatar-modification-overlay">
        {!this.state.clickActive && <Icons.Pencil fill="#FFFFFF" size="45px" />}
        {this.state.clickActive && <Icons.Pencil fill="#bfbfbf" size="45px" />}
      </div>
    );

    // XXX_jwir3: It's super weird that we need this outer container, but I
    //            think it's acting as an abspos trap for the inner element, in
    //            the event we have the hexagonal avatar inside of some other
    //            width/height deriving container (e.g. flexbox or grid). If
    //            we don't include this, then the avatar looks fine when its not
    //            in one of these layout containers, but is mispositioned when
    //            inside of one of the containers.
    return (
      <div className="avatar-container-container">
        <div className="avatar-container" style={this.props.style}>
          <div className="hex"></div>
          {this.state.hovering && modifiableOverlay}
          <div className="avatar-image"
            onMouseEnter={this.props.modifiable && this.onMouseEnter}
            onMouseLeave={this.props.modifiable && this.onMouseLeave}
            style={avatarImageStyle}></div>
        </div>
      </div>
    );
  }
}
