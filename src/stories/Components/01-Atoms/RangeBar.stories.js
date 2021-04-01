import React from 'react';

import { RangeBar } from '../../../';

const argTypes = {
  label: {
    control: 'text'
  },
  type: {
    control: { disable: true }
  },
  value: {
    control: { type: 'number' }
  }
};

export default {
  title: 'Components/Atoms/RangeBar',
  component: RangeBar
};

const Template = (args) => {
  return (
    <RangeBar {...args} />
  );
}

export const Temperature = Template.bind({});
Temperature.argTypes = {
  ...argTypes,
  min: {
    control: {
      type: 'range',
      min: 0,
      max: 90,
      step: 1
    }
  },
  max: {
    control: {
      type: 'range',
      min: 0,
      max: 90,
      step: 1
    }
  },
  styleRangeMax: {
    control: {
      type: 'range',
      min: 0,
      max: 90,
      step: 1
    }
  },
  styleRangeMin: {
    control: {
      type: 'range',
      min: 0,
      max: 90,
      step: 1
    }
  }
};

Temperature.args = {
  label: '°F',
  type: 'temperature',
  min: 30,
  max: 90,
  styleRangeMin: 64,
  styleRangeMax: 72,
  value: 68
};

export const IBU = Template.bind({});
IBU.argTypes = {
  ...argTypes,
  min: {
    control: {
      type: 'range',
      min: 0,
      max: 200,
      step: 1
    }
  },
  max: {
    control: {
      type: 'range',
      min: 0,
      max: 200,
      step: 1
    }
  },
  styleRangeMax: {
    control: {
      type: 'range',
      min: 0,
      max: 200,
      step: 1
    }
  },
  styleRangeMin: {
    control: {
      type: 'range',
      min: 0,
      max: 200,
      step: 1
    }
  }
};

IBU.args = {
  label: 'IBU',
  type: 'ibu',
  min: 0,
  max: 100,
  styleRangeMin: 40,
  styleRangeMax: 60,
  value: 50
};

export const SRM = Template.bind({});
SRM.argTypes = {
  ...argTypes,
  min: {
    control: {
      type: 'range',
      min: 0,
      max: 40,
      step: 1
    }
  },
  max: {
    control: {
      type: 'range',
      min: 0,
      max: 40,
      step: 1
    }
  },
  styleRangeMax: {
    control: {
      type: 'range',
      min: 0,
      max: 40,
      step: 1
    }
  },
  styleRangeMin: {
    control: {
      type: 'range',
      min: 0,
      max: 40,
      step: 1
    }
  }
};

SRM.args = {
  label: 'SRM',
  type: 'srm',
  min: 0,
  max: 40,
  styleRangeMin: 12,
  styleRangeMax: 22,
  value: 21.44
};

export const Gravity = Template.bind({});
Gravity.argTypes = {
  ...argTypes,
  min: {
    control: {
      type: 'range',
      min: 0,
      max: 40,
      step: 1
    }
  },
  max: {
    control: {
      type: 'range',
      min: 0,
      max: 40,
      step: 1
    }
  },
  styleRangeMax: {
    control: {
      type: 'range',
      min: 0,
      max: 40,
      step: 1
    }
  },
  styleRangeMin: {
    control: {
      type: 'range',
      min: 0,
      max: 40,
      step: 1
    }
  }
};

Gravity.args = {
  label: 'Final Gravity',
  type: 'gravity',
  min: 1.000,
  max: 1.020,
  styleRangeMin: 1.010,
  styleRangeMax: 1.017,
  value: 1.017
};
