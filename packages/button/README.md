# ui-button

# design-system button
A styled button

## Installation

### npm
```bash
npm i `@ornery/ui-button` --save
```

### yarn
```bash
yarn add `@ornery/ui-button`
```

### HTML Usage
```html
<ui-button variant="primary">Primary</ui-button>
<ui-button variant="primary rounded">Primary Rounded</ui-button>
<ui-button variant="primary" disabled>Primary Disabled</ui-button>
<ui-button variant="secondary">Secondary</ui-button>
<ui-button variant="secondary rounded" disabled="">Secondary Rounded</ui-button>
<ui-button variant="secondary" disabled>Secondary Disabled</ui-button>
<ui-button variant="outlined">Outlined</ui-button>
<ui-button variant="outlined rounded">Outlined Rounded</ui-button>
<ui-button variant="outlined" disabled>Outlined Disabled</ui-button>
```

### React Component
```jsx
import `@ornery/ui-button`

export const buttons = () => (
<div>
   <ui-button variant="primary">Primary</ui-button>
   <ui-button variant="primary rounded">Primary Rounded</ui-button>
   <ui-button variant="primary" disabled>Primary Disabled</ui-button>
   <ui-button variant="secondary">Secondary</ui-button>
   <ui-button variant="secondary rounded" disabled="">Secondary Rounded</ui-button>
   <ui-button variant="secondary" disabled>Secondary Disabled</ui-button>
   <ui-button variant="outlined">Outlined</ui-button>
   <ui-button variant="outlined rounded">Outlined Rounded</ui-button>
   <ui-button variant="outlined" disabled>Outlined Disabled</ui-button>
</div>
)
```

### HTML Usage
```html
<ui-button variant="primary" href="https://www.google.com">Search Things With Google</ui-button>
```
### Rendered in the browser

![](samples/buttons.png)

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:ui-button {
--uiButtonBorderRadius: 4px;
--uiButtonPrimaryColor: $mdsBlue;
--uiButtonPrimaryColorHover: $mdsBlueDark;
--uiButtonSecondaryColor: $mdsOrange;
--uiButtonSecondaryColorHover: $mdsOrangeDark;
--uiButtonSuccessColor: $mdsGreen;
--uiButtonSuccessColorHover : $mdsGreenDark;
--uiButtonInfoColor: $mdsBlueDark;
--uiButtonInfoColorHover : $mdsBlueDarker;
--uiButtonWarningsColor: $mdsRust;
--uiButtonWarningColorHover : $mdsRustDarker;
--uiButtonDangerColor: $mdsRedLight;
--uiButtonDangerColorHover : $mdsRed;
--uiButtonOutlinedBackgroundColor: transparent;
--uiButtonOutlinedBorder: inset 0px 0px 0px 2px $mdsPurple;
--uiButtonOutlinedColor: $mdsPurple;
--uiButtonOutlinedBackgroundColorHover: $mdsPurple;
--uiButtonOutlinedBorderHover: inherit;
--uiButtonOutlinedColorHover: $mdsWhite;
--uiButtonOutlinedColor: $mdsPurple;
--uiButtonOutlinedBackgroundColorHover: $mdsPurple;
--uiButtonOutlinedBorderHover: inherit;
--uiButtonOutlinedColorHover: $mdsWhite;
--uiButtonOutlinedColor: $mdsBlue;
--uiButtonOutlinedBorder: inset 0px 0px 0px 2px $mdsBlue;
--uiButtonOutlinedBackgroundColorHover: $mdsBlueDark;
--uiButtonOutlinedBorderHover: $mdsBlueDark;
--uiButtonOutlinedColorHover: $mdsWhite;
--uiButtonSecondaryOutlinedColor: $mdsOrange;
--uiButtonSecondaryOutlinedBorder: inset 0px 0px 0px 2px $mdsOrange;
--uiButtonSecondaryOutlinedBackgroundColorHover: $mdsOrangeDark;
--uiButtonSecondaryOutlinedBorderHover: $mdsOrangeDark;
--uiButtonSecondaryOutlinedColorHover: $mdsWhite;
--uiButtonSuccessOutlinedColor: $mdsGreen;
--uiButtonSuccessOutlinedBorder: inset 0px 0px 0px 2px $mdsGreen;
--uiButtonSuccessOutlinedBackgroundColorHover: $mdsGreenDark;
--uiButtonSuccessOutlinedBorderHover: $mdsGreenDark;
--uiButtonSuccessOutlinedColorHover: $mdsWhite;
--uiButtonInfoOutlinedColor: $mdsBlueDark;
--uiButtonInfoOutlinedBorder: inset 0px 0px 0px 2px $mdsBlueDark;
--uiButtonInfoOutlinedBackgroundColorHover: $mdsBlueDarker;
--uiButtonInfoOutlinedBorderHover: $mdsBlueDarker;
--uiButtonInfoOutlinedColorHover: $mdsWhite;
--uiButtonWarningOutlinedColor: $mdsRust;
--uiButtonWarningOutlinedBorder: inset 0px 0px 0px 2px $mdsRust;
--uiButtonWarningOutlinedBackgroundColorHover: $mdsRustDarker;
--uiButtonWarningOutlinedBorderHover: $mdsRustDarker;
--uiButtonWarningOutlinedColorHover: $mdsWhite;
--uiButtonDangerOutlinedColor: $mdsRedLight;
--uiButtonDangerOutlinedBorder: inset 0px 0px 0px 2px $mdsRedLight;
--uiButtonDangerOutlinedBackgroundColorHover: $mdsRed;
--uiButtonDangerOutlinedBorderHover: $mdsRed;
--uiButtonDangerOutlinedColorHover: $mdsWhite;
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
| `--uiButtonBorderRadius`                        | String | Overrides the radius border                      |
| `--uiButtonDangerColor`                         | String | Overrides the danger color                       |
| `--uiButtonDangerColorHover`                    | String | Overrides the danger color on hover              |
| `--uiButtonDangerOutlinedBackgroundColorHover`  | String | Overrides the danger outlined background color on hover |
| `--uiButtonDangerOutlinedBorder`                | String | Overrides the danger outlined border             |
| `--uiButtonDangerOutlinedBorderHover`           | String | Overrides the danger outlined border on hover    |
| `--uiButtonDangerOutlinedColor`                 | String | Overrides the danger outlined color              |
| `--uiButtonDangerOutlinedColorHover`            | String | Overrides the danger outlined color on hover     |
| `--uiButtonInfoColor`                           | String | Overrides the the info color                     |
| `--uiButtonInfoColorHover`                      | String | Overrides the info color on hover                |
| `--uiButtonInfoOutlinedBackgroundColorHover`    | String | Overrides the info outlined background color on hover |
| `--uiButtonInfoOutlinedBorder`                  | String | Overrides the info outlined border               |
| `--uiButtonInfoOutlinedBorderHover`             | String | Overrides the info outlined border on hover      |
| `--uiButtonInfoOutlinedColor`                   | String | Overrides the info outlined color                |
| `--uiButtonInfoOutlinedColorHover`              | String | Overrides the info outlined color on hover       |
| `--uiButtonOutlinedBackgroundColor`             | String | Overrides the outlined background color          |
| `--uiButtonOutlinedBackgroundColorHover`        | String | Overrides the outlined background color on hover |
| `--uiButtonOutlinedBorder`                      | String | Overrides the outlined border                    |
| `--uiButtonOutlinedBorderHover`                 | String | Overrides the outlined border on hover           |
| `--uiButtonOutlinedColor`                       | String | Overrides the outlined color                     |
| `--uiButtonOutlinedColorHover`                  | String | Overrides the outlined color on hover            |
| `--uiButtonPrimaryColor`                        | String | Overrides the primary color                      |
| `--uiButtonPrimaryColorHover`                   | String | Overrides the primary color on hover             |
| `--uiButtonSecondaryColor`                      | String | Overrides the secondary color                    |
| `--uiButtonSecondaryColorHover`                 | String | Overrides the secondary color on hover           |
| `--uiButtonSecondaryOutlinedBackgroundColorHover` | String | Overrides the secondary outlined background color on hover |
| `--uiButtonSecondaryOutlinedBorder`             | String | Overrides the secondary outlined border          |
| `--uiButtonSecondaryOutlinedBorderHover`        | String | Overrides the secondary outlined border on hover |
| `--uiButtonSecondaryOutlinedColor`              | String | Overrides the secondary outlined color           |
| `--uiButtonSecondaryOutlinedColorHover`         | String | Overrides the secondary outlined color on hover  |
| `--uiButtonSuccessColor`                        | String | Overrides the success color                      |
| `--uiButtonSuccessColorHover`                   | String | Overrides the success color on hover             |
| `--uiButtonSuccessOutlinedBackgroundColorHover` | String | Overrides the success outlined background color on hover |
| `--uiButtonSuccessOutlinedBorder`               | String | Overrides the success outlined border            |
| `--uiButtonSuccessOutlinedBorderHover`          | String | Overrides the success outlined border on hover   |
| `--uiButtonSuccessOutlinedColor`                | String | Overrides the success outlined color             |
| `--uiButtonSuccessOutlinedColorHover`           | String | Overrides the success outlined color on hover    |
| `--uiButtonWarningColor`                        | String | Overrides the warning color                      |
| `--uiButtonWarningColorHover`                   | String | Overrides the warnings color on hover            |
| `--uiButtonWarningOutlinedBackgroundColorHover` | String | Overrides the warning outlined background color on hover |
| `--uiButtonWarningOutlinedBorder`               | String | Overrides the warning outlined border            |
| `--uiButtonWarningOutlinedBorderHover`          | String | Overrides the warning outlined border on hover   |
| `--uiButtonWarningOutlinedColor`                | String | Overrides the warning outlined color             |
| `--uiButtonWarningOutlinedColorHover`           | String | Overrides the warning outlined color on hover    |
