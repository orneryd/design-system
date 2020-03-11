# mds-text-input

# mckesson-design-system text-input
A styled text-input by the mckesson design team.

## Installation

### npm
```bash
npm i `@mcklabs/mds-text-input` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-text-input`
```

### HTML Usage
```html
<form>
<mds-text-input label="Some Label"></mds-text-input>
<mds-text-input value="some initial value" label="I have an initial Value"></mds-text-input>
<mds-text-input type="password" label="Type Some Secure Text"></mds-text-input>
<mds-text-input type="email" label="Type an email to be validated"></mds-text-input>
<mds-text-input type="date" static-label label="Enter a Date"></mds-text-input>
</form>
```

### React Component
```jsx
import `@mcklabs/mds-checkbox`

export const Text = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <mds-text-input label="Some Label"></mds-text-input>
</div>
)
export const InitialValue = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <mds-text-input value="some initial value" label="I have an initial Value"></mds-text-input>
</div>
)
export const Secure = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <mds-text-input type="password" label="Type Some Secure Text"></mds-text-input>
</div>
)

export const Email = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <form>
     <mds-text-input
       type="email"
       label="Type an email to be validated"
     ></mds-text-input>
   </form>
</div>
)
export const Color = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <form>
     <mds-text-input
       type="color"
       static-label
       label="Select a color"
     ></mds-text-input>
   </form>
</div>
)

export const Date = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <form>
     <mds-text-input
       type="date"
       static-label
       label="Enter a Date"
     ></mds-text-input>
   </form>
</div>
)

```

### Rendered in the browser

![](samples/input.png)
<br/>

## Attributes

| Attribute      | Type     | Description                                      |
|----------------|----------|--------------------------------------------------|
| `label`        | `String` | the text input label                             |
| `pattern`      | `String` | the regular expression pattern to validate the text value against |
| `required`     | `String` | indicates if the field is required for submitting a form |
| `static-label` | `String` | indicates wether to animate the label or remain static |

## Properties

| Property       | Attribute | Modifiers | Type              | Description          |
|----------------|-----------|-----------|-------------------|----------------------|
| `inputWrapper` |           | readonly  | `Element \| null` |                      |
| `type`         | `type`    |           | `String`          | the text input type  |
| `value`        | `value`   |           | `String`          | the text input value |

## Methods

| Method              | Type                                             |
|---------------------|--------------------------------------------------|
| `focusInput`        | `(): void`                                       |
| `handleBlur`        | `(): void`                                       |
| `handleFocus`       | `(): void`                                       |
| `handleInputChange` | `({ target: { value } }: { target: { value: any; }; }): void` |
| `reset`             | `(newVal: any): void`                            |

## CSS Custom Properties

| Property                              | Type   | Description                                      |
|---------------------------------------|--------|--------------------------------------------------|
| `--mdsTextInputLabelTransform`        | String | Overrides the label transform property           |
| `--mdsTextInputLabelTransformFocused` | String | Overrides the label transform property when focused |
| `--mdsTextInputLabelTransformOrigin`  | String | Overrides the label transform-origin property    |
| `--mdsTextInputUnderline`             | String | Overrides the input underline indictator         |
| `--mdsTextInputUnderlineInvalid`      | String | Overrides the input underline indictator when invalid |
