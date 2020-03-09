import React from 'react'

const toEventName = (string) => {
  const sanitized = string
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .replace(/^on-/, '')
    .toLowerCase()
  return sanitized
}

/**
 * 
# mckesson-design-system react-support
A wrapper to handle custom events within any custom elements you want to use within react.
It will also destory the events on unmount for you.

## Installation

### npm
```bash
npm i `@mcklabs/mds-react` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-react`
```

### React Component
```jsx
import WebComponentWrapper from `@mcklabs/mds-react`

export const wrapped = () => (
  <WebComponentWrapper tag="my-element" onMyCustomEvent={()=> console.log('I haz cuztem events!')} />
)
```
 * @module WebComponentWrapper
 * @element
 * @attr {String} tag - tag to render
 * @attr {Func} on(.*) - (.*) is the event to listen to camelCased. It is converted to kebab-case. 
 * If your CustomEvent's name is `custom-event-name` you need to set the prop as onCustomEventName in react.
 */
class WebComponentWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.elementRef = React.createRef()
  }

  componentDidMount() {
    const { current } = this.elementRef
    if (current) {
      Object.entries(this.props).forEach(([k, v]) => {
        if (k.startsWith('on')) {
          current.addEventListener(toEventName(k), v)
        }
      })
    }
  }

  componentWillUnmount() {
    const { current } = this.elementRef
    if (current) {
      Object.entries(this.props).forEach(([k, v]) => {
        if (k.startsWith('on')) {
          current.removeEventListener(toEventName(k), v)
        }
      })
    }
  }

  render() {
    return React.createElement(this.props.tag, {
      ref: this.elementRef,
      ...this.props
    })
  }
}

export default WebComponentWrapper
