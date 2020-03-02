import chipBagTemplate from './mds-chip-bag.html'

export const ENTER_KEY_CODE = 13
export const BACKSPACE_KEY_CODE = 8

/**
# mckesson-design-system chip-bag
A styled chip container that functions similar to a Chip Array

## Installation

### npm
```bash
npm i @mcklabs/mds-chip-bag --save
```

### yarn
```bash
yarn add @mcklabs/mds-chip-bag
```

 */
export default class MdsChipBag extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.chips = []
  }

  static get observedAttributes() {
    return ['invalid']
  }

  checkInvalid() {
    const root = this.shadowRoot.querySelector('.mds-chip-bag')

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
    return this.shadowRoot.querySelector('.mds-chip-bag-input')
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
    return `<${this.chipTag} class="mds-chip" onclick="this.chipClick" onclosechip="this.removeChip">`
  }

  get chipTag() {
    return this.getAttribute('chip-tag') || 'mds-chip'
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

customElements.define('mds-chip-bag', MdsChipBag)
