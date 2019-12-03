import { configure, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css';
import '../src/components/Typography/Typography.css';

// import mckTheme from './mckTheme';
// //
// addParameters({
//   options: {
//     theme: mckTheme,
//   },
// })
// automatically import all files ending in *.stories.js
// configure(require.context('../src', true, /\.stories\.js$/), module);
const req = requireContext('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
