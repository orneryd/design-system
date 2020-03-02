import React from 'react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import '../../../packages/button/dist/mds-button'
import '../../../packages/paper/dist/mds-paper'

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
  margin: '1rem'
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

export const AllButtons = () => {
  return (
    <div>
      <div style={{margin: '10px'}}>
        <mds-button variant="primary">Primary</mds-button>
      </div>
      <div style={{margin: '10px'}}>
        <mds-button variant="primary rounded">Primary Rounded</mds-button>
      </div>
      <div style={{margin: '10px'}}>
        <mds-button variant="primary" disabled>
          Primary Disabled
        </mds-button>
      </div>
      <div style={{margin: '10px'}}>
        <mds-button variant="secondary">Secondary</mds-button>
      </div>
      <div style={{margin: '10px'}}>
        <mds-button variant="secondary rounded" disabled="">
          Secondary Rounded
        </mds-button>
      </div>
      <div style={{margin: '10px'}}>
        <mds-button variant="secondary" disabled>
          Secondary Disabled
        </mds-button>
      </div>
      <div style={{margin: '10px'}}>
        <mds-button variant="outlined">Outlined</mds-button>
      </div>
      <div style={{margin: '10px'}}>
        <mds-button variant="outlined rounded">Outlined Rounded</mds-button>
      </div>
      <div style={{margin: '10px'}}>
        <mds-button variant="outlined" disabled>
          Outlined Disabled
        </mds-button>
      </div>
    </div>
  )
}
