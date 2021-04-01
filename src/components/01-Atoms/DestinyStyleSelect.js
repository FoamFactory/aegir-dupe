import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import './DestinyStyleSelect.scss';

// Note that the modulus and remainder operators are different. We define a
// modulus operator here to AVOID getting a negative remainder.
function modulus(a, n) {
  return ((a % n ) + n ) % n;
}

export class DestinyStyleSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.selectPreviousOption = this.selectPreviousOption.bind(this);
    this.selectNextOption = this.selectNextOption.bind(this);
    this.handleEnterLeft = this.handleEnterLeft.bind(this);
    this.handleEnterRight = this.handleEnterRight.bind(this);

    this.state = {
      currentlySelected: 0
    };
  }

  // XXX_jwir3: The arrow keys are only detected via onKeyDown, not onKeyPress,
  //            if we ever want to add support for them.
  handleEnterLeft(evt) {
    if (evt.code === 'Enter' || evt.code === 'Space') {
      this.selectPreviousOption();
    }
  }

  handleEnterRight(evt) {
    if (evt.code === 'Enter' || evt.code === 'Space') {
      this.selectNextOption();
    }
  }

  selectPreviousOption() {
    this.setState((existingState) => {
      let futureOption = modulus(existingState.currentlySelected - 1, this.props.options.length);

      if (futureOption < 0) {

      }

      return {
        currentlySelected: futureOption
      }
    });
  }

  selectNextOption() {
    this.setState((existingState) => {
      let futureOption = modulus(existingState.currentlySelected + 1, this.props.options.length);

      return {
        currentlySelected: futureOption
      }
    });
  }

  render() {
    let selectedLabel = this.props.options[this.state.currentlySelected].label;
    return (
      <div className="destiny-style-selection">
        <AiFillCaretLeft
          tabindex="1"
          onClick={this.selectPreviousOption}
          onKeyPress={this.handleEnterLeft}
        />
        <div>{selectedLabel}</div>
        <AiFillCaretRight
          tabindex="0"
          onClick={this.selectNextOption}
          onKeyPress={this.handleEnterRight}
        />
      </div>
    );
  }
}
