import React from 'react'

import '../../../packages/checkbox'
import { withKnobs, boolean } from '@storybook/addon-knobs'


export default {
  title: 'Web Components/Checkbox',
  decorators: [withKnobs]
}

export const Checkbox = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <mds-checkbox value={boolean('value', false, 'checkbox')} label="Some Label" />
  </div>
)