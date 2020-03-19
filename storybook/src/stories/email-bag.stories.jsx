import React from 'react'
import { action } from '@storybook/addon-actions'
import '@mcklabs/mds-paper'
import '@mcklabs/mds-email-bag'
import '@mcklabs/mds-button'

export default {
  title: 'Web Components/Chip',
}

const chipClickedAction = action(`chip clicked!`)
const chipUpdatedAction = action(`chips updated!`)

class DefaultEmailBag extends React.Component {
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
        <mds-email-bag
          value="jeff.moore2@mckesson.com;devin.birtciel@email.com"
          delimiter=";">
        </mds-email-bag>
      </mds-paper>
    )
  }
}

export const EmailBag = () => <DefaultEmailBag />

