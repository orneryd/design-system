import {registerComponent} from '@mcklabs/mds-core'
import renderChip from './mds-chip.html'

/**
# mckesson-design-system chip
A styled chip that functions similar a tag or chip in bootstrap or material ui.

## Installation

### npm
```bash
npm i `@mcklabs/mds-chip` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-chip`
```
 *
 *
 * @module MdsChip
 * @extends {HTMLElement}
 * @element mds-chip
 * @description A component that gives you a styled dismissable chip
 * 
 * @attr {String} value - the value for the chip
 * @attr {String} label - the label for the chip
 * 
 * @fires closechip emitted when the X is clicked.
 * 
 * @cssproperty {String} --mdsChipColor - Overrides the border color
 * @cssproperty {String} --mdsChipBackgroundColor - Overrides the color of the checkbox
 * @cssproperty {String} --mdsChipIconColor - Overrides the color of the checkbox
 * @cssproperty {String} --mdsChipIconColorHover - Overrides the color of the checkbox
 * @cssproperty {String} --mdsChipIconColorActive - Overrides the color of the checkbox
 *
 */
export default class MdsChip extends HTMLElement {
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

registerComponent('mds-chip', MdsChip)
