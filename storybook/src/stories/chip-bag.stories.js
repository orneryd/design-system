import React from 'react'
import { action } from '@storybook/addon-actions'
import '../../../packages/paper'
import '../../../packages/chip'
import '../../../packages/chip-bag'
import '../../../packages/button'

export default {
  title: 'Web Components/Chip Bag'
}

export const ChipBag = () => (
  <mds-paper>
    <mds-chip-bag value="sample;chips" delimiter=";">
      <div slot="chip-bag-helper">Add some chips!</div>
    </mds-chip-bag>
  </mds-paper>
)

class CustomBag extends React.Component {
  constructor(props){
    super(props)

    this.elementRef = React.createRef()
  }

  componentDidMount(){
    if (this.elementRef.current) {
      this.elementRef.current.addEventListener('chipclicked', this.props.onChipClick)
    }
  }

  render() {
    return (
      <mds-paper>
        <mds-chip-bag ref={this.elementRef} value="sample@email.com;othersample@email.com" chip-tag="mds-button" delimiter=";">
          <div slot="chip-bag-helper">Add some chips!</div>
        </mds-chip-bag>
      </mds-paper>
    )
  }
}

export const CustomChipBag = ()=> <CustomBag onChipClick={(e)=> action(`chip clicked!${e.detail}`, )()}/>

