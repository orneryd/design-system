import renderPaper from './mds-paper.html'

/**
 * @module MdsPaper
 * @extends {HTMLElement} root The root element to find all elements from.
 * @description Styled component that has different elevations
 * @param {String} [elevation="1"] Sets the elevation for the accordion's internal [MdsPaper]{@link ../packages/paper} element
 * 
 * @property {enum} CSSVariables
 * @property {CSSVariable} --mdsPaperBackgroundColor Overrides the icon color for the accordion indicator button.
 * @property {CSSVariable} --mdsPaperBoxShadowHOffsetColor Overrides the icon color for the accordion indicator button.
 * @property {CSSVariable} --mdsPaperBoxShadowVOffsetColor Overrides the icon color for the accordion indicator button.
 * @property {CSSVariable} --mdsPaperBoxShadowBlurColor Overrides the icon color for the accordion indicator button.
 * 
 * @example @lang html <caption>HTML Usage</caption>
 * <mds-paper elevation="6">
 *   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
 *   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
 *   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
 *   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
 *   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 * </mwc-paper>
 *
 * @example @lang jsx <caption>React Component</caption>
 * import '@mcklabs/mds-banner'
 * 
 * export const paper = () => (
 *   <mds-paper
 *     elevation={6}
 *   >
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
 *       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
 *       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
 *       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
 *       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *     </div>
 *   </mds-paper>
 * 
 * @example @lang off
 * ### Rendered in the browser
 * 
 * ![](samples/paper.png)
 * <br/>
 * 
 * @example @lang off
 * ### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
 * 
 * 
 * @example @lang css
 * :root {
 *   --mdsPaperColor: orange;
 *   --mdsPaperBackgroundColor: purple;
 *   --mdsPaperBoxShadowHOffsetColor: rgba(255, 0, 255, 0.2);
 *   --mdsPaperBoxShadowVOffsetColor: rgba(255, 0, 255, 0.14);
 *   --mdsPaperBoxShadowBlurColor: rgba(255, 0, 255, 0.12);
 * }
 *
 * 
 * @example @lang off 
 * ### Rendered in the browser
 *
 * ![](samples/paper-custom.png)
 * <br/>
 */
export default class MdsPaper extends HTMLElement {
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

customElements.define('mds-paper', MdsPaper)
