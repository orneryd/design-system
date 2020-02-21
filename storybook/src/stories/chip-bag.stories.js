import React from 'react'
import { action } from '@storybook/addon-actions'
import '../../../packages/paper'
import '../../../packages/chip'
import '../../../packages/chip-bag'
import '../../../packages/button'

export default {
  title: 'Web Components/Chip Bag'
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
      <mds-paper style={{ margin: '10px' }}>
        <mds-chip-bag ref={this.elementRef} value="sample;chips" delimiter=";">
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
      <mds-paper style={{ margin: '10px' }}>
        <mds-chip-bag
          ref={this.elementRef}
          value="sample@email.com;othersample@email.com"
          chip-tag="mds-button"
          delimiter=";"
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
