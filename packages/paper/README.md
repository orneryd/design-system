# mds-paper

# mckesson-design-system paper
A styled paper that you can set the elevation property for more drastic effects.

## Installation

### npm
```bash
npm i `@mcklabs/mds-paper` --save
```

### yarn
```bash
yarn add `@mcklabs/mds-paper`
```

### HTML Usage
```html
<mds-paper elevation="6">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</mwc-paper>
```

### React Component

```js
import `@mcklabs/mds-banner`

export const paper = () => (
<mds-paper
   elevation={6}
>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </div>
</mds-paper>
)
```

### Rendered in the browser

![](samples/paper.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage

```css
:root {
--mdsPaperColor: orange;
--mdsPaperBackgroundColor: purple;
--mdsPaperBoxShadowHOffsetColor: rgba(255, 0, 255, 0.2);
--mdsPaperBoxShadowVOffsetColor: rgba(255, 0, 255, 0.14);
--mdsPaperBoxShadowBlurColor: rgba(255, 0, 255, 0.12);
}
```

### Rendered in the browser

![](samples/paper-custom.png)
<br/>

## Properties

| Property    | Attribute   | Type     | Default | Description                                      |
|-------------|-------------|----------|---------|--------------------------------------------------|
| `elevation` | `elevation` | `String` | "3"     | Sets the elevation for the accordion's internal MdsPaper element |

## CSS Custom Properties

| Property                          | Description                                      |
|-----------------------------------|--------------------------------------------------|
| `--mdsPaperBackgroundColor`       | Overrides the icon color for the accordion indicator button. |
| `--mdsPaperBoxShadowBlurColor`    | Overrides the icon color for the accordion indicator button. |
| `--mdsPaperBoxShadowHOffsetColor` | Overrides the icon color for the accordion indicator button. |
| `--mdsPaperBoxShadowVOffsetColor` | Overrides the icon color for the accordion indicator button. |
