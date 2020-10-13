# ui-banner

# design-system banner
A styled banner header and content

## Installation

### npm
```bash
npm i `@ornery/ui-banner` --save
```

### yarn
```bash
yarn add `@ornery/ui-banner`
```

### Rendered in the browser
![](samples/banner.png)
<br/>

### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
```css
ui-banner {
--uiBannerColor: rgb(254, 254, 254);
--uiBannerBackgroundColor: rgb(25, 35, 67);
--uiBannerMaxWidth: 768px;
--uiBannerHeaderColor: inherit;
--uiBannerContentMaxWidth: 768px;
--uiBannerContentColor: inherit;
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
<ui-banner>
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
</ui-banner>
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
| `--uiBannerBackgroundColor` | Overrides the background color for the header.   |
| `--uiBannerColor`           | Overrides the text color for the banner.         |
| `--uiBannerContentColor`    | Overrides the text color for the content.        |
| `--uiBannerContentMaxWidth` | Overrides the max-width for the header.          |
| `--uiBannerHeaderColor`     | Overrides the text color for the header.         |
| `--uiBannerMaxWidth`        | Overrides the maxwidth for the header and content. |
