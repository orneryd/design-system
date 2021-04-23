export const registerComponent = (componentName, ctor, options) =>{
    if (typeof window !== "undefined" && typeof window.customElements !== "undefined") {
        const existing = customElements.get(componentName);
        if (existing) {
            console.debug(`
    **************************************************
    ${componentName} is already defined! This may be due to multiple imports or was overridden.
    **************************************************
    ${componentName} was imported as ${existing.toString()}\n`, 
            componentName, ctor, options)
        } else {
            customElements.define(componentName, ctor, options)
        } 
    }
}
