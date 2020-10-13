# render-html

# design-system banner
A styled banner header and content

## Installation

### npm
```bash
npm i `@ornery/render-html` --save
```

### yarn
```bash
yarn add `@ornery/render-html`
```

### Rendered in the browser
![](samples/banner.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
```css
render-html {
--renderHtmlColor: rgb(254, 254, 254);
--renderHtmlBackgroundColor: rgb(25, 35, 67);
--renderHtmlMaxWidth: 768px;
--renderHtmlHeaderColor: inherit;
--renderHtmlContentMaxWidth: 768px;
--renderHtmlContentColor: inherit;
}
```

### Rendered in the browser
![](samples/banner-custom.png)
<br/>

### Rendered in the browser
![](samples/banner-custom-2.png)
<br/>

## Examples

```javascript

```

```html
### HTML
<render-html>
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
</render-html>
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
| `--renderHtmlBackgroundColor` | Overrides the background color for the header.   |
| `--renderHtmlColor`           | Overrides the text color for the banner.         |
| `--renderHtmlContentColor`    | Overrides the text color for the content.        |
| `--renderHtmlContentMaxWidth` | Overrides the max-width for the header.          |
| `--renderHtmlHeaderColor`     | Overrides the text color for the header.         |
| `--renderHtmlMaxWidth`        | Overrides the maxwidth for the header and content. |
