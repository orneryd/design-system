# ui-email-bag

A form input designed to validate emails against ornery's email lookup API.
It functions similarly to that of the chip-bag but with an asynchronous api call for validation

### Usage

```html
<ui-email-bag></ui-email-bag>
```

### React WebComponentWrapper
```jsx
import `@ornery/ui-email-bag`
import WebComponentWrapper from '@ornery/react-web-components'

export const ToolingForm = ({ onValidationstart, onValidationend }) => (
<WebComponentWrapper 
   tag="ui-email-bag" 
   onValidationstart={onValidationstart} 
   onValidationend={onValidationend} 
/>
)
```
### React Component
```jsx
import `@ornery/ui-email-bag`
import WebComponentWrapper from '@ornery/react-web-components'

export const ToolingForm = ({ onFormSuccess }) => (
  <ui-email-bag></ui-email-bag>
)
```

## Attributes

| Attribute            | Type     | Description                                      |
|----------------------|----------|--------------------------------------------------|
| `email-lookup-route` | `String` | The entire path for the user lookup service. default `/api/v1/emails` |

## Properties

| Property           | Modifiers | Type              |
|--------------------|-----------|-------------------|
| `chipBag`          | readonly  | `Element \| null` |
| `domains`          | readonly  | `string`          |
| `emailLookupRoute` | readonly  | `string`          |
| `spinner`          | readonly  | `Element \| null` |
| `validMessage`     | readonly  | `string`          |
| `value`            |           | `string \| null`  |

## Methods

| Method             | Type                                  |
|--------------------|---------------------------------------|
| `chipsUpdate`      | `(e: any): Promise<any> \| undefined` |
| `notifyValidity`   | `(message: any): void`                |
| `removeInvalidCSS` | `(): void`                            |
| `reset`            | `(newVal: any): void`                 |
| `setInvalidCSS`    | `(): void`                            |
| `validateEmail`    | `(email: any): Promise<any>`          |

## Events

| Event             | Description                                      |
|-------------------|--------------------------------------------------|
| `validationend`   | After the validation API call is executed. Event.detail is the complete list of emails. In case of an error, event.detail is an error. |
| `validationstart` | Before the validation API call is executed.      |
