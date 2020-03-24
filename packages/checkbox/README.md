# mds-checkbox

# mckesson-design-system checkbox
A styled checkbox by the mckesson design team.

## Installation

### npm
```bash
npm i `@mcklabs/mds-checkbox` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-checkbox`
```

### HTML Usage
```html
<form>
<mds-checkbox checked label="Some Label" />
</form>
```

### React Component
```jsx
import `@mcklabs/mds-checkbox`

export const buttons = () => (
<form style={{ width: '360px', margin: '20px' }}>
   <mds-checkbox checked={"true"} label="Some Label" />
</form>
)
```

### Rendered in the browser

![](samples/checkbox.png)
<br/>

## Attributes

| Attribute  | Type     | Description                        |
|------------|----------|------------------------------------|
| `disabled` | `String` | sets the enabled or disabled state |
| `label`    | `String` | the checkbox label text            |

## Properties

| Property            | Attribute | Modifiers | Type               | Description        |
|---------------------|-----------|-----------|--------------------|--------------------|
| `checked`           | `checked` |           | `String`           | the checked status |
| `indicatorElement`  |           | readonly  | `Element \| null`  |                    |
| `inputWrapper`      |           | readonly  | `Element \| null`  |                    |
| `standard`          |           | readonly  | `"" \| "standard"` |                    |
| `validationMessage` |           | readonly  | `string`           |                    |
| `value`             |           |           | `"" \| "checked"`  |                    |

## Methods

| Method            | Type       |
|-------------------|------------|
| `onClick`         | `(): void` |
| `reset`           | `(): void` |
| `setCheckedState` | `(): void` |

## CSS Custom Properties

| Property                    | Type   | Description                         |
|-----------------------------|--------|-------------------------------------|
| `--mdsCheckboxBorder`       | String | Overrides the border color          |
| `--mdsCheckboxColorChecked` | String | Overrides the color of the checkbox |
