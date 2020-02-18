import renderPaper from './mds-paper.html'

export default class MdsPaper extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    renderPaper(this).connect()
  }
}

customElements.define('mds-paper', MdsPaper)
