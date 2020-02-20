import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import '../../../packages/paper'
import '../../../packages/accordion'
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
const elevations = [3, 6, 9, 12, 15, 18, 24]

export default {
  title: 'Web Components/Panels',
  decorators: [withKnobs]
}

const label = 'Elevation'
const defaultValue = 3
const options = {
  range: true,
  min: 0,
  max: 24,
  step: 1
}
const groupId = 'ELEVATION'

export const paper = () => (
  <div>
    <mds-paper
      style={{ display: 'inline-block', margin: '10px' }}
      elevation={number(label, defaultValue, options, groupId)}
    >
      <h4>Elevation&nbsp;{number(label, defaultValue, options, groupId)}</h4>
      <div>{loremIpsum}</div>
    </mds-paper>
    {elevations.map((el, i) => {
      return (
        <mds-paper key={i} style={{ display: 'inline-block', margin: '10px' }} elevation={el}>
          <h4 style={{ height: '200px', width: '200px', margin: 0, padding: 0 }}>
            Elevation&nbsp;{el}
          </h4>
        </mds-paper>
      )
    })}
  </div>
)

export const accordion = () => (
  <div>
    <mds-accordion
      elevation={number(label, defaultValue, options, groupId)}
      style={{ margin: '10px' }}
      state="open"
    >
      <div slot="accordion-header">Default open</div>
      <div slot="accordion-content">{loremIpsum}</div>
    </mds-accordion>
    <mds-accordion
      elevation={number(label, defaultValue, options, groupId)}
      style={{ margin: '10px' }}
      state="collapse"
    >
      <div slot="accordion-header">Default collapse</div>
      <div slot="accordion-content">{loremIpsum}</div>
    </mds-accordion>
  </div>
)
