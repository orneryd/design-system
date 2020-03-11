export const registerComponent = (componentName, ctor, options) =>{
    const existing = customElements.get(componentName);
    if (existing) {
        console.debug(`
**************************************************
${componentName} is already defined! This may be due to multiple imports.
**************************************************
${componentName} was imported as ${existing.toString()}\n`, 
        componentName, ctor, options)
    } else {
        customElements.define(componentName, ctor, options)
    } 
}
