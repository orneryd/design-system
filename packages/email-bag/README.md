# mds-email-bag

A form input designed to validate emails against mckesson's email lookup api.
It functions similarly to that of the chip-bag but with an asynchronous api call for validation

### Usage

```html
<mds-email-bag></mds-email-bag>
```

### React WebComponentWrapper
```jsx
import `@mcklabs/mds-email-bag`
import WebComponentWrapper from '@mcklabs/mds-react'

export const ToolingForm = ({ onValidationstart, onValidationend }) => (
<WebComponentWrapper 
   tag="mds-email-bag" 
   onValidationstart={onValidationstart} 
   onValidationend={onValidationend} 
/>
)
```
### React Component
```jsx
import `@mcklabs/mds-email-bag`
import WebComponentWrapper from '@mcklabs/mds-react'

export const ToolingForm = ({ onFormSuccess }) => (
  <mds-email-bag></mds-email-bag>
)
```

## Attributes

| Attribute            | Type     | Description                                      |
|----------------------|----------|--------------------------------------------------|
| `email-lookup-route` | `String` | the entire path for the user lookup service. default `/api/v1/emails` |

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
| `validationend`   | after the validation api call is executed. Event.detail is the complete list of emails. In case of an error, event.detail is an error. |
| `validationstart` | before the validation api call is executed.      |
