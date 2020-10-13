import {registerComponent} from '@ornery/ui-core'
import renderConcept from './dita-concept.html'
/**
# design-system concept
A styled concept header and content

## Installation

### npm
```bash
npm i `@ornery/dita-concept` --save
```

### yarn
```bash
yarn add `@ornery/dita-concept`
```

### Rendered in the browser
 ![](samples/concept.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
```css
dita-concept {
  --uiconceptColor: rgb(254, 254, 254);
  --uiconceptBackgroundColor: rgb(25, 35, 67);
  --uiconceptMaxWidth: 768px;
  --uiconceptHeaderColor: inherit;
  --uiconceptContentMaxWidth: 768px;
  --uiconceptContentColor: inherit;
}
```

### Rendered in the browser
 ![](samples/concept-custom.png)
<br/>

### Rendered in the browser
 ![](samples/concept-custom-2.png)
<br/>
 * 
 * 
 * @module UIconcept
 * @extends {HTMLElement}
 * @element dita-concept
 * @description Component to encapsulate the styling of a site concept
 * 
 * @slot header - The header slot inside an h1 element
 * @slot content - The content slot inside an h4 element
 * @cssproperty --uiconceptColor - Overrides the text color for the concept.
 * @cssproperty --uiconceptBackgroundColor - Overrides the background color for the header.
 * @cssproperty --uiconceptMaxWidth - Overrides the maxwidth for the header and content.
 * @cssproperty --uiconceptHeaderColor - Overrides the text color for the header.
 * @cssproperty --uiconceptContentColor - Overrides the text color for the content.
 * @cssproperty --uiconceptContentMaxWidth - Overrides the max-width for the header.
 *
 * @example
 * 
 * 
 * @example
 * ### HTML
 * <dita-concept>
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
 * </dita-concept>
 *
 * @example
 * ### React Component
 * 
 * import '@ornery/dita-concept'
 * 
 * export const concept = () => (
 *   <dita-concept>
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
 *   </dita-concept>
 * )
 */
export default class UIConcept extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const ditaTitle = this.querySelector('title')
    const conceptBody = this.querySelector('conbody')
    this.header = ditaTitle && ditaTitle.innerHTML;
    this.content = conceptBody && conceptBody.innerHTML;
    this.render()
  }
  render(){
    renderConcept(this).connect()
  }
}

registerComponent('dita-concept', UIConcept)
