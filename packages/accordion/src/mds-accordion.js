import accordionTemplate from './mds-accordion.html'

/**
 * @module MdsAccordion
 * @extends {HTMLElement} 
 * @description Component that allows you to collapse and expand content within a root [MdsPaper]{@link ../packages/paper} Element
 *
 * @example @lang html
 * <mds-paper elevation="6"></mwc-paper>
 *
 * @example @lang jsx
 * export const accordion = () => (
 * <div>
 *   <mds-accordion
 *     elevation={3}
 *     state="open"
 *   >
 *     <div slot="accordion-header">Default open</div>
 *     <div slot="accordion-content">
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
 *      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
 *      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
 *      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
 *      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *     </div>
 *   </mds-accordion>
 * </div>
 * )
 */
export default class MdsAccordion extends HTMLElement {
  constructor(self) {
    super(self)
    self = this
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['elevation']
  }

  attributeChangedCallback() {
    const root = this.shadowRoot.querySelector('mds-paper')
    if (root) {
      root.setAttribute('elevation', this.elevation)
    }
  }

  onHeaderClick() {
    const isOpen = this.getAttribute('state') === 'open'
    const eventOptions = { detail: isOpen ? 'collapse' : 'open' }
    this.setAttribute('state', eventOptions.detail)
    this.dispatchEvent(new CustomEvent('accordion-state', eventOptions))
  }

  get elevation() {
    return this.getAttribute('elevation') || 3
  }

  toggleCollapse() {
    const contentSlot = this.shadowRoot.querySelector('.mds-accordion-content')
    const slotContents = this.querySelector('[slot=accordion-content]')
    const headerIcon = this.shadowRoot.querySelector('.mds-accordion-header-icon')
    const isOpen = this.getAttribute('state') === 'open'
    // val can be either false or number
    const val = isOpen && slotContents.scrollHeight
    // if val is false, javascript evalues the next expression in the ternary
    // and returns that value regardless of the truthyness.
    const newHeight = val || 0
    // now we always end up with a number.
    contentSlot.style.height = `${newHeight}px`
    isOpen ? headerIcon.classList.add('open') : headerIcon.classList.remove('open')
  }
  connectedCallback() {
    accordionTemplate(this).connect()
    if (this.getAttribute('state') === 'open') {
      this.toggleCollapse()
    }
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
