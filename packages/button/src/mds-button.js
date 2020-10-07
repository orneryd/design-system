import {registerComponent} from '@ornery/mds-core'
import renderButton from './mds-button.html'

/**

# design-system button
A styled button

## Installation

### npm
```bash
npm i `@ornery/mds-button` --save
```

### yarn
```bash
yarn add `@ornery/mds-button`
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
import `@ornery/mds-button`

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
<mds-button variant="primary" href="https://www.google.com">Search Things With Google</mds-button>
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
  --mdsButtonSuccessColorHover : $mdsGreenDark;
  --mdsButtonInfoColor: $mdsBlueDark;
  --mdsButtonInfoColorHover : $mdsBlueDarker;
  --mdsButtonWarningsColor: $mdsRust;
  --mdsButtonWarningColorHover : $mdsRustDarker;
  --mdsButtonDangerColor: $mdsRedLight;
  --mdsButtonDangerColorHover : $mdsRed;
  --mdsButtonOutlinedBackgroundColor: transparent;
  --mdsButtonOutlinedBorder: inset 0px 0px 0px 2px $mdsPurple;
  --mdsButtonOutlinedColor: $mdsPurple;
  --mdsButtonOutlinedBackgroundColorHover: $mdsPurple;
  --mdsButtonOutlinedBorderHover: inherit;
  --mdsButtonOutlinedColorHover: $mdsWhite;
  --mdsButtonOutlinedColor: $mdsPurple;
  --mdsButtonOutlinedBackgroundColorHover: $mdsPurple;
  --mdsButtonOutlinedBorderHover: inherit;
  --mdsButtonOutlinedColorHover: $mdsWhite;
  --mdsButtonOutlinedColor: $mdsBlue;
  --mdsButtonOutlinedBorder: inset 0px 0px 0px 2px $mdsBlue;
  --mdsButtonOutlinedBackgroundColorHover: $mdsBlueDark;
  --mdsButtonOutlinedBorderHover: $mdsBlueDark;
  --mdsButtonOutlinedColorHover: $mdsWhite;
  --mdsButtonSecondaryOutlinedColor: $mdsOrange;
  --mdsButtonSecondaryOutlinedBorder: inset 0px 0px 0px 2px $mdsOrange;
  --mdsButtonSecondaryOutlinedBackgroundColorHover: $mdsOrangeDark;
  --mdsButtonSecondaryOutlinedBorderHover: $mdsOrangeDark;
  --mdsButtonSecondaryOutlinedColorHover: $mdsWhite;
  --mdsButtonSuccessOutlinedColor: $mdsGreen;
  --mdsButtonSuccessOutlinedBorder: inset 0px 0px 0px 2px $mdsGreen;
  --mdsButtonSuccessOutlinedBackgroundColorHover: $mdsGreenDark;
  --mdsButtonSuccessOutlinedBorderHover: $mdsGreenDark;
  --mdsButtonSuccessOutlinedColorHover: $mdsWhite;
  --mdsButtonInfoOutlinedColor: $mdsBlueDark;
  --mdsButtonInfoOutlinedBorder: inset 0px 0px 0px 2px $mdsBlueDark;
  --mdsButtonInfoOutlinedBackgroundColorHover: $mdsBlueDarker;
  --mdsButtonInfoOutlinedBorderHover: $mdsBlueDarker;
  --mdsButtonInfoOutlinedColorHover: $mdsWhite;
  --mdsButtonWarningOutlinedColor: $mdsRust;
  --mdsButtonWarningOutlinedBorder: inset 0px 0px 0px 2px $mdsRust;
  --mdsButtonWarningOutlinedBackgroundColorHover: $mdsRustDarker;
  --mdsButtonWarningOutlinedBorderHover: $mdsRustDarker;
  --mdsButtonWarningOutlinedColorHover: $mdsWhite;
  --mdsButtonDangerOutlinedColor: $mdsRedLight;
  --mdsButtonDangerOutlinedBorder: inset 0px 0px 0px 2px $mdsRedLight;
  --mdsButtonDangerOutlinedBackgroundColorHover: $mdsRed;
  --mdsButtonDangerOutlinedBorderHover: $mdsRed;
  --mdsButtonDangerOutlinedColorHover: $mdsWhite;
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
 * @cssproperty {String} --mdsButtonBorderRadius - Overrides the radius border
 * @cssproperty {String} --mdsButtonPrimaryColor - Overrides the primary color
 * @cssproperty {String} --mdsButtonPrimaryColorHover - Overrides the primary color on hover
 * @cssproperty {String} --mdsButtonSecondaryColor - Overrides the secondary color
 * @cssproperty {String} --mdsButtonSecondaryColorHover - Overrides the secondary color on hover
 * @cssproperty {String} --mdsButtonSuccessColor - Overrides the success color
 * @cssproperty {String} --mdsButtonSuccessColorHover  - Overrides the success color on hover
 * @cssproperty {String} --mdsButtonInfoColor - Overrides the the info color
 * @cssproperty {String} --mdsButtonInfoColorHover  - Overrides the info color on hover
 * @cssproperty {String} --mdsButtonWarningColor - Overrides the warning color
 * @cssproperty {String} --mdsButtonWarningColorHover  - Overrides the warnings color on hover
 * @cssproperty {String} --mdsButtonDangerColor - Overrides the danger color
 * @cssproperty {String} --mdsButtonDangerColorHover  - Overrides the danger color on hover
 * @cssproperty {String} --mdsButtonOutlinedBackgroundColor - Overrides the outlined background color
 * @cssproperty {String} --mdsButtonOutlinedBorder - Overrides the outlined border
 * @cssproperty {String} --mdsButtonOutlinedColor - Overrides the outlined color
 * @cssproperty {String} --mdsButtonOutlinedBackgroundColorHover - Overrides the outlined background color on hover
 * @cssproperty {String} --mdsButtonOutlinedColorHover - Overrides the outlined color on hover
 * @cssproperty {String} --mdsButtonOutlinedBorderHover - Overrides the outlined border on hover
 * @cssproperty {String} --mdsButtonSecondaryOutlinedColor - Overrides the secondary outlined color
 * @cssproperty {String} --mdsButtonSecondaryOutlinedBorder - Overrides the secondary outlined border
 * @cssproperty {String} --mdsButtonSecondaryOutlinedBackgroundColorHover - Overrides the secondary outlined background color on hover
 * @cssproperty {String} --mdsButtonSecondaryOutlinedBorderHover - Overrides the secondary outlined border on hover
 * @cssproperty {String} --mdsButtonSecondaryOutlinedColorHover - Overrides the secondary outlined color on hover
 * @cssproperty {String} --mdsButtonSuccessOutlinedColor - Overrides the success outlined color
 * @cssproperty {String} --mdsButtonSuccessOutlinedBorder - Overrides the success outlined border
 * @cssproperty {String} --mdsButtonSuccessOutlinedBackgroundColorHover - Overrides the success outlined background color on hover
 * @cssproperty {String} --mdsButtonSuccessOutlinedBorderHover - Overrides the success outlined border on hover
 * @cssproperty {String} --mdsButtonSuccessOutlinedColorHover - Overrides the success outlined color on hover
 * @cssproperty {String} --mdsButtonInfoOutlinedColor - Overrides the info outlined color
 * @cssproperty {String} --mdsButtonInfoOutlinedBorder - Overrides the info outlined border
 * @cssproperty {String} --mdsButtonInfoOutlinedBackgroundColorHover - Overrides the info outlined background color on hover
 * @cssproperty {String} --mdsButtonInfoOutlinedBorderHover - Overrides the info outlined border on hover
 * @cssproperty {String} --mdsButtonInfoOutlinedColorHover - Overrides the info outlined color on hover
 * @cssproperty {String} --mdsButtonWarningOutlinedColor - Overrides the warning outlined color
 * @cssproperty {String} --mdsButtonWarningOutlinedBorder - Overrides the warning outlined border
 * @cssproperty {String} --mdsButtonWarningOutlinedBackgroundColorHover - Overrides the warning outlined background color on hover
 * @cssproperty {String} --mdsButtonWarningOutlinedBorderHover - Overrides the warning outlined border on hover
 * @cssproperty {String} --mdsButtonWarningOutlinedColorHover - Overrides the warning outlined color on hover
 * @cssproperty {String} --mdsButtonDangerOutlinedColor - Overrides the danger outlined color
 * @cssproperty {String} --mdsButtonDangerOutlinedBorder - Overrides the danger outlined border
 * @cssproperty {String} --mdsButtonDangerOutlinedBackgroundColorHover - Overrides the danger outlined background color on hover
 * @cssproperty {String} --mdsButtonDangerOutlinedBorderHover - Overrides the danger outlined border on hover
 * @cssproperty {String} --mdsButtonDangerOutlinedColorHover - Overrides the danger outlined color on hover
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
