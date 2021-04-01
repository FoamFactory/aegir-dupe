import React from 'react';
import ReactTooltip from 'react-tooltip';

import { TimeUtil } from '../../util/TimeUtil';

import './BrewTimeline.scss';

export class BrewTimeline extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      phases: props.phases
    }
  }

  onMouseEnter(e) {
    console.log(e.target.getAttribute('id'));
    this.setState({
      mouseIn: e.target.id
    });
  }

  onMouseLeave(e) {
    this.setState({
      mouseIn: null
    });
  }

  render() {
    let totalDays = 0;
    let phases = [];

    for (let phaseIdx in this.state.phases) {
      let phase = this.state.phases[phaseIdx];
      totalDays += TimeUtil.convertToDays(phase.length);
    }

    let totalDaysLabel = totalDays > 1 ? 'days' : 'day';

    for (let phaseIdx in this.state.phases) {
      let phase = this.state.phases[phaseIdx];
      let phaseStyle = {
        width: `${(TimeUtil.convertToDays(phase.length) / totalDays) * 100}%`
      };

      let phaseClasses = phase.className;
      let phaseId = `timeline-phase-${phase.id}`;
      if (this.state.mouseIn && phaseId !== this.state.mouseIn) {
        phaseClasses += " faded";
      }

      let phaseDays = TimeUtil.convertToDays(phase.length);
      let phaseLabel = phaseDays !== 1 ? 'days' : 'day';

      phases.push((<div data-tip={`${phase.title}<br />(${phaseDays} ${phaseLabel})`} id={phaseId} key={`timeline-phase-${phase.id}`} className={phaseClasses} style={phaseStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}><ReactTooltip className="brewTimeline-tooltip" html={true}/></div>));
    }

    return (
      <div className="brewTimeline">
        <div className="brewTimeline-bar">
          {phases}
        </div>
        <div className="brewTimeline-measure">
          <div className="brewTimeline-measure-left"></div>
          <hr />
          <div className="brewTimeline-measure-label">{`${totalDays} ${totalDaysLabel}`}</div>
          <hr />
          <div className="brewTimeline-measure-right"></div>
        </div>
      </div>
    );
  }
}
