import { registerComponent } from '@ornery/ui-core'
import renderTree from './ui-tree.html'
import lazyTree from './lazy-tree.html'
import * as path from 'path'
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
  --uiTreeColor: orange;
  --uiTreeBackgroundColor: purple;
  --uiTreeBoxShadowHOffsetColor: rgba(255, 0, 255, 0.2);
  --uiTreeBoxShadowVOffsetColor: rgba(255, 0, 255, 0.14);
  --uiTreeBoxShadowBlurColor: rgba(255, 0, 255, 0.12);
}
```

### Rendered in the browser

![](samples/paper-custom.png)
<br/>
 * @module UITree
 * @extends {HTMLElement} root The root element to find all elements from.
 * @element ui-paper
 * @description Styled component that has different elevations
 * @attr {String} [elevation=3] - Sets the elevation for the accordion's internal UITree element
 * 
 * @cssproperty --uiTreeBackgroundColor - Overrides the icon color for the accordion indicator button.
 * @cssproperty --uiTreeBoxShadowHOffsetColor - Overrides the icon color for the accordion indicator button.
 * @cssproperty --uiTreeBoxShadowVOffsetColor - Overrides the icon color for the accordion indicator button.
 * @cssproperty --uiTreeBoxShadowBlurColor - Overrides the icon color for the accordion indicator button.
 */
export default class UITree extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get variant() {
    return this.getAttribute('variant') || ''
  }

  get expandClass() {
    return this.getAttribute('state') || ''
  }

  get basepath() {
    return this.getAttribute('basepath') || ''
  }

  get href() {
    return this.getAttribute('href') || ''
  }

  get arrowClass() {
    return this.getAttribute('hide-arrow') === 'true' && 'hidden'
  }

  get isExpanded() {
    return this.getAttribute('state') === 'expanded'
  }

  get treeRoot() {
    return this.shadowRoot.querySelector('.ui-expand')
  }

  async onHeaderClick() {
    const isOpen = this.getAttribute('state') === 'expanded'
    const eventOptions = {
      // flip it.
      detail: { state: isOpen ? 'collapsed' : 'expanded', item: this},
      bubbles: true
    }
    if (isOpen) {
      this.treeRoot.classList.add('expanded')
      this.treeRoot.classList.remove('collapsed')
    } else {
      this.treeRoot.classList.add('collapsed')
      this.treeRoot.classList.remove('expanded')
    }
    this.setAttribute('state', eventOptions.detail.state)
    await this.calculateHeight()
    this.dispatchEvent(new CustomEvent('item-click', eventOptions))
  }

  constructTree({ href, title, children, hasChildren }) {
    href = href || '';
    children = children || [];
    if (hasChildren === undefined) {
      hasChildren = (children.length || href);
    }
    const options = {
      title,
      basepath: this.basepath,
      href: !children.length ? href : '',
      hideArrow: !hasChildren && "true"
    }
    const newNode = lazyTree(options);
    children.map((n)=> this.constructTree(n).forEach((cn) => newNode[1].appendChild(cn)))
    return newNode;
  }

  async calculateHeight() {
    if (this.isExpanded && this.href && !this.fetched) {
      const fetchPath = path.join(this.basepath, this.href);
      console.log('fetching', fetchPath)
      try {
        this.fetched = await (await fetch(fetchPath)).json()
        const list = (Array.isArray(this.fetched) ? this.fetched : this.fetched.children) || []
        list.map((data)=> {
          const nodes = this.constructTree(data)
          console.log(nodes)
          nodes.forEach((n) => {
            this.appendChild(n)
          })
        })
        this.setAttribute('hide-arrow', 'false')
        this.render()
      } catch(ex) {
        this.fetched = true;
        this.setAttribute('hide-arrow', 'true')
        console.warn("unable to lazy load:", fetchPath, ex)
        this.render()
      }
    }
    const contentSlot = this.shadowRoot.querySelector('.ui-expand-content')
    const headerIcon = this.shadowRoot.querySelector('.ui-expand-header-icon')
    const isOpen = this.getAttribute('state') === 'expanded'
    const val = isOpen && 'auto'
    const newHeight = val || 0
    contentSlot.style.height = newHeight
    isOpen ? headerIcon.classList.add('expanded') : headerIcon.classList.remove('expanded')
  }

  connectedCallback() {
    this.render()
  }

  async render() {
    if (!this.children.length && !this.href) {
      this.setAttribute('hide-arrow', 'true')
    }
    renderTree(this).connect()
    if (this.isExpanded) {
      this.calculateHeight()
    }
  }
}

registerComponent('ui-tree', UITree)
