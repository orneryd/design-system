import renderButton from './mds-button.html'

export default class MdsButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['variant', 'disabled']
  }

  attributeChangedCallback(name) {
    if (name === 'disabled' && this.buttonElement) {
      if (this.isDisabled) {
        this.buttonElement.classList.add('disabled')
        this.buttonElement.setAttribute('disabled', 'disabled')
        this.classList.add('disabled')
      } else {
        this.buttonElement.classList.remove('disabled')
        this.buttonElement.removeAttribute('disabled', 'disabled')
        this.classList.remove('disabled')
      }
    } 
    if (name === 'variant') {
      this.render()
    }
  }

  get tag() {
    return this.href ? 'a': 'button';
  }
  
  get startTag() {
    return `<${this.tag} onclick="this.onClick" ${this.href} class="mds-button ${this.variant}">`
  }
  get closeTag() {
    return `</${this.tag}>`
  }

  get isDisabled() {
    return this.hasAttribute('disabled') && this.getAttribute('disabled') !== 'false'
  }

  get buttonElement() {
    return this.shadowRoot.querySelector('.mds-button')
  }

  get variant() {
    return this.getAttribute('variant') || 'primary'
  }

  get href() {
    const url = this.getAttribute('href') || this.getAttribute('to') || ''
    const target = this.getAttribute('target') || '_blank'
    return url && `href="${url}" target="${target}"`
  }

  onClick(event) {
    if (this.isDisabled) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
    if (this.getAttribute('type') === 'submit') {
      let form = document.getElementById(this.getAttribute('form'))
      if (!form && this.closest) {
        form = this.closest('form')
      }
      form && form.dispatchEvent(new Event('submit'))
    }
  }

  connectedCallback() {
    this.render()
  }

  render() {
    renderButton(this).connect()
  }
}

customElements.define('mds-button', MdsButton)
