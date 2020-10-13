import {registerComponent} from '@ornery/ui-core'
import renderPaper from './ui-paper.html'

/**
# design-system paper
A styled paper that you can set the elevation property for more drastic effects.

## Installation

### npm
```bash
npm i `@ornery/ui-paper` --save
```

### yarn
```bash
yarn add `@ornery/ui-paper`
```

### HTML Usage
```html
<ui-paper elevation="6">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</mwc-paper>
```

### React Component

```js
import `@ornery/ui-banner`

export const paper = () => (
  <ui-paper
    elevation={6}
  >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </ui-paper>
)
```

### Rendered in the browser

![](samples/paper.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:root {
  --uiPaperColor: orange;
  --uiPaperBackgroundColor: purple;
  --uiPaperBoxShadowHOffsetColor: rgba(255, 0, 255, 0.2);
  --uiPaperBoxShadowVOffsetColor: rgba(255, 0, 255, 0.14);
  --uiPaperBoxShadowBlurColor: rgba(255, 0, 255, 0.12);
}
```

### Rendered in the browser

![](samples/paper-custom.png)
<br/>
 * @module UIPaper
 * @extends {HTMLElement} root The root element to find all elements from.
 * @element ui-paper
 * @description Styled component that has different elevations
 * @attr {String} [elevation=3] - Sets the elevation for the accordion's internal UIPaper element
 * 
 * @cssproperty --uiPaperBackgroundColor - Overrides the icon color for the accordion indicator button.
 * @cssproperty --uiPaperBoxShadowHOffsetColor - Overrides the icon color for the accordion indicator button.
 * @cssproperty --uiPaperBoxShadowVOffsetColor - Overrides the icon color for the accordion indicator button.
 * @cssproperty --uiPaperBoxShadowBlurColor - Overrides the icon color for the accordion indicator button.
 */
export default class UIPaper extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['elevation']
  }

  attributeChangedCallback() {
    const root = this.shadowRoot.querySelector('.paper')
    if (root) {
      root.classList.remove(`elevation-${this.currentElevation}`)
      this.currentElevation = this.elevation
      root.classList.add(`elevation-${this.currentElevation}`)
    }
  }

  get elevation() {
    return this.getAttribute('elevation') || '1'
  }

  connectedCallback() {
    this.currentElevation = this.elevation
    renderPaper(this).connect()
  }
}

registerComponent('ui-paper', UIPaper)
