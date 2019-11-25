import { create } from '@storybook/theming';

const brand__color_blueTint20 = 'rgba(204,222,232,1)';
const brand__color_blueShade20 = 'rgba(0,72,112,1)';

export default create({
  base: 'light',

  // Typography
  fontBase: 'Arial, Roboto, Helvetica, sans-serif',
  fontCode: 'monospace',

  brandTitle: ' ',
  brandUrl: 'https://example.com',
  // brandImage: 'https://placehold.it/350x150',
});
