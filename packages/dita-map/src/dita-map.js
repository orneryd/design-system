import { registerComponent } from '@ornery/ui-core'
import '@ornery/render-html'
import UIButton from '@ornery/ui-button'

const customDitaElements = ['xref', 'concept']
const elementNames = customDitaElements.map(t => t + '(ref)?').join('|')
const elementsRegex = new RegExp(`(${elementNames})`, 'gi')
/**
# design-system map
A styled map header and content

## Installation

### npm
```bash
npm i `@ornery/dita-map` --save
```

### yarn
```bash
yarn add `@ornery/dita-map`
```

### Rendered in the browser
 ![](samples/map.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
```css
dita-map {
  --ditaColor: rgb(254, 254, 254);
  --ditaBackgroundColor: rgb(25, 35, 67);
  --ditaMaxWidth: 768px;
  --ditaHeaderColor: inherit;
  --ditaContentMaxWidth: 768px;
  --ditaContentColor: inherit;
}
```

### Rendered in the browser
 ![](samples/map-custom.png)
<br/>

### Rendered in the browser
 ![](samples/map-custom-2.png)
<br/>
 * 
 * 
 * @module UImap
 * @extends {HTMLElement}
 * @element ui-map
 * @description Component to encapsulate the styling of a site map
 * 
 * @slot header - The header slot inside an h1 element
 * @slot content - The content slot inside an h4 element
 * @cssproperty --ditaColor - Overrides the text color for the map.
 * @cssproperty --ditaBackgroundColor - Overrides the background color for the header.
 * @cssproperty --ditaMaxWidth - Overrides the maxwidth for the header and content.
 * @cssproperty --ditaHeaderColor - Overrides the text color for the header.
 * @cssproperty --ditaContentColor - Overrides the text color for the content.
 * @cssproperty --ditaContentMaxWidth - Overrides the max-width for the header.
 *
 * @example
 * 
 * 
 * @example
 * ### HTML
 * <ui-map>
 *   <span slot="header">
 *     Lorem Ipsum
 *   </span>
 *   <span slot="content">
 *     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
 *     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
 *     laboris nisi ut aliquip ex ea commodo consequat.
 *   </span>
 *   <span slot="content">
 *     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
 *     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
 *     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
 *     qui officia deserunt mollit anim id est laborum.
 *   </span>
 * </dita-map>
 *
 * @example
 * ### React Component
 * 
 * import '@ornery/dita-map'
 * 
 * export const map = () => (
 *   <ui-map>
 *     <span slot="header">
 *       Lorem Ipsum
 *     </span>
 *     <span slot="content">
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
 *       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
 *       laboris nisi ut aliquip ex ea commodo consequat.
 *     </span>
 *     <span slot="content">
 *       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
 *       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
 *       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
 *       qui officia deserunt mollit anim id est laborum.
 *     </span>
 *   </dita-map>
 * )
 */
export default class DitaMap extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  attributeChangedCallback(){
    this.getContent()
  }

  connectedCallback() {
    this.getContent()
  }

  getContent() {
    if (this.getAttribute('href')) {
      fetch(this.getAttribute('href'))
        .then(response => response.text())
        .then((str)=> this.render(str))
    } else if (this.getAttribute('dita')) {
      this.render(this.getAttribute('dita'))
    } else {
      this.render(this.innerHTML);
    }
  }

  render(ditaXml) {
    const parser = new DOMParser()
    const ditaMapToElm = ditaXml.replace(elementsRegex, 'dita-$1')
    const correctedXml = ditaMapToElm.replace(/<([\w-]+)(.*)\/\s*>/gim, '<$1$2></$1>')
    const doc = parser.parseFromString(correctedXml, 'text/html')
    const root = [...doc.body.childNodes]
    root.forEach(n => this.shadowRoot.appendChild(n))
  }
}

registerComponent('dita-map', DitaMap)
registerComponent('dita-xref', class extends UIButton{})
