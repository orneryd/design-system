import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

const theme = create({
  base: 'light',

  // colorPrimary: 'white',
  // colorSecondary: 'deepskyblue',

  // // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: 'Roboto',
  fontWeight: '300',
  fontCode: 'monospace',

  // Text colors
  // textColor: 'silver',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'rgba(255,255,255,0.9)',
  // barSelectedColor: 'white',
  // barBg: 'deepskyblue',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Ornery Design System',
  brandUrl: 'https://github.com/ornery/design-system',
  brandImage: '/logo192.png',
});

addons.setConfig({
  theme,
});
