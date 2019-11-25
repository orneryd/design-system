import { configure, addParameters } from '@storybook/react';
import mckTheme from './mckTheme';
//
addParameters({
  options: {
    theme: mckTheme,
  },
})
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
