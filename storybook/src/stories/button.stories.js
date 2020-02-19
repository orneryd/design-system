import React from 'react'
import { storiesOf } from '@storybook/react'
import '../../../packages/button'
import '../../../packages/paper'

const buttonTypes = [
  ['primary', 'primary rounded'],
  ['secondary', 'secondary rounded'],
  ['outlined', 'outlined rounded']
]
const buttonStories = storiesOf('Web Components | Buttons', module)
buttonTypes.forEach(subtypes =>
  buttonStories.add(subtypes[0], () => (
    <mds-paper>
    {subtypes.map((subtype) => 
      <mds-button variant={subtype}>{subtype}</mds-button>
    )}
    </mds-paper>
  ))
)
