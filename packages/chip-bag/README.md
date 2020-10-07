# mds-chip-bag

# design-system chip-bag
A styled chip-bag by the ornery design team.

## Installation

### npm
```bash
npm i `@ornery/mds-chip-bag` --save
```

### yarn
```bash
yarn add `@ornery/mds-chip-bag`
```

### HTML Usage
```html
<mds-chip-bag label="Some Label" />
<mds-chip-bag value="some initial value" label="I have an initial Value" />
<mds-chip-bag type="password" label="Type Some Secure Text" />
```

### React Component
```jsx
import `@ornery/mds-chip-bag`

export const Text = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <mds-chip-bag label="Some Label" />
</div>
)
export const InitialValue = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <mds-chip-bag value="some initial value" label="I have an initial Value" />
</div>
)
export const Secure = () => (
<div style={{ width: '360px', margin: '20px' }}>
   <mds-chip-bag type="password" label="Type Some Secure Text" />
</div>
)

```

### Rendered in the browser

![](samples/input.png)
<br/>

## Attributes

| Attribute          | Type     | Description                                   |
|--------------------|----------|-----------------------------------------------|
| `allow-duplicates` | `String` | allows the addition of duplicate chip values  |
| `chip-tag`         | `String` | changes the chip tag from mds-chip            |
| `chips-length`     | `String` | tbhe number of chips in the bag               |
| `invalid`          | `String` | wether the input is valid or not              |
| `value`            | `String` | the current set of chips, semicolon delimited |

## Properties

| Property       | Attribute   | Modifiers | Type              | Default | Description                                |
|----------------|-------------|-----------|-------------------|---------|--------------------------------------------|
| `allowDups`    |             | readonly  | `boolean`         |         |                                            |
| `chipCloseTag` |             | readonly  | `string`          |         |                                            |
| `chipStartTag` |             | readonly  | `string`          |         |                                            |
| `chipTag`      |             | readonly  | `string`          |         |                                            |
| `chips`        |             |           | `never[]`         | []      |                                            |
| `delimiter`    | `delimiter` |           | `String`          |         | the regex expression to split the input on |
| `inputElement` |             | readonly  | `Element \| null` |         |                                            |

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

| Event         | Description                                      |
|---------------|--------------------------------------------------|
| `chipclick`   | when a chip is clicked                           |
| `chipsupdate` | when the bag is modified by removing or adding a chip |

## CSS Custom Properties

| Property                       | Type   | Description                              |
|--------------------------------|--------|------------------------------------------|
| `--mdsChipBagUnderline`        | String | Overrides the input underline indictator |
| `--mdsChipBagUnderlineInvalid` | String | Overrides the label transform property   |
