# mds-chip

# design-system chip
A styled chip that functions similar a tag or chip in bootstrap or material ui.

## Installation

### npm
```bash
npm i `@ornery/mds-chip` --save
```

### yarn
```bash
yarn add `@ornery/mds-chip`
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
| `--mdsChipBackgroundColor` | String | Overrides the color of the checkbox |
| `--mdsChipColor`           | String | Overrides the border color          |
| `--mdsChipIconColor`       | String | Overrides the color of the checkbox |
| `--mdsChipIconColorActive` | String | Overrides the color of the checkbox |
| `--mdsChipIconColorHover`  | String | Overrides the color of the checkbox |
