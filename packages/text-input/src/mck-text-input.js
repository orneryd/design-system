import textInputTemplate from './mck-text-input.html'
import { generateId } from '../../base/src/base'

export default class MckTextInput extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  set value(newValue) {
    this.setAttribute('value', newValue)
  }

  get value() {
    return this.getAttribute('value')
  }

  get label() {
    return this.getAttribute('label')
  }

  get inputElement() {
    return this.shadowRoot.querySelector('input')
  }

  handleInputChange({ target: { value } }) {
    this.value = value
  }

  handleBlur() {
    if (!this.value) {
      this.inputWrapper.classList.remove('focus')
    }
  }

  handleFocus() {
    this.inputWrapper.classList.add('focus')
  }

  focusInput() {
    this.shadowRoot.querySelector('.mck-text-input').focus()
  }

  get inputWrapper() {
    return this.shadowRoot.querySelector('.mck-text-input-wrapper')
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

customElements.define('mck-text-input', MckTextInput)
