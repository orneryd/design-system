import radioTemplate from './mds-radio.html'
import InputBase from '../../base/src/input'

export default class MdsRadio extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get value() {
    return this.getAttribute('value') || ''
  }

  static get observedAttributes() {
    return ['checked']
  }

  attributeChangedCallback() {
    if (this.inputElement && name === 'checked') {
      this.setCheckedState()
    }
  }

  set value(newValue) {
    if (newValue) {
      this.setAttribute('checked', '')
    } else {
      this.removeAttribute('checked')
    }
  }

  get value() {
    return this.getAttribute('value') || this.label
  }

  get checked() {
    return this.hasAttribute('checked')
  }

  setCheckedState() {
    if (this.checked) {
      this.inputElement.setAttribute('checked', '')
      this.indicatorElement.classList.add('checked')
    } else {
      this.inputElement.removeAttribute('checked')
      this.indicatorElement.classList.remove('checked')
    }
    this.setValidity()
    this.clone.setAttribute('id', this.getAttribute('id') || this.getAttribute('name'))
    this.clone.setAttribute('name', this.getAttribute('name'))
    this.clone.setAttribute('value', this.value)
  }

  // set checked(newVal) {
  //   // if (newVal) {
  //   //   this.setAttribute('checked', '')
  //   //   this.clone.setAttribute('checked', '')
  //   // } else {
  //   //   this.removeAttribute('checked')
  //   //   this.clone.removeAttribute('checked')
  //   // }
  //   // this.clone.setAttribute('id', this.getAttribute('id') || this.getAttribute('name'))
  //   // this.clone.setAttribute('name', this.getAttribute('name'))
  //   // this.clone.setAttribute('value', this.value)
  // }

  get validationMessage() {
    const message = this.getAttribute('validation-message') || `${this.label} is required.`
    return this.required ? message : ''
  }

  get indicatorElement() {
    return this.shadowRoot.querySelector('.mds-radio-circle')
  }

  onClick(e) {
    document.querySelectorAll(`mds-radio[name="${this.name}"]`).forEach(e => {
      if (e.value === this.value) {
        e.setAttribute('checked', '')
      } else {
        e.removeAttribute('checked')
      }
      e.setCheckedState()
    })
  }

  reset() {
    if (this.defaultChecked) {
      this.setAttribute('checked', '')
    } else {
      this.removeAttribute('checked')
    }
  }

  connectedCallback() {
    if (this.getAttribute('checked') === 'false') {
      this.removeAttribute('checked')
    }
    this.defaultChecked = this.checked
    this.setAttribute('type', 'radio')
    this.render()
  }

  render() {
    radioTemplate(this).connect()
    this.setCheckedState()
  }
}

customElements.define('mds-radio', InputBase(MdsRadio))
