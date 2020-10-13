# ui-title

# design-system title
A styled title header and content

## Installation

### npm
```bash
npm i `@ornery/ui-title` --save
```

### yarn
```bash
yarn add `@ornery/ui-title`
```

### Rendered in the browser
![](samples/title.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
```css
ui-title {
--uiTitleColor: rgb(254, 254, 254);
--uiTitleBackgroundColor: rgb(25, 35, 67);
--uiTitleMaxWidth: 768px;
--uiTitleHeaderColor: inherit;
--uiTitleContentMaxWidth: 768px;
--uiTitleContentColor: inherit;
}
```

### Rendered in the browser
![](samples/title-custom.png)
<br/>

### Rendered in the browser
![](samples/title-custom-2.png)
<br/>

## Examples

```javascript

```

```html
### HTML
<ui-title>
  <span slot="header">
    Lorem Ipsum
  </span>
  <span slot="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </span>
  <span slot="content">
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum.
  </span>
</ui-title>
```

```javascript
### React Component

import '
```

## Slots

| Name      | Description                           |
|-----------|---------------------------------------|
| `content` | The content slot inside an h4 element |
| `header`  | The header slot inside an h1 element  |

## CSS Custom Properties

| Property                     | Description                                      |
|------------------------------|--------------------------------------------------|
| `--uiTitleBackgroundColor` | Overrides the background color for the header.   |
| `--uiTitleColor`           | Overrides the text color for the title.         |
| `--uiTitleContentColor`    | Overrides the text color for the content.        |
| `--uiTitleContentMaxWidth` | Overrides the max-width for the header.          |
| `--uiTitleHeaderColor`     | Overrides the text color for the header.         |
| `--uiTitleMaxWidth`        | Overrides the maxwidth for the header and content. |
