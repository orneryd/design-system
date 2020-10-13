# ui-text-input

# design-system text-input
A styled text-input by the ornery design team.

## Installation

### npm
```bash
npm i `@ornery/ui-text-input` --save
```

### yarn
```bash
yarn add `@ornery/ui-text-input`
```

### HTML Usage
```html
<form>
<ui-text-input label="Some Label"></ui-text-input>
<ui-text-input value="some initial value" label="I have an initial Value"></ui-text-input>
<ui-text-input type="password" label="Type Some Secure Text"></ui-text-input>
<ui-text-input type="email" label="Type an email to be validated"></ui-text-input>
<ui-text-input type="date" static-label label="Enter a Date"></ui-text-input>
</form>
```

### React Component
```jsx
import `@ornery/ui-checkbox`

export const Text = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <ui-text-input label="Some Label"></ui-text-input>
</div>
)
export const InitialValue = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <ui-text-input value="some initial value" label="I have an initial Value"></ui-text-input>
</div>
)
export const Secure = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <ui-text-input type="password" label="Type Some Secure Text"></ui-text-input>
</div>
)

export const Email = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <form>
     <ui-text-input
       type="email"
       label="Type an email to be validated"
     ></ui-text-input>
   </form>
</div>
)
export const Color = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <form>
     <ui-text-input
       type="color"
       static-label
       label="Select a color"
     ></ui-text-input>
   </form>
</div>
)

export const Date = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <form>
     <ui-text-input
       type="date"
       static-label
       label="Enter a Date"
     ></ui-text-input>
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
| `--uiTextInputLabelTransform`        | String | Overrides the label transform property           |
| `--uiTextInputLabelTransformFocused` | String | Overrides the label transform property when focused |
| `--uiTextInputLabelTransformOrigin`  | String | Overrides the label transform-origin property    |
| `--uiTextInputUnderline`             | String | Overrides the input underline indictator         |
| `--uiTextInputUnderlineInvalid`      | String | Overrides the input underline indictator when invalid |
