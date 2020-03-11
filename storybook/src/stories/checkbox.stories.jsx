import React from 'react'

import '@mcklabs/mds-checkbox'
import '@mcklabs/mds-radio'
import { withKnobs, boolean } from '@storybook/addon-knobs'


export default {
  title: 'Web Components/Checkbox',
  decorators: [withKnobs]
}

export const Checkbox = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <mds-checkbox checked={boolean('Checked', false, 'checkbox')} label="Some Label" />
  </div>
)

export const Radio = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <mds-radio type="radio" name="fruit" checked value="Strawberry" />
    <mds-radio type="radio" name="fruit" value="Orange" />
    <mds-radio type="radio" name="fruit" value="Lemon" />
  </div>
)