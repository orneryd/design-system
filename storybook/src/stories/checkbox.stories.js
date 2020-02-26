import React from 'react'

import '../../../packages/checkbox'
import { withKnobs, boolean } from '@storybook/addon-knobs'


export default {
  title: 'Web Components/Checkbox',
  decorators: [withKnobs]
}

export const Checkbox = () => (
  <div style={{ width: '500px', margin: '20px' }}>
    <mds-checkbox checked={boolean('Checked', false, 'checkbox')} label="Some Label" />
  </div>
)