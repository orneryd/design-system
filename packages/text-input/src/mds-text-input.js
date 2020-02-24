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

  setInvalid(){
    this.setAttribute('valid', 'false')
    this.classList.remove('valid')
    this.classList.add('invalid')
  }

  setValid(){
    this.setAttribute('valid', 'true')
    this.classList.remove('invalid')
    this.classList.add('valid')
  }

  handleBlur() {
    if (!this.value) {
      // unfocus the element if we don't have value to let the animation reset.
      this.inputWrapper.classList.remove('focus')
    }
    // assume we are valid first
    let valid = true;
    // check if input is a required field and we have a value
    // if not required, our assumption that we are valid is correct.
    if (this.required) {
       // if we have no value set validity false.
       // or check to see if we have a pattern to match against 
       // if the value doesn't match against the pattern, set valid false.
      if (!this.value || (this.pattern && !this.value.match(this.pattern))) {
        valid = false;
      }
    } 
    // finally, set the validity.
    if (valid){
      this.setValid()
    } else {
      this.setInvalid();
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
    if (this.pattern) {
      // we have a pattern so we need to mark it required.
      this.setAttribute('required', '')
    }
  }
}

customElements.define('mds-text-input', MdsTextInput)
