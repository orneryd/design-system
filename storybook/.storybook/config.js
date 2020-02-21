import { configure, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css';
import '../src/components/Typography/Typography.css';

addParameters({
  options: {
    enableShortcuts: false
  },
})
const req = requireContext('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
