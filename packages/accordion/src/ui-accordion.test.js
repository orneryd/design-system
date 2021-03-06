/**
 * @jest-environment jest-environment-happy-dom
 */
import './ui-accordion'

describe('UIAccordion', () => {
  let element
  beforeEach(() => {
    element = document.createElement('ui-accordion')
    element.innerHTML = `
      <div slot="accordion-header">
      </div>
      <div slot="accordion-content">
      </div>
    `
    document.body.appendChild(element)
  })

  afterEach(() => document.body.removeChild(element))

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  describe('onHeaderClick Open', () => {
    let dispatchSpy
    beforeEach(() => {
      element.setAttribute('state', 'open')
      const contentSlot = element.shadowRoot.querySelector('.ui-accordion-content')
      contentSlot.style.height = 1
      element.parentElement = {
        removeChild: jest.fn()
      }
      dispatchSpy = spyOn(element, 'dispatchEvent')
      element.onHeaderClick()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    afterAll(() => {
      element.dispatchEvent.mockRestore()
    })

    it('should dispatch a single event', () => {
      expect(dispatchSpy.calls.count()).toBe(1)
    })

    it('should call dispatchEvent on the element with the onHeaderClick custom event', () => {
      expect(dispatchSpy.calls.mostRecent().args[0].type).toBe('accordion-state')
    })

    it('should call dispatchEvent on the element with the detail being the eventOptions value', () => {
      expect(dispatchSpy.calls.mostRecent().args[0].detail).toBe('collapse')
    })
  })
  describe('onHeaderClick Collapse', () => {
    let dispatchSpy
    beforeEach(() => {
      element.setAttribute('state', 'collapse')
      element.parentElement = {
        removeChild: jest.fn()
      }
      dispatchSpy = spyOn(element, 'dispatchEvent')
      element.onHeaderClick()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    afterAll(() => {
      element.dispatchEvent.mockRestore()
    })

    it('should dispatch a single event', () => {
      expect(dispatchSpy.calls.count()).toBe(1)
    })

    it('should call dispatchEvent on the element with the onHeaderClick custom event', () => {
      expect(dispatchSpy.calls.mostRecent().args[0].type).toBe('accordion-state')
    })

    it('should call dispatchEvent on the element with the detail being the eventOptions value', () => {
      expect(dispatchSpy.calls.mostRecent().args[0].detail).toBe('open')
    })
  })
  describe('connectedCallback', () => {
    let toggleCollapseSpy, mdsAccordionHeaderWrapper
    beforeEach(() => {
      mdsAccordionHeaderWrapper = element.shadowRoot.querySelector('.ui-accordion-header-wrapper')
      toggleCollapseSpy = spyOn(element, 'toggleCollapse').and.callThrough()
      element.setAttribute('test-attribute', 'false')
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should render a style element', () => {
      let styleNodes = element.shadowRoot.querySelectorAll('style')
      expect(styleNodes.length).toBe(1)
      expect(styleNodes[0].tagName).toBe('STYLE')
    })

    it('should render an ui-paper element', () => {
      let mdsAccordion = element.shadowRoot.querySelectorAll('ui-paper')
      expect(mdsAccordion.length).toBe(1)
      expect(mdsAccordion[0].tagName).toBe('ui-PAPER')
    })
    
    it('should render accordion header wrapper', () => {
      expect(mdsAccordionHeaderWrapper.tagName).toBe('DIV')
    })

    it('should render accordion header wrapper onClick attribute', () => {
      expect(mdsAccordionHeaderWrapper.getAttribute('onclick')).toBe('this.onHeaderClick')
    })

    it('should render an accordion header slot', () => {
      let mdsAccordionHeader = element.shadowRoot.querySelectorAll('.ui-accordion-header')
      expect(mdsAccordionHeader.length).toBe(1)
      expect(mdsAccordionHeader[0].tagName).toBe('SLOT')
    })

    it('should render an accordion content slot', () => {
      let mdsAccordionContent = element.shadowRoot.querySelectorAll('.ui-accordion-content')
      expect(mdsAccordionContent.length).toBe(1)
      expect(mdsAccordionContent[0].tagName).toBe('SLOT')
    })

    it('should render accordion header icon as svg', () => {
      let mdsAccordionHeaderIcon = element.shadowRoot.querySelectorAll('.ui-accordion-header-icon')
      expect(mdsAccordionHeaderIcon.length).toBe(1)
      expect(mdsAccordionHeaderIcon[0].tagName).toBe('SVG')
    })

    it('should render svg path', () => {
      let mdsAccordionHeaderIcon = element.shadowRoot.querySelectorAll('.ui-accordion-header-icon')
      expect(mdsAccordionHeaderIcon.length).toBe(1)
      expect(mdsAccordionHeaderIcon[0].children[0].tagName).toBe('PATH')
    })

    it('should have a mutation observer', () => {
      expect(toggleCollapseSpy.calls.count()).toBe(1)
    })
  })
  describe('toggleCollapse', () => {
    let headerIcon, contentSlot, openAccordion, slotContents
    beforeEach(() => {
      contentSlot = element.shadowRoot.querySelector('.ui-accordion-content')
      slotContents = element.querySelector('[slot=accordion-content]')
      contentSlot.style.height = -1
      slotContents.scrollHeight = 1
      headerIcon = element.shadowRoot.querySelectorAll('.ui-accordion-header-icon')
      element.setAttribute('state', 'open')
    })

    it('calls query selector on mds accordion content', () => {
      element.toggleCollapse()
      expect(contentSlot.tagName).toBe('SLOT')
    })

    it('calls query selector on accordion header icon', () => {
      element.toggleCollapse()
      expect(headerIcon.length).toBe(1)
      expect(headerIcon[0].tagName).toBe('SVG')
    })

    it('adds the open css class when isOpen is true', () => {
      element.toggleCollapse()
      expect(headerIcon[0]._attributesMap.class).toBe('ui-accordion-header-icon open')
    })

    it('removes the open css class when isOpen is false', () => {
      element.setAttribute('state', 'collapse')
      element.toggleCollapse()
      expect(headerIcon[0]._attributesMap.class).toBe('ui-accordion-header-icon')
    })

    it('sets the style height to 0 when collapsed', () => {
      element.setAttribute('state', 'collapse')
      element.toggleCollapse()
      expect(contentSlot.style.height).toBe('0px')
    })

    it('sets the style height to > 0 when open', () => {
      element.toggleCollapse()
      expect(contentSlot.style.height).toBe('1px')
    })
  })
})
