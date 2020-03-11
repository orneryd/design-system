import {registerComponent} from '@mcklabs/mds-core'
import renderBanner from './mds-banner.html'
/**
# mckesson-design-system banner
A styled banner header and content

## Installation

### npm
```bash
npm i `@mcklabs/mds-banner` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-banner`
```

### Rendered in the browser
 ![](samples/banner.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
```css
:root {
  --mdsBannerMaxWidth: 1024px;
  --mdsBannerColor: purple;
  --mdsBannerBackgroundColor: rgba(255, 166, 0, 0.783);
}
```

### Rendered in the browser
 ![](samples/banner-custom.png)
<br/>

```css
:root {
  --mdsBannerBackgroundColor: orange;
  --mdsBannerHeaderColor: darkgreen;
  --mdsBannerHeaderMaxWidth: 320px;
  --mdsBannerContentColor: white;
  --mdsBannerContentMaxWidth: 320px;
}
```

### Rendered in the browser
 ![](samples/banner-custom-2.png)
<br/>
 * 
 * 
 * @module MdsBanner
 * @extends {HTMLElement}
 * @element mds-banner
 * @description Component to encapsulate the styling of a site banner
 * 
 * @slot header - The header slot inside an h1 element
 * @slot content - The content slot inside an h4 element
 * @cssproperty --mdsBannerColor - Overrides the text color for the banner.
 * @cssproperty --mdsBannerBackgroundColor - Overrides the background color for the header.
 * @cssproperty --mdsBannerMaxWidth - Overrides the maxwidth for the header and content.
 * @cssproperty --mdsBannerHeaderColor - Overrides the text color for the header.
 * @cssproperty --mdsBannerHeaderMaxWidth - Overrides the max-width for the header.
 * @cssproperty --mdsBannerContentColor - Overrides the text color for the content.
 * @cssproperty --mdsBannerContentMaxWidth - Overrides the max-width for the header.
 *
 * @example
 * 
 * 
 * @example
 * ### HTML
 * <mds-banner>
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
 * </mds-banner>
 *
 * @example
 * ### React Component
 * 
 * import '@mcklabs/mds-banner'
 * 
 * export const banner = () => (
 *   <mds-banner>
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
 *   </mds-banner>
 * )
 */
export default class MdsBanner extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    renderBanner(this).connect()
  }
}

registerComponent('mds-banner', MdsBanner)
