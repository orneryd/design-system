import textInputTemplate from './mds-checkbox.html'
import InputBase from '../../base/src/input'

export default class MdsCheckbox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  static get observedAttributes() {
    return ['checked']
  }

  setCheckedState(){
    if (this.hasAttribute('checked') && this.getAttribute('checked') !== 'false') {
      this.inputElement.setAttribute('checked', '')
    } else {
      this.inputElement.removeAttribute('checked')
    }
  }

  attributeChangedCallback(name){
    if (this.inputElement && name === 'checked') {
      this.setCheckedState()
    }
  }

  get checked() {
    return this.hasAttribute('checked') && this.getAttribute('checked') !== 'false'
  }

  set checked(newValue){
    if (newValue && newValue !== false) {
      this.setAttribute('checked', '')
    } else {
      this.removeAttribute('checked')
    }
    this.value = newValue
  }

  get validationMessage(){
    const message = this.getAttribute('validation-message') || `${this.label} is required.`
    return this.required ? message : super.validationMessage
  }

  get inputWrapper() {
    return this.shadowRoot.querySelector('.mds-checkbox-wrapper')
  }

  handleChange({target}) {
    this.value = target.checked;
    this.setValidity()
  }

  connectedCallback() {
    textInputTemplate(this).connect()
    this.setCheckedState()
  }
}

customElements.define('mds-checkbox', InputBase(MdsCheckbox))
