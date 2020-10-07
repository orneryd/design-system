# mds-button

# design-system button
A styled button

## Installation

### npm
```bash
npm i `@ornery/mds-button` --save
```

### yarn
```bash
yarn add `@ornery/mds-button`
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
import `@ornery/mds-button`

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
<mds-button variant="primary" href="https://www.google.com">Search Things With Google</mds-button>
```
### Rendered in the browser

![](samples/buttons.png)

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:mds-button {
--mdsButtonBorderRadius: 4px;
--mdsButtonPrimaryColor: $mdsBlue;
--mdsButtonPrimaryColorHover: $mdsBlueDark;
--mdsButtonSecondaryColor: $mdsOrange;
--mdsButtonSecondaryColorHover: $mdsOrangeDark;
--mdsButtonSuccessColor: $mdsGreen;
--mdsButtonSuccessColorHover : $mdsGreenDark;
--mdsButtonInfoColor: $mdsBlueDark;
--mdsButtonInfoColorHover : $mdsBlueDarker;
--mdsButtonWarningsColor: $mdsRust;
--mdsButtonWarningColorHover : $mdsRustDarker;
--mdsButtonDangerColor: $mdsRedLight;
--mdsButtonDangerColorHover : $mdsRed;
--mdsButtonOutlinedBackgroundColor: transparent;
--mdsButtonOutlinedBorder: inset 0px 0px 0px 2px $mdsPurple;
--mdsButtonOutlinedColor: $mdsPurple;
--mdsButtonOutlinedBackgroundColorHover: $mdsPurple;
--mdsButtonOutlinedBorderHover: inherit;
--mdsButtonOutlinedColorHover: $mdsWhite;
--mdsButtonOutlinedColor: $mdsPurple;
--mdsButtonOutlinedBackgroundColorHover: $mdsPurple;
--mdsButtonOutlinedBorderHover: inherit;
--mdsButtonOutlinedColorHover: $mdsWhite;
--mdsButtonOutlinedColor: $mdsBlue;
--mdsButtonOutlinedBorder: inset 0px 0px 0px 2px $mdsBlue;
--mdsButtonOutlinedBackgroundColorHover: $mdsBlueDark;
--mdsButtonOutlinedBorderHover: $mdsBlueDark;
--mdsButtonOutlinedColorHover: $mdsWhite;
--mdsButtonSecondaryOutlinedColor: $mdsOrange;
--mdsButtonSecondaryOutlinedBorder: inset 0px 0px 0px 2px $mdsOrange;
--mdsButtonSecondaryOutlinedBackgroundColorHover: $mdsOrangeDark;
--mdsButtonSecondaryOutlinedBorderHover: $mdsOrangeDark;
--mdsButtonSecondaryOutlinedColorHover: $mdsWhite;
--mdsButtonSuccessOutlinedColor: $mdsGreen;
--mdsButtonSuccessOutlinedBorder: inset 0px 0px 0px 2px $mdsGreen;
--mdsButtonSuccessOutlinedBackgroundColorHover: $mdsGreenDark;
--mdsButtonSuccessOutlinedBorderHover: $mdsGreenDark;
--mdsButtonSuccessOutlinedColorHover: $mdsWhite;
--mdsButtonInfoOutlinedColor: $mdsBlueDark;
--mdsButtonInfoOutlinedBorder: inset 0px 0px 0px 2px $mdsBlueDark;
--mdsButtonInfoOutlinedBackgroundColorHover: $mdsBlueDarker;
--mdsButtonInfoOutlinedBorderHover: $mdsBlueDarker;
--mdsButtonInfoOutlinedColorHover: $mdsWhite;
--mdsButtonWarningOutlinedColor: $mdsRust;
--mdsButtonWarningOutlinedBorder: inset 0px 0px 0px 2px $mdsRust;
--mdsButtonWarningOutlinedBackgroundColorHover: $mdsRustDarker;
--mdsButtonWarningOutlinedBorderHover: $mdsRustDarker;
--mdsButtonWarningOutlinedColorHover: $mdsWhite;
--mdsButtonDangerOutlinedColor: $mdsRedLight;
--mdsButtonDangerOutlinedBorder: inset 0px 0px 0px 2px $mdsRedLight;
--mdsButtonDangerOutlinedBackgroundColorHover: $mdsRed;
--mdsButtonDangerOutlinedBorderHover: $mdsRed;
--mdsButtonDangerOutlinedColorHover: $mdsWhite;
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

| Property                                         | Type   | Description                                      |
|--------------------------------------------------|--------|--------------------------------------------------|
| `--mdsButtonBorderRadius`                        | String | Overrides the radius border                      |
| `--mdsButtonDangerColor`                         | String | Overrides the danger color                       |
| `--mdsButtonDangerColorHover`                    | String | Overrides the danger color on hover              |
| `--mdsButtonDangerOutlinedBackgroundColorHover`  | String | Overrides the danger outlined background color on hover |
| `--mdsButtonDangerOutlinedBorder`                | String | Overrides the danger outlined border             |
| `--mdsButtonDangerOutlinedBorderHover`           | String | Overrides the danger outlined border on hover    |
| `--mdsButtonDangerOutlinedColor`                 | String | Overrides the danger outlined color              |
| `--mdsButtonDangerOutlinedColorHover`            | String | Overrides the danger outlined color on hover     |
| `--mdsButtonInfoColor`                           | String | Overrides the the info color                     |
| `--mdsButtonInfoColorHover`                      | String | Overrides the info color on hover                |
| `--mdsButtonInfoOutlinedBackgroundColorHover`    | String | Overrides the info outlined background color on hover |
| `--mdsButtonInfoOutlinedBorder`                  | String | Overrides the info outlined border               |
| `--mdsButtonInfoOutlinedBorderHover`             | String | Overrides the info outlined border on hover      |
| `--mdsButtonInfoOutlinedColor`                   | String | Overrides the info outlined color                |
| `--mdsButtonInfoOutlinedColorHover`              | String | Overrides the info outlined color on hover       |
| `--mdsButtonOutlinedBackgroundColor`             | String | Overrides the outlined background color          |
| `--mdsButtonOutlinedBackgroundColorHover`        | String | Overrides the outlined background color on hover |
| `--mdsButtonOutlinedBorder`                      | String | Overrides the outlined border                    |
| `--mdsButtonOutlinedBorderHover`                 | String | Overrides the outlined border on hover           |
| `--mdsButtonOutlinedColor`                       | String | Overrides the outlined color                     |
| `--mdsButtonOutlinedColorHover`                  | String | Overrides the outlined color on hover            |
| `--mdsButtonPrimaryColor`                        | String | Overrides the primary color                      |
| `--mdsButtonPrimaryColorHover`                   | String | Overrides the primary color on hover             |
| `--mdsButtonSecondaryColor`                      | String | Overrides the secondary color                    |
| `--mdsButtonSecondaryColorHover`                 | String | Overrides the secondary color on hover           |
| `--mdsButtonSecondaryOutlinedBackgroundColorHover` | String | Overrides the secondary outlined background color on hover |
| `--mdsButtonSecondaryOutlinedBorder`             | String | Overrides the secondary outlined border          |
| `--mdsButtonSecondaryOutlinedBorderHover`        | String | Overrides the secondary outlined border on hover |
| `--mdsButtonSecondaryOutlinedColor`              | String | Overrides the secondary outlined color           |
| `--mdsButtonSecondaryOutlinedColorHover`         | String | Overrides the secondary outlined color on hover  |
| `--mdsButtonSuccessColor`                        | String | Overrides the success color                      |
| `--mdsButtonSuccessColorHover`                   | String | Overrides the success color on hover             |
| `--mdsButtonSuccessOutlinedBackgroundColorHover` | String | Overrides the success outlined background color on hover |
| `--mdsButtonSuccessOutlinedBorder`               | String | Overrides the success outlined border            |
| `--mdsButtonSuccessOutlinedBorderHover`          | String | Overrides the success outlined border on hover   |
| `--mdsButtonSuccessOutlinedColor`                | String | Overrides the success outlined color             |
| `--mdsButtonSuccessOutlinedColorHover`           | String | Overrides the success outlined color on hover    |
| `--mdsButtonWarningColor`                        | String | Overrides the warning color                      |
| `--mdsButtonWarningColorHover`                   | String | Overrides the warnings color on hover            |
| `--mdsButtonWarningOutlinedBackgroundColorHover` | String | Overrides the warning outlined background color on hover |
| `--mdsButtonWarningOutlinedBorder`               | String | Overrides the warning outlined border            |
| `--mdsButtonWarningOutlinedBorderHover`          | String | Overrides the warning outlined border on hover   |
| `--mdsButtonWarningOutlinedColor`                | String | Overrides the warning outlined color             |
| `--mdsButtonWarningOutlinedColorHover`           | String | Overrides the warning outlined color on hover    |
