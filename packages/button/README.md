# mds-button

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
<mds-button variant="primary" href="https://www.google.com">Largest Online Advertiser</mds-button>
```
### Rendered in the browser

![](samples/buttons.png)

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:root {
--mdsBannerMaxWidth: 1024px;
--mdsBannerColor: purple;
--mdsBannerBackgroundColor: rgba(255, 166, 0, 0.783);
}
```
<br/>

## Attributes

| Attribute  | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| `disabled` | `String` | sets the enabled or disabled state               |
| `href`     | `String` | give the button an href and it will render an `anchor` tag with the appropriate href instead of a `button` tag |
| `variant`  | `String` | variant of the button                            |

## Properties

| Property        | Modifiers | Type              |
|-----------------|-----------|-------------------|
| `buttonElement` | readonly  | `Element \| null` |
| `buttonStyle`   | readonly  | `string`          |
| `closeTag`      | readonly  | `string`          |
| `isDisabled`    | readonly  | `boolean`         |
| `startTag`      | readonly  | `string`          |
| `tag`           | readonly  | `"a" \| "button"` |
| `urlTarget`     | readonly  | `string`          |

## Methods

| Method    | Type                               |
|-----------|------------------------------------|
| `onClick` | `(event: any): false \| undefined` |

## CSS Custom Properties

| Property                                 | Type   | Description                                      |
|------------------------------------------|--------|--------------------------------------------------|
| `--mdsButtonOutlinedBackgroundColor`      | String | Overrides the outlined background color          |
| `--mdsButtonOutlinedBackgroundColorHover` | String | Overrides the outlined background color on hover |
| `--mdsButtonOutlinedBorder`               | String | Overrides the outlined border color              |
| `--mdsButtonOutlinedBorderHover`          | String | Overrides the  outlined border color on hover    |
| `--mdsButtonOutlinedColor`                | String | Overrides the outlined color                     |
| `--mdsButtonOutlinedColorHover`           | String | Overrides the outlined color on hover            |
| `--mdsButtonPrimaryColor`                | String | Overrides the primary color                      |
| `--mdsButtonPrimaryColorHover`           | String | Overrides the primary color on hover             |
| `--mdsButtonSecondaryColor`              | String | Overrides the secondary color                    |
| `--mdsButtonSecondaryColorHover`         | String | Overrides the secondary color on hover           |
