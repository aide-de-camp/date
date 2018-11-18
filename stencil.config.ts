import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'adc-date',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
