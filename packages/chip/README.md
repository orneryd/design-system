# ui-chip

# design-system chip
A styled chip that functions similar a tag or chip in bootstrap or material ui.

## Installation

### npm
```bash
npm i `@ornery/ui-chip` --save
```

### yarn
```bash
yarn add `@ornery/ui-chip`
```

## Attributes

| Attribute | Type     | Description            |
|-----------|----------|------------------------|
| `label`   | `String` | the label for the chip |
| `value`   | `String` | the value for the chip |

## Methods

| Method      | Type       |
|-------------|------------|
| `closeChip` | `(): void` |

## Events

| Event       | Description                    |
|-------------|--------------------------------|
| `closechip` | emitted when the X is clicked. |

## CSS Custom Properties

| Property                   | Type   | Description                         |
|----------------------------|--------|-------------------------------------|
| `--uiChipBackgroundColor` | String | Overrides the color of the checkbox |
| `--uiChipColor`           | String | Overrides the border color          |
| `--uiChipIconColor`       | String | Overrides the color of the checkbox |
| `--uiChipIconColorActive` | String | Overrides the color of the checkbox |
| `--uiChipIconColorHover`  | String | Overrides the color of the checkbox |
