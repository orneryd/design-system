import { registerComponent } from '@ornery/mds-core'
import { template, ContextBinding } from '@ornery/web-components'
import { bindEvents, setupConnect } from '@ornery/web-components/templates'
const templateNameRegexp = /^mds\-[\w-]/

/**
A template element designed to allow for reusable templates on the fly without needing to write javascript.
It supports an es6-type template literal style syntax for values. 
No function calls or ternary expressions are supported within the markup itself. Only values.

### Usage

```html
<template is="mds-template" name="mds-bears" someattr="default value">
    <!-- you can add inline styles that will go into the shadow dom. -->
    <style>
    :host {
        display: block;
    }
    </style>
    <div>${this.someattr}</div>
</template>
```

### later in markup you can reuse the newly formed component
```
<mds-bears></mds-bears>
<mds-bears someattr="bears"></mds-bears>
```

 *
 * @module HTMLMdsTemplateElement
 * @element mds-template
 * @extends {HTMLTemplateElement}
 * @description A template element designed to allow for reusable templates on the fly without needing to write javascript
 *
 * @attr {String} name - the name of the element type to register. You must prefix the name with mds-
 * @attr {String} id - the name of the element type to register. You must prefix the name with mds-. The name attribute takes precedence.
 * @attr {string} [any] - any attributes will be passed to the element instances as default values. Any attributes specified on the usage of the element will override that value.
 *
 */
export default class HTMLMdsTemplateElement extends HTMLTemplateElement {
  constructor(props) {
    super(props)
  }

  connectedCallback() {
    const componentName = this.getAttribute('name') || this.getAttribute('id')
    if (!componentName || !templateNameRegexp.test(componentName)) {
      throw new Error(
        'You cannot define a template without a name or id attribute that starts with "mds-"'
      )
    }
    const htmlTemplate = `${this.innerHTML}`
    const render = (props = {}) => {
      const templateWithProps = htmlTemplate.replace(/\$\{.+?}/gim, s => {
        return template(s, props)
      })
      const parsed = new DOMParser().parseFromString(templateWithProps, 'text/html')
      const elements = [...parsed.head.children, ...bindEvents(parsed.body, props).childNodes]
      return setupConnect(elements, props)
    }

    const props = this

    registerComponent(
      componentName,
      ContextBinding(
        class extends HTMLElement {
          constructor() {
            super()
            this.attachShadow({ mode: 'open' })
          }
          connectedCallback() {
            this.applyAttributes()
            this._observer = new MutationObserver(() => this.applyAttributes())
            this._observer.observe(this, { attributes: true })
          }
          applyAttributes() {
            Array.from(props.attributes).forEach(attr => {
              this[attr.name] = attr.value
            })
            Array.from(this.attributes).forEach(attr => {
              this[attr.name] = attr.value
            })
            render(this).connect()
          }
          disconnectedCallback() {
            // Later, you can stop observing
            this._observer.disconnect()
          }
        }
      )
    )
  }
}

registerComponent('mds-template', HTMLMdsTemplateElement, { extends: 'template' })
