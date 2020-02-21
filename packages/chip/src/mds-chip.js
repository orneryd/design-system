import renderChip from './mds-chip.html'

export default class MdsChip extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  closeChip() {
    this.dispatchEvent(new CustomEvent('closechip', { detail: this }))
  }

  connectedCallback() {
    renderChip(this).connect()
  }
}

customElements.define('mds-chip', MdsChip)
