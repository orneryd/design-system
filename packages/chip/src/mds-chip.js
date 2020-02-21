import renderChip from './mds-chip.html'

export default class MdsChip extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  closeChip() {
    this.dispatchEvent(new Event('closechip', { bubbles: true, composed: true, cancelable: false }))
  }

  connectedCallback() {
    renderChip(this).connect()
  }
}

customElements.define('mds-chip', MdsChip)
