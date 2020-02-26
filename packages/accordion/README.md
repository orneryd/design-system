# mckesson-design-system accordion
A styled accordion or expandable panel that allows for a header and content. the component will dynamically expand to the size of the contents.

## Installation

### npm
```bash
npm i @mcklabs/mds-accordion --save
```

### yarn
```bash
yarn add @mcklabs/mds-accordion
```

# DOCS
<a name="module_MdsAccordion"></a>

## MdsAccordion ⇐ <code>HTMLElement</code>
Component that allows you to collapse and expand content within a root [MdsPaper](../packages/paper) Element

**Extends**: <code>HTMLElement</code>  
**Example**  
```html
<mds-paper elevation="6"></mwc-paper>
```
**Example**  
```jsx
export const accordion = () => (
<div>
  <mds-accordion
    elevation={3}
    state="open"
  >
    <div slot="accordion-header">Default open</div>
    <div slot="accordion-content">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </mds-accordion>
</div>
)
```
