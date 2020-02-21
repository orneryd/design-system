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
    return this.getAttribute('pattern') || ''
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

  handleBlur() {
    if (!this.value) {
      this.inputWrapper.classList.remove('focus')
    } else if (this.required) {
      if (!this.value.match(this.pattern)) {
        this.setAttribute('valid', 'false')
        this.classList.add('invalid')
        this.inputElement.classList.add('invalid')
        return;
      } 
    }
    this.setAttribute('valid', 'true')
    this.classList.remove('invalid')
    this.inputElement.classList.remove('invalid')
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
  }
}

customElements.define('mds-text-input', MdsTextInput)
