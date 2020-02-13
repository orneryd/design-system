import renderChip from './mck-chip.html'

export default class MckChip extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get chipText() {
    return this.getAttribute('chip-text')
  }

  closeChip() {
    this.dispatchEvent(new CustomEvent('closechip', { detail: this.getAttribute('chip-text') }))
    this.parentElement.removeChild(this)
  }

  connectedCallback() {
    renderChip(this).connect()
  }
}

customElements.define('mck-chip', MckChip)
