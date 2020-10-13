import {registerComponent} from '@ornery/ui-core'
import renderTitle from './ui-title.html'
/**
# design-system title
A styled title header and content

## Installation

### npm
```bash
npm i `@ornery/ui-title` --save
```

### yarn
```bash
yarn add `@ornery/ui-title`
```

### Rendered in the browser
 ![](samples/title.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
```css
ui-title {
  --uititleColor: rgb(254, 254, 254);
  --uititleBackgroundColor: rgb(25, 35, 67);
  --uititleMaxWidth: 768px;
  --uititleHeaderColor: inherit;
  --uititleContentMaxWidth: 768px;
  --uititleContentColor: inherit;
}
```

### Rendered in the browser
 ![](samples/title-custom.png)
<br/>

### Rendered in the browser
 ![](samples/title-custom-2.png)
<br/>
 * 
 * 
 * @module UItitle
 * @extends {HTMLElement}
 * @element ui-title
 * @description Component to encapsulate the styling of a site title
 * 
 * @slot header - The header slot inside an h1 element
 * @slot content - The content slot inside an h4 element
 * @cssproperty --uititleColor - Overrides the text color for the title.
 * @cssproperty --uititleBackgroundColor - Overrides the background color for the header.
 * @cssproperty --uititleMaxWidth - Overrides the maxwidth for the header and content.
 * @cssproperty --uititleHeaderColor - Overrides the text color for the header.
 * @cssproperty --uititleContentColor - Overrides the text color for the content.
 * @cssproperty --uititleContentMaxWidth - Overrides the max-width for the header.
 *
 * @example
 * 
 * 
 * @example
 * ### HTML
 * <ui-title>
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
 * </ui-title>
 *
 * @example
 * ### React Component
 * 
 * import '@ornery/ui-title'
 * 
 * export const title = () => (
 *   <ui-title>
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
 *   </ui-title>
 * )
 */
export default class UITitle extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    renderTitle(this).connect()
  }
}

registerComponent('ui-title', UITitle)
