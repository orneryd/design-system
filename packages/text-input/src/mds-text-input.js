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

  get type(){
    return this.getAttribute('type') || 'text'
  }

  get value() {
    return this.getAttribute('value') || ''
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
    this.shadowRoot.querySelector('.mds-text-input').focus()
  }

  get inputWrapper() {
    return this.shadowRoot.querySelector('.mds-text-input-wrapper')
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
