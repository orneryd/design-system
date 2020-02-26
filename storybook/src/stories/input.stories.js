import React from 'react'

import '../../../packages/text-input'

export default {
  title: 'Web Components/Input'
}

export const Text = () => (
  <div style={{ width: '500px', margin: '20px' }}>
    <mds-text-input label="Some Label" />
  </div>
)
export const InitialValue = () => (
  <div style={{ width: '500px', margin: '20px' }}>
    <mds-text-input value="some initial value" label="I have an initial Value" />
  </div>
)
export const Secure = () => (
  <div style={{ width: '500px', margin: '20px' }}>
    <mds-text-input type="password" label="Type Some Secure Text" />
  </div>
)