import React from 'react'

import '@ornery/dita-map'
import '@ornery/dita-concept'
import { withKnobs, boolean } from '@storybook/addon-knobs'


export default {
  title: 'Web Components/Dita',
  decorators: [withKnobs]
}

export const Map = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <dita-map href="/samples/sample.dita"></dita-map>
  </div>
)

export const Concept = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <dita-concept>
      <title>I am an expandable header</title>
      <conbody>
        I can render dita XML like &lt;conbody&gt;
      </conbody>
    </dita-concept>
  </div>
)