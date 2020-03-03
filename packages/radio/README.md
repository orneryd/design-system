# mds-radio

# mckesson-design-system checkbox
A styled checkbox by the mckesson design team.

## Installation

### npm
```bash
npm i `@mcklabs/mds-radio` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-radio`
```

### HTML Usage
```html
<form style={{ width: '360px', margin: '20px' }}>
<mds-radio type="radio" name="fruit" checked value="Strawberry" />
<mds-radio type="radio" name="fruit" value="Orange" />
<mds-radio type="radio" name="fruit" value="Lemon" />
</form>
```

### React Component
```jsx
import `@mcklabs/mds-radio`

export const buttons = () => (
<form style={{ width: '360px', margin: '20px' }}>
   <mds-radio type="radio" name="fruit" checked value="Strawberry" />
   <mds-radio type="radio" name="fruit" value="Orange" />
   <mds-radio type="radio" name="fruit" value="Lemon" />
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

| Property            | Attribute | Modifiers | Type              | Description        |
|---------------------|-----------|-----------|-------------------|--------------------|
| `checked`           | `checked` |           | `String`          | the checked status |
| `indicatorElement`  |           | readonly  | `Element \| null` |                    |
| `validationMessage` |           | readonly  | `string`          |                    |
| `value`             | `value`   |           | `String`          | the checkbox value |

## Methods

| Method            | Type             |
|-------------------|------------------|
| `onClick`         | `(e: any): void` |
| `reset`           | `(): void`       |
| `setCheckedState` | `(): void`       |

## CSS Custom Properties

| Property                 | Type   | Description                                  |
|--------------------------|--------|----------------------------------------------|
| `--mdsRadioBorder`       | String | Overrides the border color                   |
| `--mdsRadioColorChecked` | String | Overrides the color of the checked indicator |
