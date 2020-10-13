import React from 'react'

import '@ornery/ui-checkbox'
import '@ornery/ui-radio'
import { withKnobs, boolean } from '@storybook/addon-knobs'


export default {
  title: 'Web Components/Checkbox',
  decorators: [withKnobs]
}

export const Checkbox = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-checkbox checked={boolean('Checked', false, 'checkbox')} label="Some Label" />
  </div>
)

export const Radio = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-radio type="radio" name="fruit" checked value="Strawberry" />
    <ui-radio type="radio" name="fruit" value="Orange" />
    <ui-radio type="radio" name="fruit" value="Lemon" />
  </div>
)