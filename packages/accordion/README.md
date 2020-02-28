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

# API
<a name="module_MdsAccordion"></a>

## MdsAccordion ⇐ <code>HTMLElement</code>
Component that allows you to collapse and expand content within a root [MdsPaper](../packages/paper) Element

**Extends**: <code>HTMLElement</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [elevation] | <code>String</code> | <code>&quot;1&quot;</code> | Sets the elevation for the accordion's internal [MdsPaper](../packages/paper) element |
| [state] | <code>AccordionState</code> | <code>&quot;collapse&quot;</code> | Sets the initial state and can be toggled to open or close it |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| AccordionState | <code>enum</code> | &lt;mds-accordion state="${AccordionState}" /&gt; |
| open | <code>String</code> | Set the accordion to open |
| collapse | <code>String</code> | Set the accordion to collaspe |
| CSSVariables | <code>enum</code> | below are the variables that can be overridden by css |
| --mdsAccordionIconColor | <code>String</code> | Overrides the icon color for the accordion indicator button. |
| --mdsAccordionIconColorHover | <code>String</code> | Overrides the icon color on :hover for the accordion indicator button. |

**Example** *(HTML Usage)*  
```html
<mds-accordion elevation="6" state="open">
  <div slot="accordion-header">Default open</div>
  <div slot="accordion-content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</mwc-accordion>
```
**Example** *(React Component)*  
```jsx
import '@mcklabs/mds-accordion'

export const accordion = () => (
  <mds-accordion
    elevation={6}
  >
    <div slot="accordion-header">Default collapse</div>
    <div slot="accordion-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </mds-accordion>
)
```
**Example**  
### Rendered in the browser

![](samples/accordion.png)
<br/>
**Example**  
### Set the following variables in your imported SCSS/CSS file or html `style` tag, before usage
**Example**  
```css
:root {
  --mdsAccordionIconColor: purple;
  --mdsAccordionIconColorHover: orange;
}
```
**Example**  
### Rendered in the browser

![](samples/accordion-custom.gif)
<br/>
