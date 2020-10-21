import { bindEvents, template } from '@ornery/web-components';
/**
## Installation

### npm
```bash
npm i `@ornery/render-html` --save
```

### yarn
```bash
yarn add `@ornery/render-html`
```

## Examples

```javascript
import '@ornery/render-html'
```
 * 
 * 
 * @module RenderHTML
 * @extends {HTMLElement}
 * @element render-html
 * 
 *
 * @example
 * ```jsx
 * ### JSX or HTML
 * export const RemoteRender = () => (
 *   <render-html href="/samples/snippet.html" placeholder="Your Email Address"></render-html>
 * )
 * 
 * export const RenderAttribute = () => (
 *   <render-html placeholder="Do something else" html="<p> I am some simple html content to be passed as either <ul><li>an 'html' attribute </li><li>as the body</li></ul></p> ${this.placeholder}"></render-html>
 * )
 * 
 * const interpolation = 'How did i get here? ${this.placeholder}'
 * export const RenderBody = () => (
 *   <render-html placeholder="I'm changing via attributes" >
 *     <div> I am some simple html content to be passed as either <ul><li>an 'html' attribute </li><li>as the body</li></ul></div>
 *     <div>{interpolation}</div>
 *   </render-html>
 * )
 * ```
 * 
 */
export default class RenderHTML extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  attributeChangedCallback(){
    this.applyAttributes()
    this.getContent()
  }

  connectedCallback() {
    this.applyAttributes()
    this.getContent()
  }

  applyAttributes() {
    Array.from(this.attributes).forEach(attr => {
      this[attr.name] = attr.value
    })
    Array.from(this.attributes).forEach(attr => {
      this[attr.name] = attr.value
    })
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
    this.shadowRoot.innerHTML = ''
    const props = this
    const templateWithProps = markupStr.replace(/\$\{.+?}/gim, s => {
      return template(s, props)
    }).replace(/<([\w-]+)(.*)\/\s*>/gim, '<$1$2></$1>')
    const parsed = new DOMParser().parseFromString(templateWithProps, 'text/html'); 
    const elements = [...parsed.head.children, ...bindEvents(parsed.body, props).childNodes];
    elements.forEach(n => this.shadowRoot.appendChild(n))
  }
}

customElements.define('render-html', RenderHTML)
