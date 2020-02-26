import textInputTemplate from './mds-checkbox.html'
import InputBase from '../../base/src/input'

export default class MdsCheckbox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.defaultChecked = this.checked;
  }
  static get observedAttributes() {
    return ['checked']
  }

  attributeChangedCallback(name){
    if (this.inputElement && name === 'checked') {
      this.setCheckedState()
    }
  }

  setCheckedState(){
    if (this.checked) {
      this.inputElement.setAttribute('checked', '')
      this.indicatorElement.classList.add('checked')
      this.value = 'checked'
    } else {
      this.inputElement.removeAttribute('checked')
      this.indicatorElement.classList.remove('checked')
      this.value = ''
    }
    this.setValidity()
  }

  get indicatorElement(){
    return this.shadowRoot.querySelector('.mds-checkbox-circle')
  }

  get checked() {
    return (this.hasAttribute('checked') && this.getAttribute('checked') !== 'false')
  }

  get validationMessage(){
    const message = this.getAttribute('validation-message') || `${this.label} is required.`
    return this.required ? message : ''
  }

  get inputWrapper() {
    return this.shadowRoot.querySelector('.mds-checkbox-wrapper')
  }

  onClick() {
    //toggle
    if (this.checked) {
      this.removeAttribute('checked')
    } else {
      this.setAttribute('checked', '')
    }
    this.setCheckedState()
  }

  reset(value = ''){
    if (this.defaultChecked) {
      this.setAttribute('checked', value)
    } else {
      this.removeAttribute('checked')
    }
  }

  connectedCallback() {
   this.render()
  }

  render(){
    textInputTemplate(this).connect()
    this.setCheckedState()
  }
}

customElements.define('mds-checkbox', InputBase(MdsCheckbox))
