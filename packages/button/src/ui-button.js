import {registerComponent} from '@ornery/ui-core'
import renderButton from './ui-button.html'

/**

# design-system button
A styled button

## Installation

### npm
```bash
npm i `@ornery/ui-button` --save
```

### yarn
```bash
yarn add `@ornery/ui-button`
```

### HTML Usage
```html
<ui-button variant="primary">Primary</ui-button>
<ui-button variant="primary rounded">Primary Rounded</ui-button>
<ui-button variant="primary" disabled>Primary Disabled</ui-button>
<ui-button variant="secondary">Secondary</ui-button>
<ui-button variant="secondary rounded" disabled="">Secondary Rounded</ui-button>
<ui-button variant="secondary" disabled>Secondary Disabled</ui-button>
<ui-button variant="outlined">Outlined</ui-button>
<ui-button variant="outlined rounded">Outlined Rounded</ui-button>
<ui-button variant="outlined" disabled>Outlined Disabled</ui-button>
```

### React Component
```jsx
import `@ornery/ui-button`

export const buttons = () => (
  <div>
    <ui-button variant="primary">Primary</ui-button>
    <ui-button variant="primary rounded">Primary Rounded</ui-button>
    <ui-button variant="primary" disabled>Primary Disabled</ui-button>
    <ui-button variant="secondary">Secondary</ui-button>
    <ui-button variant="secondary rounded" disabled="">Secondary Rounded</ui-button>
    <ui-button variant="secondary" disabled>Secondary Disabled</ui-button>
    <ui-button variant="outlined">Outlined</ui-button>
    <ui-button variant="outlined rounded">Outlined Rounded</ui-button>
    <ui-button variant="outlined" disabled>Outlined Disabled</ui-button>
  </div>
)
```

### HTML Usage
```html
<ui-button variant="primary" href="https://www.google.com">Search Things With Google</ui-button>
```
### Rendered in the browser

![](samples/buttons.png)

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:ui-button {
  --uiButtonBorderRadius: 4px;
  --uiButtonPrimaryColor: $uiBlue;
  --uiButtonPrimaryColorHover: $uiBlueDark;
  --uiButtonSecondaryColor: $uiOrange;
  --uiButtonSecondaryColorHover: $uiOrangeDark;
  --uiButtonSuccessColor: $uiGreen;
  --uiButtonSuccessColorHover : $uiGreenDark;
  --uiButtonInfoColor: $uiBlueDark;
  --uiButtonInfoColorHover : $uiBlueDarker;
  --uiButtonWarningsColor: $uiRust;
  --uiButtonWarningColorHover : $uiRustDarker;
  --uiButtonDangerColor: $uiRedLight;
  --uiButtonDangerColorHover : $uiRed;
  --uiButtonOutlinedBackgroundColor: transparent;
  --uiButtonOutlinedBorder: inset 0px 0px 0px 2px $uiPurple;
  --uiButtonOutlinedColor: $uiPurple;
  --uiButtonOutlinedBackgroundColorHover: $uiPurple;
  --uiButtonOutlinedBorderHover: inherit;
  --uiButtonOutlinedColorHover: $uiWhite;
  --uiButtonOutlinedColor: $uiPurple;
  --uiButtonOutlinedBackgroundColorHover: $uiPurple;
  --uiButtonOutlinedBorderHover: inherit;
  --uiButtonOutlinedColorHover: $uiWhite;
  --uiButtonOutlinedColor: $uiBlue;
  --uiButtonOutlinedBorder: inset 0px 0px 0px 2px $uiBlue;
  --uiButtonOutlinedBackgroundColorHover: $uiBlueDark;
  --uiButtonOutlinedBorderHover: $uiBlueDark;
  --uiButtonOutlinedColorHover: $uiWhite;
  --uiButtonSecondaryOutlinedColor: $uiOrange;
  --uiButtonSecondaryOutlinedBorder: inset 0px 0px 0px 2px $uiOrange;
  --uiButtonSecondaryOutlinedBackgroundColorHover: $uiOrangeDark;
  --uiButtonSecondaryOutlinedBorderHover: $uiOrangeDark;
  --uiButtonSecondaryOutlinedColorHover: $uiWhite;
  --uiButtonSuccessOutlinedColor: $uiGreen;
  --uiButtonSuccessOutlinedBorder: inset 0px 0px 0px 2px $uiGreen;
  --uiButtonSuccessOutlinedBackgroundColorHover: $uiGreenDark;
  --uiButtonSuccessOutlinedBorderHover: $uiGreenDark;
  --uiButtonSuccessOutlinedColorHover: $uiWhite;
  --uiButtonInfoOutlinedColor: $uiBlueDark;
  --uiButtonInfoOutlinedBorder: inset 0px 0px 0px 2px $uiBlueDark;
  --uiButtonInfoOutlinedBackgroundColorHover: $uiBlueDarker;
  --uiButtonInfoOutlinedBorderHover: $uiBlueDarker;
  --uiButtonInfoOutlinedColorHover: $uiWhite;
  --uiButtonWarningOutlinedColor: $uiRust;
  --uiButtonWarningOutlinedBorder: inset 0px 0px 0px 2px $uiRust;
  --uiButtonWarningOutlinedBackgroundColorHover: $uiRustDarker;
  --uiButtonWarningOutlinedBorderHover: $uiRustDarker;
  --uiButtonWarningOutlinedColorHover: $uiWhite;
  --uiButtonDangerOutlinedColor: $uiRedLight;
  --uiButtonDangerOutlinedBorder: inset 0px 0px 0px 2px $uiRedLight;
  --uiButtonDangerOutlinedBackgroundColorHover: $uiRed;
  --uiButtonDangerOutlinedBorderHover: $uiRed;
  --uiButtonDangerOutlinedColorHover: $uiWhite;
}
```
<br/>
 * 
 * @module UIButton
 * @extends {HTMLElement}
 * @element ui-button
 * @description A component that gives you a `button` or `anchor` tag depending on the usage.
 * 
 * @attr {String} href - give the button an href and it will render an `anchor` tag with the appropriate href instead of a `button` tag
 * @attr {String} disabled - sets the enabled or disabled state
 * @attr {String} variant - variant of the button
 * 
 * @cssproperty {String} --uiButtonBorderRadius - Overrides the radius border
 * @cssproperty {String} --uiButtonPrimaryColor - Overrides the primary color
 * @cssproperty {String} --uiButtonPrimaryColorHover - Overrides the primary color on hover
 * @cssproperty {String} --uiButtonSecondaryColor - Overrides the secondary color
 * @cssproperty {String} --uiButtonSecondaryColorHover - Overrides the secondary color on hover
 * @cssproperty {String} --uiButtonSuccessColor - Overrides the success color
 * @cssproperty {String} --uiButtonSuccessColorHover  - Overrides the success color on hover
 * @cssproperty {String} --uiButtonInfoColor - Overrides the the info color
 * @cssproperty {String} --uiButtonInfoColorHover  - Overrides the info color on hover
 * @cssproperty {String} --uiButtonWarningColor - Overrides the warning color
 * @cssproperty {String} --uiButtonWarningColorHover  - Overrides the warnings color on hover
 * @cssproperty {String} --uiButtonDangerColor - Overrides the danger color
 * @cssproperty {String} --uiButtonDangerColorHover  - Overrides the danger color on hover
 * @cssproperty {String} --uiButtonOutlinedBackgroundColor - Overrides the outlined background color
 * @cssproperty {String} --uiButtonOutlinedBorder - Overrides the outlined border
 * @cssproperty {String} --uiButtonOutlinedColor - Overrides the outlined color
 * @cssproperty {String} --uiButtonOutlinedBackgroundColorHover - Overrides the outlined background color on hover
 * @cssproperty {String} --uiButtonOutlinedColorHover - Overrides the outlined color on hover
 * @cssproperty {String} --uiButtonOutlinedBorderHover - Overrides the outlined border on hover
 * @cssproperty {String} --uiButtonSecondaryOutlinedColor - Overrides the secondary outlined color
 * @cssproperty {String} --uiButtonSecondaryOutlinedBorder - Overrides the secondary outlined border
 * @cssproperty {String} --uiButtonSecondaryOutlinedBackgroundColorHover - Overrides the secondary outlined background color on hover
 * @cssproperty {String} --uiButtonSecondaryOutlinedBorderHover - Overrides the secondary outlined border on hover
 * @cssproperty {String} --uiButtonSecondaryOutlinedColorHover - Overrides the secondary outlined color on hover
 * @cssproperty {String} --uiButtonSuccessOutlinedColor - Overrides the success outlined color
 * @cssproperty {String} --uiButtonSuccessOutlinedBorder - Overrides the success outlined border
 * @cssproperty {String} --uiButtonSuccessOutlinedBackgroundColorHover - Overrides the success outlined background color on hover
 * @cssproperty {String} --uiButtonSuccessOutlinedBorderHover - Overrides the success outlined border on hover
 * @cssproperty {String} --uiButtonSuccessOutlinedColorHover - Overrides the success outlined color on hover
 * @cssproperty {String} --uiButtonInfoOutlinedColor - Overrides the info outlined color
 * @cssproperty {String} --uiButtonInfoOutlinedBorder - Overrides the info outlined border
 * @cssproperty {String} --uiButtonInfoOutlinedBackgroundColorHover - Overrides the info outlined background color on hover
 * @cssproperty {String} --uiButtonInfoOutlinedBorderHover - Overrides the info outlined border on hover
 * @cssproperty {String} --uiButtonInfoOutlinedColorHover - Overrides the info outlined color on hover
 * @cssproperty {String} --uiButtonWarningOutlinedColor - Overrides the warning outlined color
 * @cssproperty {String} --uiButtonWarningOutlinedBorder - Overrides the warning outlined border
 * @cssproperty {String} --uiButtonWarningOutlinedBackgroundColorHover - Overrides the warning outlined background color on hover
 * @cssproperty {String} --uiButtonWarningOutlinedBorderHover - Overrides the warning outlined border on hover
 * @cssproperty {String} --uiButtonWarningOutlinedColorHover - Overrides the warning outlined color on hover
 * @cssproperty {String} --uiButtonDangerOutlinedColor - Overrides the danger outlined color
 * @cssproperty {String} --uiButtonDangerOutlinedBorder - Overrides the danger outlined border
 * @cssproperty {String} --uiButtonDangerOutlinedBackgroundColorHover - Overrides the danger outlined background color on hover
 * @cssproperty {String} --uiButtonDangerOutlinedBorderHover - Overrides the danger outlined border on hover
 * @cssproperty {String} --uiButtonDangerOutlinedColorHover - Overrides the danger outlined color on hover
 *
 */
export default class UIButton extends HTMLElement {
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
    return `<${this.tag} onclick="this.onClick" ${this.urlTarget} class="ui-button ${this.buttonStyle}">`
  }
  get closeTag() {
    return `</${this.tag}>`
  }

  get isDisabled() {
    return this.hasAttribute('disabled') && this.getAttribute('disabled') !== 'false'
  }

  get buttonElement() {
    return this.shadowRoot.querySelector('.ui-button')
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

registerComponent('ui-button', UIButton)