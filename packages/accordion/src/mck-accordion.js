import accordionTemplate from './mck-accordion.html'

export default class MckAccordion extends HTMLElement {
  constructor(self) {
    super(self)
    self = this
    this.attachShadow({ mode: 'open' })
  }

  onHeaderClick() {
    const contentSlot = this.shadowRoot.querySelector('.mck-accordion-content')
    const headerIcon = this.shadowRoot.querySelector('.mck-accordion-header-icon')
    const isOpen = !contentSlot.style.height
    if (isOpen) {
      headerIcon.classList.add('open')
    } else {
      headerIcon.classList.remove('open')
    }
    const eventOptions = { detail: isOpen ? 'open' : 'collapse' }
    this.setAttribute('state', eventOptions.detail)
    this.dispatchEvent(new CustomEvent('accordion-state', eventOptions))
    contentSlot.style.height = isOpen ? contentSlot.scrollHeight + 'px' : null

    const remove = () => {
      contentSlot.removeEventListener('transitionend', remove)
    }
    contentSlot.addEventListener('transitionend', remove)
  }

  connectedCallback() {
    accordionTemplate(this).connect()
    this.mutationsObserver_ = new MutationObserver(() => {
      const accordionContent = this.shadowRoot.querySelector('.mck-accordion-content')
      const slotContents = this.querySelector('[slot=accordion-content]')
      const isOpen = this.getAttribute('state') === 'open'
      const headerIcon = this.shadowRoot.querySelector('.mck-accordion-header-icon')
      if (isOpen) {
        headerIcon.classList.add('open')
        accordionContent.style.height = slotContents.scrollHeight + 'px'
      } else {
        headerIcon.classList.remove('open')
      }
    })
    this.mutationsObserver_.observe(this, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    })
  }
}

customElements.define('mck-accordion', MckAccordion)
