import React from 'react'

import '@ornery/dita-map'
import { withKnobs, boolean } from '@storybook/addon-knobs'


export default {
  title: 'Web Components/Dita',
  decorators: [withKnobs]
}

export const DitaMap = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <dita-map href="/samples/sample.dita"></dita-map>
  </div>
)

export const DitaConcept = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    
  </div>
)