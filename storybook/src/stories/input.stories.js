import React from 'react'

import '../../../packages/text-input'
import './input.stories.css';

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
    <mds-text-input class="validated-input" required pattern=".+@.+\..+" type="email" label="Type an email to be validated" />
    </form>
  </div>
)

export const EmailDomain = () => (
  <div style={{ width: '500px', margin: '20px' }}>
    <form>
      <mds-text-input class="validated-input" required pattern=".+@(mckesson|usoncology)\..+" type="email" label="Please type in a McKesson or US Oncology email address" />
      <mds-button>Send Email</mds-button>
    </form>
  </div>
)