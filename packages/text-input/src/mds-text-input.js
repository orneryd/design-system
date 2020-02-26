import textInputTemplate from './mds-text-input.html'
import { generateId } from '../../base/src/base'

export default class MdsTextInput extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  set value(newValue) {
    this.setAttribute('value', newValue)
  }

  get required() {
    return this.hasAttribute('required') ? 'required' : ''
  }

  get pattern() {
    return this.getAttribute('pattern') || '.*'
  }

  get type() {
    return this.getAttribute('type') || 'text'
  }

  get value() {
    return this.getAttribute('value') || ''
  }

  get label() {
    return this.getAttribute('label')
  }

  get inputElement() {
    return this.shadowRoot.querySelector('.mds-text-input')
  }

  get inputWrapper() {
    return this.shadowRoot.querySelector('.mds-text-input-wrapper')
  }

  handleInputChange({ target: { value } }) {
    this.value = value
  }

  setInvalid() {
    this.setAttribute('valid', 'false')
    this.classList.remove('valid')
    this.classList.add('invalid')
    this.notifyValidity(this.validationMessage)
  }

  get validationMessage() {
    return this.getAttribute('validation-message') || `${this.value} does not match ${this.pattern}`
  }

  setValid() {
    this.setAttribute('valid', 'true')
    this.classList.remove('invalid')
    this.classList.add('valid')
    this.notifyValidity('')
  }

  reset(newVal) {
    this.inputElement.value = newVal
    this.value = newVal
    this.inputWrapper.classList.remove('focus')
    this.classList.remove('valid')
    this.classList.remove('invalid')
  }

  notifyValidity(message) {
    this.clone && this.removeChild(this.clone)
    this.clone = this.inputElement.cloneNode()
    this.clone.setCustomValidity(message)
    Object.defineProperty(this.clone, 'value', {
      set: newVal => this.reset(newVal),
      get: () => this.value
    })
    this.appendChild(this.clone)
  }

  handleBlur() {
    if (!this.value) {
      // unfocus the element if we don't have value to let the animation reset.
      this.inputWrapper.classList.remove('focus')
    }
    this.setValidity()
  }

  setValidity() {
    // assume we are valid first
    let valid = true
    // check if input is a required field and we have a value
    // if not required, our assumption that we are valid is correct.
    if (this.required && !this.value) {
      // if we have no value set validity false.
      valid = false
    }
    // or check to see if we have a pattern to match against
    // if the value doesn't match against the pattern, set valid false.
    if (this.pattern && !this.value.match(this.pattern)) {
      valid = false
    }
    // finally, set the validity.
    if (valid) {
      this.setValid()
    } else {
      this.setInvalid()
    }
  }

  handleFocus() {
    this.inputWrapper.classList.add('focus')
  }

  focusInput() {
    this.shadowRoot.querySelector('.mds-text-input').focus()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const uniqueId = this.getAttribute('id')
    this.inputId = uniqueId || generateId()
    textInputTemplate(this).connect()
    if (this.required) {
      this.notifyValidity(this.validationMessage)
    }
  }
}

customElements.define('mds-text-input', MdsTextInput)
