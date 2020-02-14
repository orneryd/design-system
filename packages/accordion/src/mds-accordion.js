import accordionTemplate from './mds-accordion.html'

export default class MdsAccordion extends HTMLElement {
  constructor(self) {
    super(self)
    self = this
    this.attachShadow({ mode: 'open' })
  }

  onHeaderClick() {
    const isOpen = this.getAttribute('state') === 'open'
    const eventOptions = { detail: isOpen ? 'collapse' : 'open'}
    this.setAttribute('state', eventOptions.detail)
    this.dispatchEvent(new CustomEvent('accordion-state', eventOptions))
  }

  toggleCollapse(){
    const contentSlot = this.shadowRoot.querySelector('.mds-accordion-content')
    const slotContents = this.querySelector('[slot=accordion-content]')
    const headerIcon = this.shadowRoot.querySelector('.mds-accordion-header-icon')
    const isOpen = this.getAttribute('state') === 'open'
    // val can be either false or number
    const val = (isOpen && slotContents.scrollHeight)
    // if val is false, javascript evalues the next expression in the ternary 
    // and returns that value regardless of the truthyness.
    const newHeight = (val || 0)
    // now we always end up with a number.
    contentSlot.style.height = `${newHeight}px`
    isOpen ? headerIcon.classList.add('open') : headerIcon.classList.remove('open')
  }

  connectedCallback() {
    accordionTemplate(this).connect()
    this.mutationsObserver_ = new MutationObserver(() => this.toggleCollapse())
    this.mutationsObserver_.observe(this, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    })
  }
}

customElements.define('mds-accordion', MdsAccordion)
