import React from 'react';

import { RibbonArrow } from '../02-Molecules/RibbonArrow';

import { TimeUtil } from '../../util/TimeUtil';

import './SchedulePhase.scss';

export class SchedulePhase extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onSubPhaseUpdated = this.onSubPhaseUpdated.bind(this);

    this.childrenWithProps = React.Children.map(props.children, child => {
      if (React.isValidElement(child) && !("onSubPhaseUpdated" in child.props)) {
        return React.cloneElement(child, {
          onSubPhaseUpdated: this.onSubPhaseUpdated
        });
      }

      return child;
    });

    this.state = {
      phases: {}
    };
  }

  onSubPhaseUpdated(subPhaseName, prevSubPhaseTime, prevSubPhaseTimeUnit,
                    subPhaseTime, subPhaseTimeUnit) {
    this.setState(function(state, props) {
      let phases = {};
      phases[subPhaseName] = {
        time: Number(subPhaseTime),
        units: subPhaseTimeUnit
      };

      for (let oldKey in state.phases) {
        if (oldKey !== subPhaseName) {
          phases[oldKey] = state.phases[oldKey];
        }
      }

      return {
        phases: phases
      }
    });
  }

  render() {
    let totalTimeMinutes = 0;
    for (let key in this.state.phases) {
      let subPhaseTiming = this.state.phases[key];
      let subPhaseTimeMinutes = TimeUtil.convertToMinutes(subPhaseTiming.time,
                                                          subPhaseTiming.units);

      totalTimeMinutes += subPhaseTimeMinutes;
    }

    let totalTime =
      TimeUtil.convertMinsToGreatestPossibleWholeUnit(totalTimeMinutes);
    let timeUnit
      = TimeUtil.adjustTimeUnitForPluralization(totalTime.value,
                                                totalTime.units);
    let timeline = `${totalTime.value} ${timeUnit}`;

    return (
      <div className="schedule-phase">
        <RibbonArrow phase={this.props.phaseName} timeline={timeline} />
        <div className="schedule">
          { this.childrenWithProps }
        </div>
      </div>
    );
  }
}
