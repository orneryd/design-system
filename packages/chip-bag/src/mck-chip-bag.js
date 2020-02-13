import chipBagTemplate from './mck-chip-bag.html'

const ENTER_KEY_CODE = 13
const BACKSPACE_KEY_CODE = 8

export default class MckChipBag extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.chips = []
  }

  get inputElement() {
    return this.shadowRoot.querySelector('.mck-chip-bag-input')
  }

  get delimiter() {
    return new RegExp(this.getAttribute('delimiter'), 'gim')
  }

  handleInputKeydown({ keyCode }) {
    if (keyCode === ENTER_KEY_CODE) {
      this.processInputText(this.inputElement.value)
      this.render()
    } else if (!this.inputElement.value && keyCode === BACKSPACE_KEY_CODE) {
      this.removeChip({ detail: this.chips[this.chips.length - 1] })
    }
  }

  processInputText(textVal) {
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
    this.dispatchEvent(new CustomEvent('updatechips', { detail: this.chips }))
    this.setAttribute('chips-length', this.chips.length)
  }

  connectedCallback() {
    this.allowDups = this.getAttribute('allow-duplicates') === 'true'
    this.render()
    this.addEventListener('click', this.focusInput)
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.focusInput)
  }

  focusInput() {
    this.inputElement.focus()
  }

  removeChip({ detail }) {
    this.chips.splice(this.chips.indexOf(detail), 1)
    this.dispatchEvent(new CustomEvent('updatechips', { detail: this.chips }))
    this.setAttribute('chips-length', this.chips.length)
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = ''
    const attrsToAdd = []
    Array.from(this.attributes).forEach(attr => {
      if (attr.nodeName === 'value') {
        this.removeAttributeNode(attr)
        this.processInputText(attr.nodeValue)
      } else if (attr.nodeName !== 'slot' && attr.nodeName !== 'class') {
        attrsToAdd.push(attr)
      }
    })
    chipBagTemplate(this).connect()
    attrsToAdd.forEach(attr => {
      this.inputElement.setAttributeNode(attr.cloneNode())
    })
    this.focusInput()
  }
}

customElements.define('mck-chip-bag', MckChipBag)
