/**
 * @jest-environment jest-environment-happy-dom
 */
import './mds-accordion'

describe('MdsAccordion', () => {
  let element
  beforeEach(() => {
    element = document.createElement('mds-accordion')
    element.innerHTML = `
    <div class="mds-accordion-header-wrapper"
      <div slot="accordion-header">
        test-text
      </div>
      <div slot="accordion-content">
        test-text2
      </div>
    </div>
    `
    document.body.appendChild(element)
  })

  afterEach(() => document.body.removeChild(element))

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  // wrap header clicks in same describe maybe
  describe('onHeaderClick Open', () => {
    let dispatchSpy
    beforeEach(() => {
      element.setAttribute('state', 'open')
      const contentSlot = element.shadowRoot.querySelector('.mds-accordion-content')
      contentSlot.style.height = 1
      element.parentElement = {
        removeChild: jest.fn()
      }
      // contentSlotSpy = spyOn(element.shadowRoot.querySelector('.mds-accordion-content'), 'scrollHeight')
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
    let dispatchSpy, contentSlotSpy
    beforeEach(() => {
      element.setAttribute('state', 'collapse')
      element.parentElement = {
        removeChild: jest.fn()
      }
      // contentSlotSpy = spyOn(element.shadowRoot.querySelector('.mds-accordion-content'), 'scrollHeight')
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
    let onClickAttributeSpy
    beforeEach(() => {
      onClickAttributeSpy = spyOn(element, 'onHeaderClick')
      element.setAttribute('state', 'collapse')
      element.parentElement = {
        removeChild: jest.fn()
      }
      // contentSlotSpy = spyOn(element.shadowRoot.querySelector('.mds-accordion-content'), 'scrollHeight')
      // dispatchSpy = spyOn(element, 'dispatchEvent')
      element.onHeaderClick()
    })

    it('should render a style element', () => {
      let styleNodes = element.shadowRoot.querySelectorAll('style')
      expect(styleNodes.length).toBe(1)
      expect(styleNodes[0].tagName).toBe('STYLE')
    })

    it('should render a div element', () => {
      let mdsAccordion = element.shadowRoot.querySelectorAll('.mds-accordion')
      expect(mdsAccordion.length).toBe(1)
      expect(mdsAccordion[0].tagName).toBe('DIV')
    })
    
    it('should render accordion header wrapper', () => {
      let mdsAccordionHeaderWrapper = element.shadowRoot.querySelectorAll('.mds-accordion-header-wrapper')
      expect(mdsAccordionHeaderWrapper.length).toBe(1)
      expect(mdsAccordionHeaderWrapper[0].tagName).toBe('DIV')
    })

    it('should render accordion header wrapper onClick attribute', () => {
      expect(onClickAttributeSpy.calls.count()).toBe(1)
    })

    it('should render an accordion header slot', () => {
      let mdsAccordionHeader = element.shadowRoot.querySelectorAll('.mds-accordion-header')
      expect(mdsAccordionHeader.length).toBe(1)
      expect(mdsAccordionHeader[0].tagName).toBe('SLOT')
    })

    it('should render an accordion content slot', () => {
      
    })

    it('should render svg', () => {
      
    })

    it('should render svg path', () => {
      
    })

    it('should have a mutation observer', () => {
      
    })

    it('should call toggleCollapse on mutation', () => {
      
    })

    it('verify that observe was called with the correct arguments', () => {
      
    })
  })
  describe('toggleCollapse', () => {
    it('calls query selector on mds accordion content', () => {
      
    })

    it('calls query selector on accordion content', () => {
      // grab content slot
    })

    it('calls query selector on accordion header icon', () => {
      
    })

    it('adds the open css class when isOpen is true', () => {
      
    })

    it('removes the open css class when isOpen is false', () => {
      
    })

    it('sets the style height to 0 when collapsed', () => {
      
    })

    it('sets the style height to > 0 when open', () => {
      
    })
  })
})
