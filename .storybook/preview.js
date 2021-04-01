import { addParameters } from '@storybook/react';

addParameters({
  statuses: {
    proposed: '#8b008b',
    unstable: '#FF9233',
    stable: '#2e8b57',
    deprecated: '#dc143c',
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: '',
      order: [
              'Colors',
                ['All Colors', 'Primary Colors', 'Secondary Colors', 'Tertiary Colors', 'Background Colors', 'Neutral Colors'],
              'Iconography',
                ['All Icons'],
              'Components',
                ['Atoms', 'Molecules', 'Cells', 'Organs', 'Organisms']
              ],
      locales: '',
    },
  },

  status: 'proposed'
}
