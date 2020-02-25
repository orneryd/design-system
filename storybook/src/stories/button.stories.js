import React from 'react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import '../../../packages/button'
import '../../../packages/paper'

export default {
  title: 'Web Components/Button',
  decorators: [withKnobs]
}

const label = 'Variants'
const options = {
  Primary: 'primary',
  PrimaryRounded: 'primary rounded',
  Secondary: 'secondary',
  SecondaryRounded: 'secondary rounded',
  Outlined: 'outlined',
  OutlinedRounded: 'outlined rounded'
}
const defaultValue = 'primary'
const groupId = 'Buttons'

const styles = { 
  textTransform: 'capitalize',
  margin: '1rem',
}

export const Button = () => (
  <mds-button
    style={styles}
    variant={select(label, options, defaultValue, groupId)}
    disabled={boolean('Disabled', false, groupId)}
  >
    {select(label, options, defaultValue, groupId)}
  </mds-button>
)
export const Anchor = () => (
  <mds-button
    style={styles}
    href="https://www.google.com"
    target="_blank"
    variant={select(label, options, defaultValue, groupId)}
    disabled={boolean('Disabled', false, groupId)}
  >
    {select(label, options, defaultValue, groupId)}
  </mds-button>
)
