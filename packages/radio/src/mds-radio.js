import {registerComponent} from '@mcklabs/mds-core'
import InputBase from '@mcklabs/mds-input-base'
import radioTemplate from './mds-radio.html'


/**
# mckesson-design-system checkbox
A styled checkbox by the mckesson design team.

## Installation

### npm
```bash
npm i `@mcklabs/mds-radio` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-radio`
```

### HTML Usage
```html
<form style="width: 360px; margin: 20px;">
  <mds-radio type="radio" name="fruit" checked value="Strawberry" />
  <mds-radio type="radio" name="fruit" value="Orange" />
  <mds-radio type="radio" name="fruit" value="Lemon" />
</form>
```

### React Component
```jsx
import `@mcklabs/mds-radio`

export const buttons = () => (
  <form style={{ width: '360px', margin: '20px' }}>
    <mds-radio type="radio" name="fruit" checked value="Strawberry" />
    <mds-radio type="radio" name="fruit" value="Orange" />
    <mds-radio type="radio" name="fruit" value="Lemon" />
  </form>
)
```

### Rendered in the browser

![](samples/radio.png)
<br/>
 *
 *
 * @module MdsRadio
 * @extends {HTMLElement}
 * @element mds-radio
 * @description A component that gives you a styled radio button that is spec compliant and can be used within normal `form` elements.
 * 
 * @attr {String} checked - the checked status
 * @attr {String} label - the checkbox label text
 * @attr {String} name - the checkbox label text
 * @attr {String} value - the checkbox value
 * @attr {String} disabled - sets the enabled or disabled state
 * 
 * @cssproperty {String} --mdsRadioBorder - Overrides the border color
 * @cssproperty {String} --mdsRadioColorChecked - Overrides the color of the checked indicator
 * 
 */
export default class MdsRadio extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get value() {
    return this.getAttribute('value') || ''
  }

  static get observedAttributes() {
    return ['checked']
  }

  attributeChangedCallback() {
    if (this.inputElement && name === 'checked') {
      this.setCheckedState()
    }
  }

  set value(newValue) {
    if (newValue) {
      this.setAttribute('checked', '')
    } else {
      this.removeAttribute('checked')
    }
  }

  get value() {
    return this.getAttribute('value') || this.label
  }

  get checked() {
    if (this.hasAttribute('checked')) {
      let current = this.getAttribute('checked')
      if (current === 'false') {
        return false
      }
      return true
    }
    return false
  }

  get standard() {
    return this.hasAttribute('standard') ? 'standard' : ''
  }

  setCheckedState() {
    if (this.checked) {
      this.inputElement.setAttribute('checked', '')
      this.inputElement.checked = true;
      this.indicatorElement.classList.add('checked')
    } else {
      this.inputElement.removeAttribute('checked')
      this.inputElement.checked = false;
      this.indicatorElement.classList.remove('checked')
    }
    this.setValidity()
    this.clone.setAttribute('id', this.getAttribute('id') || this.getAttribute('name'))
    this.clone.setAttribute('name', this.getAttribute('name'))
    this.clone.setAttribute('value', this.value)
  }

  get validationMessage() {
    const message = this.getAttribute('validation-message') || `${this.label} is required.`
    return this.required ? message : ''
  }

  get indicatorElement() {
    return this.shadowRoot.querySelector('.mds-radio-circle')
  }

  onClick(e) {
    document.querySelectorAll(`mds-radio[name="${this.name}"]`).forEach(e => {
      if (e.value === this.value) {
        e.setAttribute('checked', '')
      } else {
        e.removeAttribute('checked')
      }
      e.setCheckedState()
    })
  }

  reset() {
    if (this.defaultChecked) {
      this.setAttribute('checked', '')
    } else {
      this.removeAttribute('checked')
    }
  }

  connectedCallback() {
    this.defaultChecked = this.checked
    this.setAttribute('type', 'radio')
    this.render()
  }

  render() {
    radioTemplate(this).connect()
    this.setCheckedState()
  }
}

registerComponent('mds-radio', InputBase(MdsRadio))
