import React from 'react'
import { action } from '@storybook/addon-actions'
import '@ornery/ui-paper'
import '@ornery/ui-email-bag'
import '@ornery/ui-button'

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
      <ui-paper elevation={0} style={{ margin: '10px' }}>
        <ui-email-bag
          value="jeff.moore2@ornery.com;devin.birtciel@email.com"
          delimiter=";">
        </ui-email-bag>
      </ui-paper>
    )
  }
}

export const EmailBag = () => <DefaultEmailBag />

