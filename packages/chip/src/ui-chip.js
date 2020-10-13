import {registerComponent} from '@ornery/ui-core'
import renderChip from './ui-chip.html'

/**
# design-system chip
A styled chip that functions similar a tag or chip in bootstrap or material ui.

## Installation

### npm
```bash
npm i `@ornery/ui-chip` --save
```

### yarn
```bash
yarn add `@ornery/ui-chip`
```
 *
 *
 * @module UIChip
 * @extends {HTMLElement}
 * @element ui-chip
 * @description A component that gives you a styled dismissable chip
 * 
 * @attr {String} value - the value for the chip
 * @attr {String} label - the label for the chip
 * 
 * @fires closechip emitted when the X is clicked.
 * 
 * @cssproperty {String} --uiChipColor - Overrides the border color
 * @cssproperty {String} --uiChipBackgroundColor - Overrides the color of the checkbox
 * @cssproperty {String} --uiChipIconColor - Overrides the color of the checkbox
 * @cssproperty {String} --uiChipIconColorHover - Overrides the color of the checkbox
 * @cssproperty {String} --uiChipIconColorActive - Overrides the color of the checkbox
 *
 */
export default class UIChip extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  closeChip() {
    this.dispatchEvent(new Event('closechip', { bubbles: true, composed: true, cancelable: false }))
  }

  connectedCallback() {
    renderChip(this).connect()
  }
}

registerComponent('ui-chip', UIChip)
