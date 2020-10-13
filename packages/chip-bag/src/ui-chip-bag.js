import '@ornery/ui-chip'
import {registerComponent} from '@ornery/ui-core'
import chipBagTemplate from './ui-chip-bag.html'

export const ENTER_KEY_CODE = 13
export const BACKSPACE_KEY_CODE = 8

/**
# design-system chip-bag
A styled chip-bag by the ornery design team.

## Installation

### npm
```bash
npm i `@ornery/ui-chip-bag` --save
```

### yarn
```bash
yarn add `@ornery/ui-chip-bag`
```

### HTML Usage
```html
<ui-chip-bag label="Some Label" />
<ui-chip-bag value="some initial value" label="I have an initial Value" />
<ui-chip-bag type="password" label="Type Some Secure Text" />
```

### React Component
```jsx
import `@ornery/ui-chip-bag`

export const Text = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-chip-bag label="Some Label" />
  </div>
)
export const InitialValue = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-chip-bag value="some initial value" label="I have an initial Value" />
  </div>
)
export const Secure = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-chip-bag type="password" label="Type Some Secure Text" />
  </div>
)

```

### Rendered in the browser

![](samples/input.png)
<br/>
 *
 *
 * @module UIChipBag
 * @extends {HTMLElement}
 * @element ui-chip-bag
 * @description A component that gives you a bag of chips or other element you want 
 * 
 * @attr {String} value - the current set of chips, semicolon delimited
 * @attr {String} invalid - wether the input is valid or not
 * @attr {String} delimiter - the regex expression to split the input on
 * @attr {String} chips-length - tbhe number of chips in the bag
 * @attr {String} allow-duplicates - allows the addition of duplicate chip values
 * @attr {String} chip-tag - changes the chip tag from ui-chip
 * 
 * @fires chipclick when a chip is clicked
 * @fires chipsupdate when the bag is modified by removing or adding a chip
 * 
 * @cssproperty {String} --uiChipBagUnderline - Overrides the input underline indictator
 * @cssproperty {String} --uiChipBagUnderlineInvalid - Overrides the label transform property
 * 
 */
export default class UIChipBag extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.chips = []
  }

  static get observedAttributes() {
    return ['invalid']
  }

  checkInvalid() {
    const root = this.shadowRoot.querySelector('.ui-chip-bag')

    if (root) {
      if (this.hasAttribute('invalid') && this.getAttribute('invalid') !== 'false') {
        root.classList.add('invalid')
      } else {
        root.classList.remove('invalid')
      }
    }
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    this.checkInvalid()
  }

  get inputElement() {
    return this.shadowRoot.querySelector('.ui-chip-bag-input')
  }

  get delimiter() {
    return new RegExp(this.getAttribute('delimiter'), 'gim')
  }

  handleInputKeydown({ keyCode }) {
    if (this.chips.length && !this.inputElement.value && keyCode === BACKSPACE_KEY_CODE) {
      this.removeChip({ target: { innerHTML: this.chips[this.chips.length - 1] } })
      this.focusInput()
    }
  }

  handleInputKeyup({ keyCode }) {
    if (keyCode === ENTER_KEY_CODE) {
      this.addChips(this.inputElement.value)
      this.render()
      this.focusInput()
    }
  }

  addChips(textVal) {
    textVal = (textVal && textVal.trim()) || ''
    if (this.getAttribute('delimiter')) {
      textVal = textVal.split(this.delimiter)
    } else {
      textVal = [textVal]
    }
    textVal.forEach(v => {
      const shouldAdd = v && (this.allowDups || this.chips.indexOf(v) === -1)
      if (shouldAdd) {
        this.chips.push(v)
      }
    })
    this.notify()
    this.setAttribute('chips-length', this.chips.length)
  }

  get allowDups() {
    return this.getAttribute('allow-duplicates') === 'true'
  }

  get chipCloseTag() {
    return `</${this.chipTag}>`
  }

  get chipStartTag() {
    return `<${this.chipTag} class="ui-chip" onclick="this.chipClick" onclosechip="this.removeChip">`
  }

  get chipTag() {
    return this.getAttribute('chip-tag') || 'ui-chip'
  }

  connectedCallback() {
    this.render()
    this.addEventListener('click', this.focusInput)
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.focusInput)
  }

  handleBlur() {
    if (this.inputElement.value) {
      this.addChips(this.inputElement.value)
      this.render()
    }
  }

  focusInput() {
    this.inputElement.focus()
  }

  chipClick({ target }) {
    this.dispatchEvent(
      new CustomEvent('chipclick', { detail: target, bubbles: true, composed: true })
    )
  }

  removeChip({ target }) {
    this.chips.splice(this.chips.indexOf(target.innerHTML), 1)
    this.setAttribute('chips-length', this.chips.length)
    this.notify()
    this.render()
  }

  notify() {
    this.dispatchEvent(
      new CustomEvent('chipsupdate', { detail: this.chips, bubbles: true, composed: true })
    )
  }

  render() {
    this.shadowRoot.innerHTML = ''
    const attrsToAdd = []
    Array.from(this.attributes).forEach(attr => {
      if (attr.name === 'value') {
        this.addChips(attr.value)
        this.removeAttribute(attr.name)
      } else if (attr.name !== 'slot' && attr.name !== 'class') {
        attrsToAdd.push(attr)
      }
    })
    chipBagTemplate(this).connect()
    attrsToAdd.forEach(attr => {
      this.inputElement.setAttribute(attr.name, attr.value)
    })
    this.checkInvalid()
  }
}

registerComponent('ui-chip-bag', UIChipBag)
