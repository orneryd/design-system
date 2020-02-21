import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import '../../../packages/banner'

export default {
  title: 'Web Components/Panels',
  decorators: [withKnobs]
}

export const Banner = () => (
  <mds-banner class="header">
    <span slot="header">Lorem Ipsum</span>
    <span slot="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </span>
    <span slot="content">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.
    </span>
  </mds-banner>
)
