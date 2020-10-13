import {registerComponent} from '@ornery/ui-core'
import InputBase from '@ornery/ui-input-base'
import checkboxTemplate from './ui-checkbox.html'

/**
# design-system checkbox
A styled checkbox by the ornery design team.

## Installation

### npm
```bash
npm i `@ornery/ui-checkbox` --save
```

### yarn
```bash
yarn add `@ornery/ui-checkbox`
```

### HTML Usage
```html
<form>
  <ui-checkbox checked label="Some Label" />
</form>
```

### React Component
```jsx
import `@ornery/ui-checkbox`

export const buttons = () => (
  <form style={{ width: '360px', margin: '20px' }}>
    <ui-checkbox checked={"true"} label="Some Label" />
  </form>
)
```

### Rendered in the browser

![](samples/checkbox.png)
<br/>
 *
 *
 * @module UICheckbox
 * @extends {HTMLElement}
 * @element ui-checkbox
 * @description A components that gives you a styled checkbox that is spec compliant and can be used within normal `form` elements.
 * 
 * @attr {String} checked - the checked status
 * @attr {String} label - the checkbox label text
 * @attr {String} disabled - sets the enabled or disabled state
 * 
 * @cssproperty {String} --uiCheckboxBorder - Overrides the border color
 * @cssproperty {String} --uiCheckboxColorChecked - Overrides the color of the checkbox
 *
 */
export default class UICheckbox extends HTMLElement {
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
    return this.shadowRoot.querySelector('.ui-checkbox-circle')
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
    return this.shadowRoot.querySelector('.ui-checkbox-wrapper')
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

registerComponent('ui-checkbox', InputBase(UICheckbox))
