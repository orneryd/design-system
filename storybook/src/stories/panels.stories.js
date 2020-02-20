import React from 'react'
import '../../../packages/paper'
import '../../../packages/accordion'

const smallSquareStyles = { height: '100px', width: '100px' }
const elevations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default {
  title: 'Web Components/Panels'
}
export const paper = () => (
  <div>
    {elevations.map((el, i) => {
      return (
        <mds-paper key={i} style={{ display: 'inline-block' }} elevation={el}>
          <div style={smallSquareStyles}>Elevation&nbsp;{el}</div>
        </mds-paper>
      )
    })}
  </div>
)

export const accordion = () => (
  <div>
    <mds-accordion state="open">
      <div slot="accordion-header">Default open</div>
      <div slot="accordion-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </mds-accordion>
    <mds-accordion state="collapse">
      <div slot="accordion-header">Default collapse</div>
      <div slot="accordion-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </mds-accordion>
  </div>
)
