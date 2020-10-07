import {registerComponent} from '@ornery/mds-core'
import InputBase from '@ornery/mds-input-base'
import checkboxTemplate from './mds-checkbox.html'

/**
# design-system checkbox
A styled checkbox by the ornery design team.

## Installation

### npm
```bash
npm i `@ornery/mds-checkbox` --save
```

### yarn
```bash
yarn add `@ornery/mds-checkbox`
```

### HTML Usage
```html
<form>
  <mds-checkbox checked label="Some Label" />
</form>
```

### React Component
```jsx
import `@ornery/mds-checkbox`

export const buttons = () => (
  <form style={{ width: '360px', margin: '20px' }}>
    <mds-checkbox checked={"true"} label="Some Label" />
  </form>
)
```

### Rendered in the browser

![](samples/checkbox.png)
<br/>
 *
 *
 * @module MdsCheckbox
 * @extends {HTMLElement}
 * @element mds-checkbox
 * @description A components that gives you a styled checkbox that is spec compliant and can be used within normal `form` elements.
 * 
 * @attr {String} checked - the checked status
 * @attr {String} label - the checkbox label text
 * @attr {String} disabled - sets the enabled or disabled state
 * 
 * @cssproperty {String} --mdsCheckboxBorder - Overrides the border color
 * @cssproperty {String} --mdsCheckboxColorChecked - Overrides the color of the checkbox
 *
 */
export default class MdsCheckbox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  static get observedAttributes() {
    return ['checked']
  }

  attributeChangedCallback(name) {
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
    return this.checked ? 'checked' : ''
  }

  setCheckedState() {
    if (this.checked) {
      this.inputElement.setAttribute('checked', '')
      this.indicatorElement.classList.add('checked')
    } else {
      this.inputElement.removeAttribute('checked')
      this.indicatorElement.classList.remove('checked')
    }
    this.setValidity()
  }

  get indicatorElement() {
    return this.shadowRoot.querySelector('.mds-checkbox-circle')
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
  
  get validationMessage() {
    const message = this.getAttribute('validation-message') || `${this.label} is required.`
    return this.required ? message : ''
  }

  get inputWrapper() {
    return this.shadowRoot.querySelector('.mds-checkbox-wrapper')
  }

  onClick() {
    //toggle
    if (this.checked) {
      this.removeAttribute('checked')
    } else {
      this.setAttribute('checked', '')
    }
    this.setCheckedState()
  }

  reset() {
    if (this.defaultChecked) {
      this.setAttribute('checked', '')
    } else {
      this.removeAttribute('checked')
    }
  }

  connectedCallback() {
    if (this.getAttribute('checked') === 'false') {
      this.removeAttribute('checked')
    } else {
      this.setAttribute('checked', '')
    }
    this.defaultChecked = this.checked
    this.setAttribute('type', 'checkbox')
    this.render()
  }

  render() {
    checkboxTemplate(this).connect()
    this.setCheckedState()
  }
}

registerComponent('mds-checkbox', InputBase(MdsCheckbox))
