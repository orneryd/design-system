import InputBase from '../../base/src/input'
import textInputTemplate from './mds-text-input.html'

export default class MdsTextInput extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get type() {
    return this.getAttribute('type') || 'text'
  }

  get inputWrapper() {
    return this.shadowRoot.querySelector('.mds-text-input-wrapper')
  }

  handleInputChange({ target: { value } }) {
    this.value = value
  }

  handleBlur() {
    if (!this.value) {
      // unfocus the element if we don't have value to let the animation reset.
      this.inputWrapper.classList.remove('focus')
    }
    this.setValidity()
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
    textInputTemplate(this).connect()
    if (this.required) {
      this.notifyValidity(this.validationMessage)
    }
  }
}

customElements.define('mds-text-input', InputBase(MdsTextInput))
