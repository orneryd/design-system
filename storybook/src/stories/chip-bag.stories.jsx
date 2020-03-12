import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import '@mcklabs/mds-paper'
import '@mcklabs/mds-chip'
import '@mcklabs/mds-chip-bag'
import '@mcklabs/mds-button'

export default {
  title: 'Web Components/Chip',
  decorators: [withKnobs]
}

const chipClickedAction = action(`chip clicked!`)
const chipUpdatedAction = action(`chips updated!`)

class DefaultChipBag extends React.Component {
  constructor(props) {
    super(props)

    this.elementRef = React.createRef()
  }

  componentDidMount() {
    if (this.elementRef.current) {
      this.elementRef.current.addEventListener('chipclick', chipClickedAction)
      this.elementRef.current.addEventListener('chipsupdate', chipUpdatedAction)
    }
  }

  componentWillUnmount() {
    if (this.elementRef.current) {
      this.elementRef.current.removeEventListener('chipclick', chipClickedAction)
      this.elementRef.current.removeEventListener('chipsupdate', chipUpdatedAction)
    }
  }
  render() {
    return (
      <mds-paper elevation={0} style={{ margin: '10px' }}>
        <mds-chip-bag
          ref={this.elementRef}
          value="sample;chips"
          delimiter=";"
          invalid={boolean('Invalid', false, 'validation')}
        >
          <div
            style={{ fontStyle: 'italic', fontColor: 'rgba(0,0,0,0.2)', marginTop: '5px' }}
            slot="mds-chip-bag-helper"
          >
            Add some chips!
          </div>
        </mds-chip-bag>
      </mds-paper>
    )
  }
}

class CustomBag extends React.Component {
  constructor(props) {
    super(props)

    this.elementRef = React.createRef()
  }

  componentDidMount() {
    if (this.elementRef.current) {
      this.elementRef.current.addEventListener('chipclick', chipClickedAction)
      this.elementRef.current.addEventListener('chipsupdate', chipUpdatedAction)
    }
  }

  componentWillUnmount() {
    if (this.elementRef.current) {
      this.elementRef.current.removeEventListener('chipclick', chipClickedAction)
      this.elementRef.current.removeEventListener('chipsupdate', chipUpdatedAction)
    }
  }

  render() {
    return (
      <mds-paper elevation={0} style={{ margin: '10px' }}>
        <mds-chip-bag
          ref={this.elementRef}
          value="sample@email.com;othersample@email.com"
          chip-tag="mds-button"
          delimiter=";"
          invalid={boolean('Invalid', false, 'validation')}
        >
          <div
            style={{ fontStyle: 'italic', fontColor: 'rgba(0,0,0,0.2)', marginTop: '5px' }}
            slot="mds-chip-bag-helper"
          >
            Add some buttons!
          </div>
        </mds-chip-bag>
      </mds-paper>
    )
  }
}

export const ChipBag = () => <DefaultChipBag />

export const CustomChipBag = () => <CustomBag />
