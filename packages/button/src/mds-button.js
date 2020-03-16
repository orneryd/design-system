import {registerComponent} from '@mcklabs/mds-core'
import renderButton from './mds-button.html'

/**

# mckesson-design-system button
A styled button

## Installation

### npm
```bash
npm i `@mcklabs/mds-button` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-button`
```

### HTML Usage
```html
<mds-button variant="primary">Primary</mds-button>
<mds-button variant="primary rounded">Primary Rounded</mds-button>
<mds-button variant="primary" disabled>Primary Disabled</mds-button>
<mds-button variant="secondary">Secondary</mds-button>
<mds-button variant="secondary rounded" disabled="">Secondary Rounded</mds-button>
<mds-button variant="secondary" disabled>Secondary Disabled</mds-button>
<mds-button variant="outlined">Outlined</mds-button>
<mds-button variant="outlined rounded">Outlined Rounded</mds-button>
<mds-button variant="outlined" disabled>Outlined Disabled</mds-button>
```

### React Component
```jsx
import `@mcklabs/mds-button`

export const buttons = () => (
  <div>
    <mds-button variant="primary">Primary</mds-button>
    <mds-button variant="primary rounded">Primary Rounded</mds-button>
    <mds-button variant="primary" disabled>Primary Disabled</mds-button>
    <mds-button variant="secondary">Secondary</mds-button>
    <mds-button variant="secondary rounded" disabled="">Secondary Rounded</mds-button>
    <mds-button variant="secondary" disabled>Secondary Disabled</mds-button>
    <mds-button variant="outlined">Outlined</mds-button>
    <mds-button variant="outlined rounded">Outlined Rounded</mds-button>
    <mds-button variant="outlined" disabled>Outlined Disabled</mds-button>
  </div>
)
```

### HTML Usage
```html
<mds-button variant="primary" href="http://kittenwar.com">Rate Kittens</mds-button>
```
### Rendered in the browser

![](samples/buttons.png)

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:mds-button {
  --mdsButtonBorderRadius: 4px;
  --mdsButtonPrimaryColor: $mdsBlue;
  --mdsButtonPrimaryColorHover: $mdsBlueDark;
  --mdsButtonSecondaryColor: $mdsOrange;
  --mdsButtonSecondaryColorHover: $mdsOrangeDark;
  --mdsButtonSuccessColor: $mdsGreen;
  --mdsButtonSuccessHoverColor: $mdsGreenDark;
  --mdsButtonInfoColor: $mdsBlueDark;
  --mdsButtonInfoHoverColor: $mdsBlueDarker;
  --mdsButtonWarningsColor: $mdsRust;
  --mdsButtonWarningHoverColor: $mdsRustDarker;
  --mdsButtonDangerColor: $mdsRedLight;
  --mdsButtonDangerHoverColor: $mdsRed;
  --mdsButtonOulinedBackgroundColor: transparent;
  --mdsButtonOulinedBorder: inset 0px 0px 0px 2px $mdsPurple;
  --mdsButtonOulinedColor: $mdsPurple;
  --mdsButtonOulinedBackgroundColorHover: $mdsPurple;
  --mdsButtonOulinedBorderHover: inherit;
  --mdsButtonOulinedColorHover: $mdsWhite;
  --mdsButtonOulinedColor: $mdsPurple;
  --mdsButtonOulinedBackgroundColorHover: $mdsPurple;
  --mdsButtonOulinedBorderHover: inherit;
  --mdsButtonOulinedColorHover: $mdsWhite;
  --mdsButtonOulinedColor: $mdsBlue;
  --mdsButtonOulinedBorder: inset 0px 0px 0px 2px $mdsBlue;
  --mdsButtonOulinedBackgroundColorHover: $mdsBlueDark;
  --mdsButtonOulinedBorderHover: $mdsBlueDark;
  --mdsButtonOulinedColorHover: $mdsWhite;
  --mdsButtonSecondaryOulinedColor: $mdsOrange;
  --mdsButtonSecondaryOulinedBorder: inset 0px 0px 0px 2px $mdsOrange;
  --mdsButtonSecondaryOulinedBackgroundColorHover: $mdsOrangeDark;
  --mdsButtonSecondaryOulinedBorderHover: $mdsOrangeDark;
  --mdsButtonSecondaryOulinedColorHover: $mdsWhite;
  --mdsButtonSuccessOulinedColor: $mdsGreen;
  --mdsButtonSuccessOulinedBorder: inset 0px 0px 0px 2px $mdsGreen;
  --mdsButtonOSuccessulinedBackgroundColorHover: $mdsGreenDark;
  --mdsButtonSuccessOulinedBorderHover: $mdsGreenDark;
  --mdsButtonSuccessOulinedColorHover: $mdsWhite;
  --mdsButtonInfoOulinedColor: $mdsBlueDark;
  --mdsButtonInfoOulinedBorder: inset 0px 0px 0px 2px $mdsBlueDark;
  --mdsButtonInfoOulinedBackgroundColorHover: $mdsBlueDarker;
  --mdsButtonInfoOulinedBorderHover: $mdsBlueDarker;
  --mdsButtonInfoOulinedColorHover: $mdsWhite;
  --mdsButtonWarningOulinedColor: $mdsRust;
  --mdsButtonWarningOulinedBorder: inset 0px 0px 0px 2px $mdsRust;
  --mdsButtonWarningOulinedBackgroundColorHover: $mdsRustDarker;
  --mdsButtonWarningOulinedBorderHover: $mdsRustDarker;
  --mdsButtonWarningOulinedColorHover: $mdsWhite;
  --mdsButtonDangerOulinedColor: $mdsRedLight;
  --mdsButtonDangerOulinedBorder: inset 0px 0px 0px 2px $mdsRedLight;
  --mdsButtonDangerOulinedBackgroundColorHover: $mdsRed;
  --mdsButtonDangerOulinedBorderHover: $mdsRed;
  --mdsButtonDangerOulinedColorHover: $mdsWhite;
}
```
<br/>
 * 
 * @module MdsButton
 * @extends {HTMLElement}
 * @element mds-button
 * @description A component that gives you a `button` or `anchor` tag depending on the usage.
 * 
 * @attr {String} href - give the button an href and it will render an `anchor` tag with the appropriate href instead of a `button` tag
 * @attr {String} disabled - sets the enabled or disabled state
 * @attr {String} variant - variant of the button
 * 
 * @cssproperty {String} --mdsButtonPrimaryColor - Overrides the primary color
 * @cssproperty {String} --mdsButtonPrimaryColorHover - Overrides the primary color on hover
 * @cssproperty {String} --mdsButtonSecondaryColor - Overrides the secondary color
 * @cssproperty {String} --mdsButtonSecondaryColorHover  - Overrides the secondary color on hover
 * @cssproperty {String} --mdsButtonOulinedBackgroundColor  - Overrides the outlined background color
 * @cssproperty {String} --mdsButtonOulinedBackgroundColorHover - Overrides the outlined background color on hover
 * @cssproperty {String} --mdsButtonOulinedBorder - Overrides the outlined border color
 * @cssproperty {String} --mdsButtonOulinedBorderHover - Overrides the  outlined border color on hover
 * @cssproperty {String} --mdsButtonOulinedColor - Overrides the outlined color
 * @cssproperty {String} --mdsButtonOulinedColorHover - Overrides the outlined color on hover
 *
 */
export default class MdsButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['variant', 'disabled']
  }

  attributeChangedCallback(name) {
    if (name === 'disabled' && this.buttonElement) {
      if (this.isDisabled) {
        this.buttonElement.classList.add('disabled')
        this.buttonElement.setAttribute('disabled', 'disabled')
        this.classList.add('disabled')
      } else {
        this.buttonElement.classList.remove('disabled')
        this.buttonElement.removeAttribute('disabled', 'disabled')
        this.classList.remove('disabled')
      }
    } 
    if (name === 'variant') {
      this.render()
    }
  }

  get tag() {
    return this.urlTarget ? 'a': 'button';
  }
  
  get startTag() {
    return `<${this.tag} onclick="this.onClick" ${this.urlTarget} class="mds-button ${this.buttonStyle}">`
  }
  get closeTag() {
    return `</${this.tag}>`
  }

  get isDisabled() {
    return this.hasAttribute('disabled') && this.getAttribute('disabled') !== 'false'
  }

  get buttonElement() {
    return this.shadowRoot.querySelector('.mds-button')
  }

  get buttonStyle() {
    return this.getAttribute('variant') || 'primary'
  }

  get urlTarget() {
    const url = this.getAttribute('href') || this.getAttribute('to') || ''
    const target = this.getAttribute('target') || '_blank'
    return url && `href="${url}" target="${target}"`
  }

  onClick(event) {
    if (this.isDisabled) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
    if (this.getAttribute('type') === 'submit') {
      let form = document.getElementById(this.getAttribute('form'))
      if (!form && this.closest) {
        form = this.closest('form')
      }
      form && form.dispatchEvent(new Event('submit'))
    }
  }

  connectedCallback() {
    this.render()
  }

  render() {
    renderButton(this).connect()
  }
}

registerComponent('mds-button', MdsButton)
