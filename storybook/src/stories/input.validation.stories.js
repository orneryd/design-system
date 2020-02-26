import React, { useState } from 'react'

import '../../../packages/text-input/dist/mds-text-input'
import './input.stories.css'

export default {
  title: 'Web Components/Input Validation'
}

export const Email = () => (
  <div style={{ width: '500px', margin: '20px' }}>
    <form>
      <mds-text-input
        class="validated-input"
        required
        pattern=".+@.+\..+"
        type="email"
        label="Type an email to be validated"
      />
    </form>
  </div>
)
const messages = []

export const EmailDomainValidation = () => {

  const [valid, setValid] = useState(!messages.length)
  function validateForm(event) {
    event.preventDefault()
    messages.length = 0
    if (!event.target.checkValidity()) {
      event.target.elements.forEach(e => {
        if (e.validationMessage) {
          messages.push(e.validationMessage)
        }
      })
    } else {
      event.target.elements.forEach((e)=>{
        e.value = ''
      })
    }
    setValid(!messages.length)
  }
  return (
    <div style={{ width: '500px', margin: '20px' }}>
      <iframe title="dummy" name="dummyframe" id="dummyframe" style={{ display: 'none' }}></iframe>
      {!valid &&
        messages.map((message, i) => (
          <h5 key={i} className="validation-message error">
            {message}
          </h5>
        ))}
      <form id="sample-form" onSubmit={e => validateForm(e)} target="dummyframe">
        <mds-text-input
          class="validated-input"
          required
          pattern=".+@(mckesson|usoncology)\.(ca|ie|com)"
          type="email"
          label="Please type in a McKesson or US Oncology email address"
        />
        <mds-button type="submit" form="sample-form">
          Submit Email
        </mds-button>
      </form>
    </div>
  )
}
const friendlyMessages = []

export const EmailDomainFriendlyMessage = () => {

  const [valid, setValid] = useState(!friendlyMessages.length)
  function validateForm(event) {
    event.preventDefault()
    friendlyMessages.length = 0
    debugger

    if (!event.target.checkValidity()) {
      event.target.elements.forEach(e => {
        if (e.validationMessage) {
          friendlyMessages.push(e.validationMessage)
        }
      })
    } else {
      event.target.elements.forEach((e)=>{
        e.value = ''
      })
    }
    setValid(!friendlyMessages.length)
  }
  return (
    <div style={{ width: '500px', margin: '20px' }}>
      <iframe title="dummy" name="dummyframe" id="dummyframe" style={{ display: 'none' }}></iframe>
      <form id="sample-form" onSubmit={e => validateForm(e)} target="dummyframe">
        {!valid &&
          friendlyMessages.map((message, i) => (
            <h5 key={i} className="validation-message error">
              {message}
            </h5>
          ))}
        <mds-text-input
          class="validated-input"
          required
          pattern=".+@(mckesson|usoncology)\.(ca|ie|com)"
          validation-message="Not a valid McKesson email address"
          type="email"
          label="Please type in a McKesson or US Oncology email address"
        />
        <mds-button type="submit" form="sample-form">
          Submit Email
        </mds-button>
      </form>
    </div>
  )
}
