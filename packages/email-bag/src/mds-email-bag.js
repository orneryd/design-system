import '@mcklabs/mds-chip-bag'
import { registerComponent } from '@mcklabs/mds-core'
import emailBagTemplate from './mds-email-bag.html'

/**
A form input designed to validate emails against McKesson's email lookup API.
It functions similarly to that of the chip-bag but with an asynchronous api call for validation

### Usage

```html
<mds-email-bag></mds-email-bag>
```

### React WebComponentWrapper
```jsx
import `@mcklabs/mds-email-bag`
import WebComponentWrapper from '@mcklabs/mds-react'

export const ToolingForm = ({ onValidationstart, onValidationend }) => (
  <WebComponentWrapper 
    tag="mds-email-bag" 
    onValidationstart={onValidationstart} 
    onValidationend={onValidationend} 
  />
)
```
### React Component
```jsx
import `@mcklabs/mds-email-bag`
import WebComponentWrapper from '@mcklabs/mds-react'

export const ToolingForm = ({ onFormSuccess }) => (
   <mds-email-bag></mds-email-bag>
)
```
 *
 * @module ToolingForm
 * @element mds-email-bag
 * @extends {HTMLElement}
 * @description A form input designed to validate emails against McKesson's email lookup API. It functions similarly to that of the chip-bag but with an asynchronous api call for validation
 * 
 * @attr {String} email-lookup-route - The entire path for the user lookup service. default `/api/v1/emails`
 * 
 * @fires validationstart - Before the validation API call is executed. 
 * @fires validationend - After the validation API call is executed. Event.detail is the complete list of emails. In case of an error, event.detail is an error.
 * 
 */
export default class EmailBag extends HTMLElement {
  constructor(self) {
    super(self)
    self = this
    this.attachShadow({ mode: 'open' })
  }

  set value(value) {
    this.setAttribute('value', value)
  }

  get value() {
    return this.getAttribute('value')
  }

  get chipBag() {
    return this.shadowRoot.querySelector('mds-chip-bag')
  }

  get spinner() {
    return this.shadowRoot.querySelector('.spinner-ring')
  }

  get emailLookupRoute() {
    return this.getAttribute('email-lookup-route') || '/api/v1/emails'
  }

  validateEmail(email) {
    return fetch(this.emailLookupRoute, {
      method: 'POST',
      body: email,
      headers: {
        'Content-Type': 'text/html'
      }
    }).then(response => {
      if (response.status < 400) {
        return response.json()
      } else {
        return Promise.reject({ email, error: `${email} ${response.statusText}` })
      }
    })
  }

  chipsUpdate(e) {
    const incomingEmails = e.detail
    this.value = incomingEmails.join(';')

    if (this.hasAttribute('skip-check')) {
      return Promise.resolve(incomingEmails)
    }

    this.dispatchEvent(new CustomEvent('validationstart'))

    if (incomingEmails.length === 0) {
      if (this.hasAttribute('required')) {
        this.notifyValidity(`${this.validMessage}`)
        this.setInvalidCSS()
      } else {
        this.notifyValidity(``)
        this.removeInvalidCSS()
      }
    } else {
      const acceptableDomains = this.domains
      const invalidEmails = incomingEmails.filter(v => !v.match(acceptableDomains))
      if (invalidEmails.length > 0) {
        const badEmails = `Invalid: ${invalidEmails.join(';')}`
        this.notifyValidity(`${this.validMessage}\n${badEmails}`)
        this.setInvalidCSS()
        return Promise.resolve(badEmails)
      } else {
        this.spinner.style.visibility = 'visible'
        const emailValidationCalls = []
        const emailValidationFailures = []
        incomingEmails.forEach(email => {
          emailValidationCalls.push(
            this.validateEmail(email, {
              headers: {
                'Content-Type': 'text/html'
              }
            }).catch(({ error }) => {
              emailValidationFailures.push(`${error}; `)
            })
          )
        })
        return Promise.all(emailValidationCalls).then(() => {
          const validationMessage = decodeURIComponent(emailValidationFailures.join(''))
          if (validationMessage) {
            this.setInvalidCSS()
          } else {
            this.removeInvalidCSS()
          }
          this.notifyValidity(validationMessage)
          this.spinner.style.visibility = 'hidden'
          this.dispatchEvent(new CustomEvent('validationend', { detail: incomingEmails }))
          return incomingEmails
        })
      }
    }
  }

  setInvalidCSS() {
    this.shadowRoot.querySelector('.emails').setAttribute('invalid', '')
    this.shadowRoot.querySelector('.error-text').classList.add('invalid')
  }

  removeInvalidCSS() {
    this.shadowRoot.querySelector('.emails').removeAttribute('invalid')
    this.shadowRoot.querySelector('.error-text').classList.remove('invalid')
  }

  get domains() {
    return `.+@(${this.getAttribute('domains') || '.*'})\\..+`
  }

  reset(newVal) {
    this.value = newVal
    this.render()
  }

  notifyValidity(message) {
    this.shadowRoot.querySelector('.error-text').textContent = message
    this.clone && this.removeChild(this.clone)
    this.clone = this.chipBag.inputElement.cloneNode()
    this.clone.style.visibility = 'hidden'
    this.clone.setAttribute('value', this.value)
    this.clone.setCustomValidity(message)
    this.clone.id = this.getAttribute('id')
    if (!this.hasAttribute('required')) {
      this.clone.removeAttribute('required')
    }
    Object.defineProperty(this.clone, 'value', {
      set: newVal => this.reset(newVal),
      get: () => this.value
    })
    this.appendChild(this.clone)
  }

  get validMessage() {
    return this.getAttribute('validation-message') || 'Required'
  }

  connectedCallback() {
    this.render()
  }
  render() {
    emailBagTemplate(this).connect()
    if (this.hasAttribute('value')) {
      this.chipBag.chips = this.getAttribute('value').split(/;\s*/);
      this.chipBag.render()
    }
    this.notifyValidity(this.hasAttribute('required') ? this.validMessage : '')
  }
}

registerComponent('mds-email-bag', EmailBag)
