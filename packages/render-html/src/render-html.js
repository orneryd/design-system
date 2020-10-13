import { registerComponent } from '@ornery/ui-core'
/**
# design-system map
A styled map header and content

## Installation

### npm
```bash
npm i `@ornery/render-html` --save
```

### yarn
```bash
yarn add `@ornery/render-html`
```

### Rendered in the browser
 ![](samples/map.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
```css
render-html {
  --renderHtmlColor: rgb(254, 254, 254);
  --renderHtmlBackgroundColor: rgb(25, 35, 67);
  --renderHtmlMaxWidth: 768px;
  --renderHtmlHeaderColor: inherit;
  --renderHtmlContentMaxWidth: 768px;
  --renderHtmlContentColor: inherit;
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
 * @element render-html
 * @description Component to encapsulate the styling of a site map
 * 
 * @slot header - The header slot inside an h1 element
 * @slot content - The content slot inside an h4 element
 * @cssproperty --renderHtmlColor - Overrides the text color for the map.
 * @cssproperty --renderHtmlBackgroundColor - Overrides the background color for the header.
 * @cssproperty --renderHtmlMaxWidth - Overrides the maxwidth for the header and content.
 * @cssproperty --renderHtmlHeaderColor - Overrides the text color for the header.
 * @cssproperty --renderHtmlContentColor - Overrides the text color for the content.
 * @cssproperty --renderHtmlContentMaxWidth - Overrides the max-width for the header.
 *
 * @example
 * 
 * 
 * @example
 * ### HTML
 * <render-html>
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
 * </render-html>
 *
 * @example
 * ### React Component
 * 
 * import '@ornery/render-html'
 * 
 * export const map = () => (
 *   <render-html>
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
 *   </render-html>
 * )
 */
export default class RenderHTML extends HTMLElement {
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
    } else if (this.getAttribute('html')) {
      this.render(this.getAttribute('html'))
    } else {
      this.render(this.innerHTML);
    }
  }

  render(markupStr) {
    const parser = new DOMParser()
    const correctedXml = markupStr.replace(/<([\w-]+)(.*)\/\s*>/gim, '<$1$2></$1>')
    const doc = parser.parseFromString(correctedXml, 'text/html')
    const root = [...doc.body.childNodes]
    root.forEach(n => this.shadowRoot.appendChild(n))
  }
}

registerComponent('render-html', RenderHTML)
