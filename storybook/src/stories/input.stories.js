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
export const Email = () => (
  <div style={{ width: '500px', margin: '20px' }}>
    <form>
    <mds-text-input required pattern=".+@.+\..+" type="email" label="Type an email to be validated" />
    </form>
  </div>
)

export const EmailDomain = () => (
  <div style={{ width: '500px', margin: '20px' }}>
    <form>
    <mds-text-input required pattern=".+@mckesson\..+" type="email" label="Please type in a McKesson email address" />
    </form>
  </div>
)