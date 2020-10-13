# ui-radio

# design-system checkbox
A styled checkbox by the ornery design team.

## Installation

### npm
```bash
npm i `@ornery/ui-radio` --save
```

### yarn
```bash
yarn add `@ornery/ui-radio`
```

### HTML Usage
```html
<form style="width: 360px; margin: 20px;">
<ui-radio type="radio" name="fruit" checked value="Strawberry" />
<ui-radio type="radio" name="fruit" value="Orange" />
<ui-radio type="radio" name="fruit" value="Lemon" />
</form>
```

### React Component
```jsx
import `@ornery/ui-radio`

export const buttons = () => (
<form style={{ width: '360px', margin: '20px' }}>
   <ui-radio type="radio" name="fruit" checked value="Strawberry" />
   <ui-radio type="radio" name="fruit" value="Orange" />
   <ui-radio type="radio" name="fruit" value="Lemon" />
</form>
)
```

### Rendered in the browser

![](samples/radio.png)
<br/>

## Attributes

| Attribute  | Type     | Description                        |
|------------|----------|------------------------------------|
| `disabled` | `String` | sets the enabled or disabled state |
| `label`    | `String` | the checkbox label text            |
| `name`     | `String` | the checkbox label text            |

## Properties

| Property            | Attribute | Modifiers | Type               | Description        |
|---------------------|-----------|-----------|--------------------|--------------------|
| `checked`           | `checked` |           | `String`           | the checked status |
| `indicatorElement`  |           | readonly  | `Element \| null`  |                    |
| `standard`          |           | readonly  | `"" \| "standard"` |                    |
| `validationMessage` |           | readonly  | `string`           |                    |
| `value`             | `value`   |           | `String`           | the checkbox value |

## Methods

| Method            | Type             |
|-------------------|------------------|
| `onClick`         | `(e: any): void` |
| `reset`           | `(): void`       |
| `setCheckedState` | `(): void`       |

## CSS Custom Properties

| Property                 | Type   | Description                                  |
|--------------------------|--------|----------------------------------------------|
| `--uiRadioBorder`       | String | Overrides the border color                   |
| `--uiRadioColorChecked` | String | Overrides the color of the checked indicator |
