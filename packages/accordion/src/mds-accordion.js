import accordionTemplate from './mds-accordion.html'

/**
 *
# mckesson-design-system accordion
A styled accordion or expandable panel that allows for a header and content. the component will dynamically expand to the size of the contents.

## Installation

### npm
```bash
npm i `@mcklabs/mds-accordion` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-accordion`
```

### Rendered
![](samples/accordion.png)

### Usage

```html
<mds-accordion elevation="6" state="open">
  <div slot="accordion-header">Default open</div>
  <div slot="accordion-content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</mwc-accordion>
```

### React Component

```jsx
import `@mcklabs/mds-accordion`

export const accordion = () => (
  <mds-accordion
    elevation={6}
  >
    <div slot="accordion-header">Default collapse</div>
    <div slot="accordion-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </mds-accordion>
)
```

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:root {
  --mdsAccordionIconColor: purple;
  --mdsAccordionIconColorHover: orange;
}
```

### Rendered in the browser
![](samples/accordion-custom.gif)

 * 
 * @module MdsAccordion
 * @element mds-accordion
 * @extends {HTMLElement}
 * @description Component that allows you to collapse and expand content within a root MdsPaper
 * @attr {String} [elevation=3] - Sets the elevation for the accordion's internal MdsPaper
 * @attr {String} [state=collapse] - Sets the initial state and can be toggled to open or close it
 * 
 * @fires accordion-state - the current state of the accordion
 * 
 * @property {enum} AccordionState &lt;mds-accordion state="${AccordionState}" /&gt;
 * @property {String} open Set the accordion to open
 * @property {String} collapse Set the accordion to collaspe
 * 
 * @cssproperty --mdsAccordionIconColor - Overrides the icon color for the accordion indicator button.
 * @cssproperty --mdsAccordionIconColorHover - Overrides the icon color on :hover for the accordion indicator button.
 *
 */
export default class MdsAccordion extends HTMLElement {
  constructor() {
    super()
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
    return this.getAttribute('elevation') || "3"
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