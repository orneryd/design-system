import renderButton from './mds-button.html'

/**
 * @module MdsButton
 * @extends {HTMLElement}
 * @element mds-button
 * @description A components that give you a `button` or `anchor` tag depending on the usage.
 * @attr {String} href give the button an href and it will render an `anchor` tag with the appropriate href instead of a `button` tag
 * @attr {String} disabled
 * @cssproperty {String} --mdsBannerColor Overrides the text color for the banner.
 *
 * 
 * @example
 * # mckesson-design-system button
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
 * 
 * @example
 * ### HTML Usage
 * ```html
 * <mds-button variant="primary">Primary</mds-button>
 * <mds-button variant="primary rounded">Primary Rounded</mds-button>
 * <mds-button variant="primary" disabled>Primary Disabled</mds-button>
 * <mds-button variant="secondary">Secondary</mds-button>
 * <mds-button variant="secondary rounded" disabled="">Secondary Rounded</mds-button>
 * <mds-button variant="secondary" disabled>Secondary Disabled</mds-button>
 * <mds-button variant="outlined">Outlined</mds-button>
 * <mds-button variant="outlined rounded">Outlined Rounded</mds-button>
 * <mds-button variant="outlined" disabled>Outlined Disabled</mds-button>
 * ```
 *
 * @example 
 * ### React Component
 * ```jsx
 * import `@mcklabs/mds-button`
 * 
 * export const buttons = () => (
 *   <div>
 *     <mds-button variant="primary">Primary</mds-button>
 *     <mds-button variant="primary rounded">Primary Rounded</mds-button>
 *     <mds-button variant="primary" disabled>Primary Disabled</mds-button>
 *     <mds-button variant="secondary">Secondary</mds-button>
 *     <mds-button variant="secondary rounded" disabled="">Secondary Rounded</mds-button>
 *     <mds-button variant="secondary" disabled>Secondary Disabled</mds-button>
 *     <mds-button variant="outlined">Outlined</mds-button>
 *     <mds-button variant="outlined rounded">Outlined Rounded</mds-button>
 *     <mds-button variant="outlined" disabled>Outlined Disabled</mds-button>
 *   </div>
 * )
 * ```
 * 
 * @example 
 * ### HTML Usage
 * ```html
 * <mds-button variant="primary" href="http://kittenwar.com">Rate Kittens</mds-button>
 * ```
 * @example
 * ### Rendered in the browser
 *
 * ![](samples/buttons.png)
 * 
 * @example
 * ### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
 * 
 * ```css
 * :root {
 *   --mdsBannerMaxWidth: 1024px;
 *   --mdsBannerColor: purple;
 *   --mdsBannerBackgroundColor: rgba(255, 166, 0, 0.783);
 * }
 * ```
 * 
 * ### Rendered in the browser
 *
 * ![](samples/button-custom.png)
 * <br/>
 * 
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
    return this.href ? 'a': 'button';
  }
  
  get startTag() {
    return `<${this.tag} onclick="this.onClick" ${this.href} class="mds-button ${this.variant}">`
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

  get variant() {
    return this.getAttribute('variant') || 'primary'
  }

  get href() {
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

customElements.define('mds-button', MdsButton)
