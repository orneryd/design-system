import React from 'react'
import { storiesOf } from '@storybook/react'
import '../../../packages/paper'
import '../../../packages/chip-bag'

storiesOf('Web Components | Inputs', module).add('Chip Bag', () => (
  <mds-paper>
    <mds-chip-bag value="sample;chips" delimiter=";">
      <div slot="chip-bag-helper">Add some chips!</div>
    </mds-chip-bag>
  </mds-paper>
))
