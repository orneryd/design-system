import renderButton from './mds-button.html'
import renderSubmitButton from './mds-button.submit.html'

export default class MdsButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes(){
    return ['variant', 'disabled']
  }

  attributeChangedCallback(){
    this.render()
  }

  get variant() {
    return this.getAttribute('variant') || 'primary'
  }

  get disabled(){
    return this.hasAttribute('disabled') ? 'disabled': 'enabled'
  }
  get href(){
    const url = this.getAttribute('href') || this.getAttribute('to') || '';
    return url && `href="${url}"`
  }

  onClick(event){
    event.preventDefault()
    if (this.getAttribute('type') === 'submit') {
      let form = document.getElementById(this.getAttribute('form'))
      if (!form && this.closest) {
        form = this.closest('form')
      } 
      form && form.dispatchEvent(new Event('submit'))
    }
    this.dispatchEvent(new Event('click', {bubbles: true, composed: true}))
  }

  connectedCallback() {
    this.render()
  }

  render() {
    if (this.getAttribute('type') === 'submit') {
      this.value = this.getAttribute('value') || "Submit";
      renderSubmitButton(this).connect()
    } else {
      renderButton(this).connect()
    }
  }
}

customElements.define('mds-button', MdsButton)
