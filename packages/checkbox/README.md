# ui-checkbox

# design-system checkbox
A styled checkbox by the ornery design team.

## Installation

### npm
```bash
npm i `@ornery/ui-checkbox` --save
```

### yarn
```bash
yarn add `@ornery/ui-checkbox`
```

### HTML Usage
```html
<form>
<ui-checkbox checked label="Some Label" />
</form>
```

### React Component
```jsx
import `@ornery/ui-checkbox`

export const buttons = () => (
<form style={{ width: '360px', margin: '20px' }}>
   <ui-checkbox checked={"true"} label="Some Label" />
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
| `--uiCheckboxBorder`       | String | Overrides the border color          |
| `--uiCheckboxColorChecked` | String | Overrides the color of the checkbox |
