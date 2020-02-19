import renderBanner from './mds-banner.html'

export default class MdsBanner extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    renderBanner(this).connect()
  }
}

customElements.define('mds-banner', MdsBanner)
