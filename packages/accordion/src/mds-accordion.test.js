/**
 * @jest-environment jest-environment-happy-dom
 */
import './mds-accordion'

describe('MdsAccordion', () => {
  let element
  beforeEach(() => {
    element = document.createElement('mds-accordion')
    element.innerHTML = `
    <div slot="accordion-header">
      test-text
    </div>
    <div slot="accordion-content">
      test-text2
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
    it('should render a style element', () => {
      const styleNodes = element.shadowRoot.querySelectorAll('style')
      expect(styleNodes.length).toBe(1)
      expect(styleNodes[0].tagName).toBe('STYLE')
    })

    it('should render a div element', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('.mds-accordion')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('DIV')
    })
  })
})
