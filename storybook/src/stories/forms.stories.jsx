import React, { useState } from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import '../../../packages/text-input/dist/mds-text-input'
import '../../../packages/checkbox/dist/mds-checkbox'
import './input.stories.css'

export default {
  title: 'Web Components/Forms',
  decorators: [withKnobs]
}

const messages = []

export const EmailDomainValidation = () => {
  const [valid, setValid] = useState(false)
  function validateForm(event) {
    event.preventDefault()
    messages.length = 0
    const elements = [...event.target.elements]
    if (event.target.checkValidity()) {
      elements.forEach(e => {
        const message = `form value: ${e.id || e.name} = ${e.value}`
        messages.push(message)
        e.value = ''
      })
    } else {
      elements.forEach(e => {
        console.log(`form value: ${e.id || e.name} = ${e.value}; ${e.validationMessage}`)
        if (e.validationMessage) {
          messages.push(e.validationMessage)
        }
      })
    }
    setValid(event.target.checkValidity())
  }
  return (
    <div style={{ width: '360px', margin: '20px' }}>
      <iframe title="dummy" name="dummyframe" id="dummyframe" style={{ display: 'none' }}></iframe>
      <form id="sample-form" onSubmit={e => validateForm(e)} target="dummyframe">
        <mds-text-input
          class="validated-input"
          required
          pattern=".+@(mckesson|usoncology)\.(ca|ie|com)"
          type="email"
          label="Please type a McKesson or US Oncology email address"
        />
        <mds-button type="submit" form="sample-form">
          Submit &amp; Clear
        </mds-button>
        {messages.map(message => (
          <h5 key={message} className={`validation-message ${!valid && 'error'}`}>
            {message}
          </h5>
        ))}
      </form>
    </div>
  )
}
const friendlyMessages = []

export const InputsWithCheckboxes = () => {
  const [valid, setValid] = useState(true)
  function validateForm(event) {
    event.preventDefault()
    friendlyMessages.length = 0
    const elements = [...event.target.elements]
    if (event.target.checkValidity()) {
      console.log(event.target.elements)
      elements.map(e => {
        const message = `form value: ${e.id} = checked:${e.checked} value:${e.value}`
        friendlyMessages.push(message)
        e.value = ''
      })

      setValid(true)
    } else {
      elements.map(e => {
        friendlyMessages.push(`form value: ${e.id} = ${e.value} | ${e.validationMessage || ''}`)
      })

      setValid(false)
    }
  }
  return (
    <div style={{ width: '360px', margin: '20px' }}>
      <iframe title="dummy" name="dummyframe" id="dummyframe" style={{ display: 'none' }}></iframe>
      <form id="sample-form" onSubmit={e => validateForm(e)} target="dummyframe">
        <mds-text-input
          id="email"
          class="validated-input"
          required
          pattern=".+@(mckesson|usoncology)\.(ca|ie|com)"
          validation-message="Not a valid McKesson email address"
          type="email"
          label="Please type a McKesson or US Oncology email address"
        />
        <mds-checkbox
          id="required-checkbox"
          label="Required Boolean"
          required
          checked={boolean('Checked', false, 'Required Checkbox')}
        ></mds-checkbox>
        <mds-checkbox
          id="optional-checkbox"
          label="Optional Boolean"
          checked={boolean('Checked', false, 'Optional Checkbox')}
        ></mds-checkbox>
        <br/>
        <div>Select a fruit:</div>
        <mds-radio name="fruit" value="Strawberry" />
        <mds-radio name="fruit" value="Orange" />
        <mds-radio name="fruit" value="Lemon" />
        <mds-button type="submit" form="sample-form">
          Submit &amp; Clear
        </mds-button>
        {friendlyMessages.map(message => (
          <h5 key={message} className={`validation-message ${!valid && 'error'}`}>
            {message}
          </h5>
        ))}
      </form>
    </div>
  )
}
