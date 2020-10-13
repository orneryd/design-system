import {registerComponent} from '@ornery/ui-core'
import InputBase from '@ornery/ui-input-base'
import textInputTemplate from './ui-text-input.html'

/**
# design-system text-input
A styled text-input by the ornery design team.

## Installation

### npm
```bash
npm i `@ornery/ui-text-input` --save
```

### yarn
```bash
yarn add `@ornery/ui-text-input`
```

### HTML Usage
```html
<form>
  <ui-text-input label="Some Label"></ui-text-input>
  <ui-text-input value="some initial value" label="I have an initial Value"></ui-text-input>
  <ui-text-input type="password" label="Type Some Secure Text"></ui-text-input>
  <ui-text-input type="email" label="Type an email to be validated"></ui-text-input>
  <ui-text-input type="date" static-label label="Enter a Date"></ui-text-input>
</form>
```

### React Component
```jsx
import `@ornery/ui-checkbox`

export const Text = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-text-input label="Some Label"></ui-text-input>
  </div>
)
export const InitialValue = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-text-input value="some initial value" label="I have an initial Value"></ui-text-input>
  </div>
)
export const Secure = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-text-input type="password" label="Type Some Secure Text"></ui-text-input>
  </div>
)

export const Email = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="email"
        label="Type an email to be validated"
      ></ui-text-input>
    </form>
  </div>
)
export const Color = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="color"
        static-label
        label="Select a color"
      ></ui-text-input>
    </form>
  </div>
)

export const Date = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="date"
        static-label
        label="Enter a Date"
      ></ui-text-input>
    </form>
  </div>
)

```

### Rendered in the browser

![](samples/input.png)
<br/>
 *
 *
 * @module UITextInput
 * @extends {HTMLElement}
 * @element ui-text-input
 * @description A component that gives you a styled text input that is spec compliant and can be used within normal `form` elements.
 * 
 * @attr {String} type - the text input type
 * @attr {String} label - the text input label
 * @attr {String} value - the text input value
 * @attr {String} static-label - indicates wether to animate the label or remain static
 * @attr {String} required - indicates if the field is required for submitting a form
 * @attr {String} pattern - the regular expression pattern to validate the text value against
 * 
 * @cssproperty {String} --uiTextInputUnderline - Overrides the input underline indictator
 * @cssproperty {String} --uiTextInputUnderlineInvalid - Overrides the input underline indictator when invalid
 * @cssproperty {String} --uiTextInputLabelTransform - Overrides the label transform property
 * @cssproperty {String} --uiTextInputLabelTransformOrigin -  Overrides the label transform-origin property
 * @cssproperty {String} --uiTextInputLabelTransformFocused -  Overrides the label transform property when focused
 * 
 */
export default class UITextInput extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  
  set value(newValue) {
    this.setAttribute('value', newValue)
  }

  get value() {
    return this.getAttribute('value') || ''
  }

  get type() {
    return this.getAttribute('type') || 'text'
  }

  get inputWrapper() {
    return this.shadowRoot.querySelector('.ui-text-input-wrapper')
  }

  handleInputChange({ target: { value } }) {
    this.value = value
  }

  handleBlur() {
    if (!this.hasAttribute('static-label') && !this.value) {
      // unfocus the element if we don't have value to let the animation reset.
      this.inputWrapper.classList.remove('focus')
    }
    this.setValidity()
  }

  handleFocus() {
    this.inputWrapper.classList.add('focus')
  }

  focusInput() {
    this.shadowRoot.querySelector('.ui-text-input').focus()
  }

  reset(newVal) {    
    this.value = newVal
    this.inputElement.value = newVal
    this.inputWrapper.classList.remove('focus')
  }

  connectedCallback() {
    this.render()
  }

  render() {
    textInputTemplate(this).connect()
    if (this.hasAttribute('static-label')) {
      this.inputWrapper.classList.add('focus')
    }
    if (this.required) {
      this.notifyValidity(this.validationMessage)
    }
  }
}

registerComponent('ui-text-input', InputBase(UITextInput))
