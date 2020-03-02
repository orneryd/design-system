# mds-chip-bag

# mckesson-design-system chip-bag
A styled chip container that functions similar to a Chip Array

## Installation

### npm
```bash
npm i @mcklabs/mds-chip-bag --save
```

### yarn
```bash
yarn add @mcklabs/mds-chip-bag
```

## Attributes

| Attribute |
|-----------|
| `invalid` |

## Properties

| Property       | Modifiers | Type              | Default |
|----------------|-----------|-------------------|---------|
| `allowDups`    | readonly  | `boolean`         |         |
| `chipCloseTag` | readonly  | `string`          |         |
| `chipStartTag` | readonly  | `string`          |         |
| `chipTag`      | readonly  | `string`          |         |
| `chips`        |           | `never[]`         | []      |
| `delimiter`    | readonly  | `RegExp`          |         |
| `inputElement` | readonly  | `Element \| null` |         |

## Methods

| Method               | Type                                     |
|----------------------|------------------------------------------|
| `addChips`           | `(textVal: any): void`                   |
| `checkInvalid`       | `(): void`                               |
| `chipClick`          | `({ target }: { target: any; }): void`   |
| `focusInput`         | `(): void`                               |
| `handleBlur`         | `(): void`                               |
| `handleInputKeydown` | `({ keyCode }: { keyCode: any; }): void` |
| `handleInputKeyup`   | `({ keyCode }: { keyCode: any; }): void` |
| `notify`             | `(): void`                               |
| `removeChip`         | `({ target }: { target: any; }): void`   |

## Events

| Event         |
|---------------|
| `chipclick`   |
| `chipsupdate` |
