# design-system react-support
A wrapper to handle custom events within any custom elements you want to use within react.
It will also destory the events on unmount for you.

## Installation

### npm
```bash
npm i `@ornery/react-web-components` --save
```

### yarn
```bash
yarn add `@ornery/react-web-components`
```

### React Component
```jsx
import WebComponentWrapper from `@ornery/react-web-components`

export const wrapped = () => (
<WebComponentWrapper tag="my-element" onMyCustomEvent={()=> console.log('I haz cuztem events!')} />
)
```

## Attributes

| Attribute | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `on(.*)`  | `Func`   | (.*) is the event to listen to camelCased. It is converted to kebab-case. <br />If your CustomEvent's name is `custom-event-name` you need to set the prop as onCustomEventName in react. |
| `tag`     | `String` | tag to render                                    |

## Properties

| Property     |
|--------------|
| `elementRef` |

## Methods

| Method                 | Type       |
|------------------------|------------|
| `componentDidMount`    | `(): void` |
| `componentWillUnmount` | `(): void` |
