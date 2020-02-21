import renderButton from './mds-button.html'

export default class MdsButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes(){
    return ['variant', 'disabled']
  }

  attributeChangedCallback(){
    renderButton(this).connect()
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

  connectedCallback() {
    renderButton(this).connect()
  }
}

customElements.define('mds-button', MdsButton)
