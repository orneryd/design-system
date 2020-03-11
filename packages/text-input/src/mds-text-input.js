import {registerComponent} from '@mcklabs/mds-core'
import InputBase from '@mcklabs/mds-input-base'
import textInputTemplate from './mds-text-input.html'

/**
# mckesson-design-system text-input
A styled text-input by the mckesson design team.

## Installation

### npm
```bash
npm i `@mcklabs/mds-text-input` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-text-input`
```

### HTML Usage
```html
<form>
  <mds-text-input label="Some Label"></mds-text-input>
  <mds-text-input value="some initial value" label="I have an initial Value"></mds-text-input>
  <mds-text-input type="password" label="Type Some Secure Text"></mds-text-input>
  <mds-text-input type="email" label="Type an email to be validated"></mds-text-input>
  <mds-text-input type="date" static-label label="Enter a Date"></mds-text-input>
</form>
```

### React Component
```jsx
import `@mcklabs/mds-checkbox`

export const Text = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <mds-text-input label="Some Label"></mds-text-input>
  </div>
)
export const InitialValue = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <mds-text-input value="some initial value" label="I have an initial Value"></mds-text-input>
  </div>
)
export const Secure = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <mds-text-input type="password" label="Type Some Secure Text"></mds-text-input>
  </div>
)

export const Email = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <mds-text-input
        type="email"
        label="Type an email to be validated"
      ></mds-text-input>
    </form>
  </div>
)
export const Color = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <mds-text-input
        type="color"
        static-label
        label="Select a color"
      ></mds-text-input>
    </form>
  </div>
)

export const Date = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <mds-text-input
        type="date"
        static-label
        label="Enter a Date"
      ></mds-text-input>
    </form>
  </div>
)

```

### Rendered in the browser

![](samples/input.png)
<br/>
 *
 *
 * @module MdsTextInput
 * @extends {HTMLElement}
 * @element mds-text-input
 * @description A component that gives you a styled text input that is spec compliant and can be used within normal `form` elements.
 * 
 * @attr {String} type - the text input type
 * @attr {String} label - the text input label
 * @attr {String} value - the text input value
 * @attr {String} static-label - indicates wether to animate the label or remain static
 * @attr {String} required - indicates if the field is required for submitting a form
 * @attr {String} pattern - the regular expression pattern to validate the text value against
 * 
 * @cssproperty {String} --mdsTextInputUnderline - Overrides the input underline indictator
 * @cssproperty {String} --mdsTextInputUnderlineInvalid - Overrides the input underline indictator when invalid
 * @cssproperty {String} --mdsTextInputLabelTransform - Overrides the label transform property
 * @cssproperty {String} --mdsTextInputLabelTransformOrigin -  Overrides the label transform-origin property
 * @cssproperty {String} --mdsTextInputLabelTransformFocused -  Overrides the label transform property when focused
 * 
 */
export default class MdsTextInput extends HTMLElement {
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
    return this.shadowRoot.querySelector('.mds-text-input-wrapper')
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
    this.shadowRoot.querySelector('.mds-text-input').focus()
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

registerComponent('mds-text-input', InputBase(MdsTextInput))
