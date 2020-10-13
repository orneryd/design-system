import React, { useState } from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import '@ornery/ui-text-input'
import '@ornery/ui-checkbox'

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
    return false;
  }
  return (
    <div style={{ width: '360px', margin: '20px' }}>
      <iframe title="dummy" name="dummyframe" id="dummyframe" style={{ display: 'none' }}></iframe>
      <form id="sample-form" onSubmit={e => validateForm(e)} target="dummyframe">
        <ui-text-input
          class="validated-input"
          required
          pattern=".+@(ornery|usoncology)\.(ca|ie|com)"
          type="email"
          label="Please type a ornery or US Oncology email address"
        />
        <ui-button type="submit" form="sample-form">
          Submit &amp; Clear
        </ui-button>
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
      elements.forEach(e => {
        const message = `form value: ${e.id} = checked:${e.checked} value:${e.value}`
        friendlyMessages.push(message)
        e.value = ''
      })

      setValid(true)
    } else {
      elements.forEach(e => {
        friendlyMessages.push(`form value: ${e.id} = ${e.value} | ${e.validationMessage || ''}`)
      })

      setValid(false)
    }
  }
  return (
    <div style={{ width: '360px', margin: '20px' }}>
      <iframe title="dummy" name="dummyframe" id="dummyframe" style={{ display: 'none' }}></iframe>
      <form id="sample-form" onSubmit={e => validateForm(e)} target="dummyframe">
        <ui-text-input
          id="email"
          class="validated-input"
          required
          pattern=".+@(ornery|usoncology)\.(ca|ie|com)"
          validation-message="Not a valid ornery email address"
          type="email"
          label="Please type a ornery or US Oncology email address"
        />
        <ui-checkbox
          id="required-checkbox"
          label="Required Boolean"
          required
          checked={boolean('Checked', false, 'Required Checkbox')}
        ></ui-checkbox>
        <ui-checkbox
          id="optional-checkbox"
          label="Optional Boolean"
          checked={boolean('Checked', false, 'Optional Checkbox')}
        ></ui-checkbox>
        <br/>
        <div>Select a fruit:</div>
        <ui-radio name="fruit" value="Strawberry" />
        <ui-radio name="fruit" value="Orange" />
        <ui-radio name="fruit" value="Lemon" />
        <ui-button type="submit" form="sample-form">
          Submit &amp; Clear
        </ui-button>
        {friendlyMessages.map(message => (
          <h5 key={message} className={`validation-message ${!valid && 'error'}`}>
            {message}
          </h5>
        ))}
      </form>
    </div>
  )
}
