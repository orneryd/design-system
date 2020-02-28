import renderBanner from './mds-banner.html'
/**
 * @module MdsBanner
 * @extends {HTMLElement}
 * @description Component to encapsulate the styling of a site banner
 * 
 * @property {Slots} slots named slots for the consumer's content
 * @property {Slot} header The header slot inside an h1 element
 * @property {Slot} content The content slot inside an h4 element
 * @property {enum} CSSVariables below are the variables that can be overridden by css
 * @property {String} --mdsBannerColor Overrides the text color for the banner.
 * @property {String} --mdsBannerBackgroundColor Overrides the background color for the header.
 * @property {String} --mdsBannerMaxWidth Overrides the maxwidth for the header and content.
 * @property {String} --mdsBannerHeaderColor Overrides the text color for the header.
 * @property {String} --mdsBannerHeaderMaxWidth Overrides the max-width for the header.
 * @property {String} --mdsBannerContentColor Overrides the text color for the content.
 * @property {String} --mdsBannerContentMaxWidth Overrides the max-width for the header.
 *
 * @example @lang html <caption>HTML Usage</caption>
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
 * @example @lang jsx <caption>React Component</caption>
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
 *
 * @example @lang off
 * ### Rendered in the browser
 *
 * ![](samples/banner.png)
 * <br/>
 * 
 * 
 * @example @lang off
 * ### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
 * 
 * 
 * @example @lang css
 * :root {
 *   --mdsBannerMaxWidth: 1024px;
 *   --mdsBannerColor: purple;
 *   --mdsBannerBackgroundColor: rgba(255, 166, 0, 0.783);
 * }
 *
 * 
 * @example @lang off 
 * ### Rendered in the browser
 *
 * ![](samples/banner-custom.png)
 * <br/>
 * 
 * 
 * @example @lang css
 * :root {
 *   --mdsBannerBackgroundColor: orange;
 *   --mdsBannerHeaderColor: darkgreen;
 *   --mdsBannerHeaderMaxWidth: 320px;
 *   --mdsBannerContentColor: white;
 *   --mdsBannerContentMaxWidth: 320px;
 * }
 *
 * 
 * @example @lang off 
 * ### Rendered in the browser
 *
 * ![](samples/banner-custom-2.png)
 * <br/>
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

customElements.define('mds-banner', MdsBanner)
