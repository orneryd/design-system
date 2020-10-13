# ui-template

A template element designed to allow for reusable templates on the fly without needing to write javascript.
It supports an es6-type template literal style syntax for values. 
No function calls or ternary expressions are supported within the markup itself. Only values.

### Usage

```html
<template is="ui-template" name="ui-bears" someattr="default value">
   <!-- you can add inline styles that will go into the shadow dom. -->
   <style>
   :host {
       display: block;
   }
   </style>
   <div>${this.someattr}</div>
</template>
```

### later in markup you can reuse the newly formed component
```
<ui-bears></ui-bears>
<ui-bears someattr="bears"></ui-bears>
```

## Attributes

| Attribute | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `any`     | `string` | any attributes will be passed to the element instances as default values. Any attributes specified on the usage of the element will override that value. |
| `id`      | `String` | the name of the element type to register. You must prefix the name with ui-. The name attribute takes precedence. |
| `name`    | `String` | the name of the element type to register. You must prefix the name with ui- |
