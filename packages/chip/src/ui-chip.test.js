/**
 * @jest-environment jest-environment-happy-dom
 */
import './ui-chip'

describe('UIChip', () => {
  let element
  beforeEach(() => {
    element = document.createElement('ui-chip')
    document.body.appendChild(element)
  })

  afterEach(() => document.body.removeChild(element))

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  describe('closeChip', () => {
    let dispatchSpy
    beforeEach(() => {
      element.parentElement = {
        removeChild: jest.fn()
      }
      dispatchSpy = spyOn(element, 'dispatchEvent')
      element.closeChip()
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

    it('should call dispatchEvent on the element with the closechip custom event', () => {
      expect(dispatchSpy.calls.mostRecent().args[0].type).toBe('closechip')
    })

  })
  describe('connectedCallback', () => {
    it('should have a style element', () => {
      const styleNodes = element.shadowRoot.querySelectorAll('style')
      expect(styleNodes.length).toBe(1)
      expect(styleNodes[0].tagName).toBe('STYLE')
    })

    it('should have a div element', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('.ui-chip')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('DIV')
    })

    it('should have a close button that an svg', () => {
      const mckChipButtons = element.shadowRoot.querySelectorAll('.ui-chip-remove')
      expect(mckChipButtons.length).toBe(1)
      expect(mckChipButtons[0].tagName).toBe('SVG')
    })
  })

  describe('chip button click', () => {
    let mckChipButton
    beforeEach(() => {
      mckChipButton = element.shadowRoot.querySelector('.ui-chip-remove')
    })

    it('should have an onclick attribute set to closeChip', () => {
      expect(mckChipButton.getAttribute('onclick')).toBe('this.closeChip')
    })
  })
})
