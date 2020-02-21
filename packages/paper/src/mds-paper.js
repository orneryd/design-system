import renderPaper from './mds-paper.html'

export default class MdsPaper extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes(){ 
    return ['elevation']
  }
  
  attributeChangedCallback(){
    const root = this.shadowRoot.querySelector('.paper')
    if (root) {
      root.classList.remove(`elevation-${this.currentElevation}`)
      this.currentElevation = this.elevation;
      root.classList.add(`elevation-${this.currentElevation}`)
    }
  }

  get elevation() {
    return this.getAttribute('elevation') || '1'
  }

  connectedCallback() {
    this.currentElevation = this.elevation;
    renderPaper(this).connect()
  }
}

customElements.define('mds-paper', MdsPaper)
