# mds-button

## Examples

# mckesson-design-system button
A styled button
## Installation
### npm
```bash
npm i `@mcklabs/mds-button` --save
```
### yarn

```bash
yarn add `@mcklabs/mds-button`
```

### HTML Usage

```html
<mds-button variant="primary">Primary</mds-button>
<mds-button variant="primary rounded">Primary Rounded</mds-button>
<mds-button variant="primary" disabled>Primary Disabled</mds-button>
<mds-button variant="secondary">Secondary</mds-button>
<mds-button variant="secondary rounded" disabled="">Secondary Rounded</mds-button>
<mds-button variant="secondary" disabled>Secondary Disabled</mds-button>
<mds-button variant="outlined">Outlined</mds-button>
<mds-button variant="outlined rounded">Outlined Rounded</mds-button>
<mds-button variant="outlined" disabled>Outlined Disabled</mds-button>
```

### React Component

```jsx
import `@mcklabs/mds-button`

export const buttons = () => (
  <div>
    <mds-button variant="primary">Primary</mds-button>
    <mds-button variant="primary rounded">Primary Rounded</mds-button>
    <mds-button variant="primary" disabled>Primary Disabled</mds-button>
    <mds-button variant="secondary">Secondary</mds-button>
    <mds-button variant="secondary rounded" disabled="">Secondary Rounded</mds-button>
    <mds-button variant="secondary" disabled>Secondary Disabled</mds-button>
    <mds-button variant="outlined">Outlined</mds-button>
    <mds-button variant="outlined rounded">Outlined Rounded</mds-button>
    <mds-button variant="outlined" disabled>Outlined Disabled</mds-button>
  </div>
)
```

### HTML Usage

```html
<mds-button variant="primary" href="http://kittenwar.com">Rate Kittens</mds-button>
```

```javascript
### Rendered in the browser

![](samples/buttons.png)
```

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:root {
  --mdsBannerMaxWidth: 1024px;
  --mdsBannerColor: purple;
  --mdsBannerBackgroundColor: rgba(255, 166, 0, 0.783);
}
```

## Attributes

| Attribute  | Type     |
|------------|----------|
| `disabled` | `String` |

## Properties

| Property        | Attribute | Modifiers | Type              |
|-----------------|-----------|-----------|-------------------|
| `buttonElement` |           | readonly  | `Element \| null` |
| `closeTag`      |           | readonly  | `string`          |
| `href`          |           | readonly  | `string`          |
| `isDisabled`    |           | readonly  | `boolean`         |
| `startTag`      |           | readonly  | `string`          |
| `tag`           |           | readonly  | `"a" \| "button"` |
| `variant`       | `variant` |           | `string`          |

## Methods

| Method    | Type                               |
|-----------|------------------------------------|
| `onClick` | `(event: any): false \| undefined` |

## CSS Custom Properties

| Property | Type   | Description                                      |
|----------|--------|--------------------------------------------------|
| `-`      | String | mdsBannerColor Overrides the text color for the banner. |
