import React from 'react'

import '../../../packages/paper'
import '../../../packages/chip'
import '../../../packages/chip-bag'
import '../../../packages/button'

export default {
  title: 'Web Components/Chip Bag',
}

export const ChipBag = () => (
  <mds-paper>
    <mds-chip-bag value="sample;chips" delimiter=";">
      <div slot="chip-bag-helper">Add some chips!</div>
    </mds-chip-bag>
  </mds-paper>
)

export const CustomChipBag = () => (
  <mds-paper>
    <mds-chip-bag value="sample;chips" chip-tag="mds-button" delimiter=";">
      <div slot="chip-bag-helper">Add some chips!</div>
    </mds-chip-bag>
  </mds-paper>
)
