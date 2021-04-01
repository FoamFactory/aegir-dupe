// TODO_jwir3: This really should be a library... we shouldn't be handling this
//             time-conversion nonsense.

let timeUnits = [
    'years',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes'
];

let adjustTimeUnitForPluralization = (timePeriod, timeUnit) => {
  if (timePeriod === 1) {
    return timeUnit.slice(0, -1);
  }

  return timeUnit;
}

let convertToDays = (timePeriod) => {
  let unit = timePeriod.unit;

  // XXX_jwir3: This isn't EXACTLY right, to be honest. It should not use just
  //            some default amount of days in a year or month, but instead
  //            use the period from the start date, if that's available, or,
  //            if not available, use the period starting from TODAY.
  switch (unit) {
    case 'years':
      return timePeriod.amount * 365.0;
    case 'months':
      return timePeriod.amount * 30.0;
    case 'weeks':
      return timePeriod.amount * 7.0;
    case 'days':
      return timePeriod.amount;
    case 'hours':
      return timePeriod.amount / 24.0;
    case 'minutes':
      return timePeriod.amount / 1440;
    default:
      return timePeriod.amount;
  }
}

let convertToMinutes = (sourceTimeAmount, sourceTimeUnit) => {
  switch (sourceTimeUnit) {
    case 'years':
    case 'year':
      return Number(sourceTimeAmount) * 365 * 24 * 60;
    case 'months':
    case 'month':
      return Number(sourceTimeAmount) * 30 * 24 * 60;
    case 'weeks':
    case 'week':
      return Number(sourceTimeAmount) * 7 * 24 * 60;
    case 'days':
    case 'day':
      return Number(sourceTimeAmount) * 24 * 60;
    case 'hours':
    case 'hour':
      return Number(sourceTimeAmount) * 60;
    default:
      return Number(sourceTimeAmount);
  }
}

let convertMinsToGreatestPossibleWholeUnit = (time) => {
  let asYears = time / (365*24*60);
  let asMonths = time / (30*24*60);
  let asWeeks = time / (7*24*60);
  let asDays = time / (24*60);
  let asHours = time / 60;

  if (Number.isInteger(asYears) && asYears > 0) {
      return {
        value: asYears,
        units: 'years'
      }
  } else if (Number.isInteger(asMonths) && asMonths > 0) {
    return {
      value: asMonths,
      units: 'months'
    }
  } else if (Number.isInteger(asWeeks) && asWeeks > 0) {
    return {
      value: asWeeks,
      units: 'weeks'
    }
  } else if (Number.isInteger(asDays) && asDays > 0) {
    return {
      value: asDays,
      units: 'days'
    }
  } else if (Number.isInteger(asHours) && asHours > 0) {
    return {
      value: asHours,
      units: 'hours'
    }
  } else {
    return {
      value: time,
      units: 'minutes'
    }
  }
}

let TimeUtil = {
  adjustTimeUnitForPluralization: adjustTimeUnitForPluralization,
  convertToDays: convertToDays,
  convertToMinutes: convertToMinutes,
  convertMinsToGreatestPossibleWholeUnit: convertMinsToGreatestPossibleWholeUnit,
  timeUnits: timeUnits
};

export { TimeUtil };
