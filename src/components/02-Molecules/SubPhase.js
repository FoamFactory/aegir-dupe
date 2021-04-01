import React from 'react';

import { ReorderableStepList } from './ReorderableStepList';
import { TimeUtil } from '../../util/TimeUtil';

import './SubPhase.scss';

export class SubPhase extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: this.props.time,
      timeUnit: this.props.timeUnit,
      name: this.props.name,
      steps: this.props.steps,
      color: 'cream'
    };

    if (this.props.onSubPhaseUpdated) {
      this.props.onSubPhaseUpdated(this.props.name, 0, null, this.props.time,
                                   this.props.timeUnit);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ((this.props.time !== prevProps.time
         || this.props.timeUnit !== prevProps.timeUnit)
        && this.props.onSubPhaseUpdated) {
      this.props.onSubPhaseUpdated(this.props.name, prevProps.time,
                                   prevProps.timeUnit, this.props.time,
                                   this.props.timeUnit);
    }
  }

  render() {
    let timelineClasses = ['subPhase-timeline', this.state.color];
    let stepsClasses = ['subPhase-steps', this.state.color];
    let timeUnitPlural
      = TimeUtil.adjustTimeUnitForPluralization(Number(this.state.time),
                                                this.state.timeUnit);
    return (
      <div className="subPhase">
        <div className={timelineClasses.join(' ')}>
          <p>{this.state.time}</p>
          <p>{timeUnitPlural}</p>
        </div>
        <div className={stepsClasses.join(' ')}>
          <h5>{this.state.name}</h5>
          <ReorderableStepList listId={`${this.state.name}-steps`}
            initialItems={this.state.steps} />
        </div>
      </div>
    );
  }
}
