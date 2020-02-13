/**
 * @jest-environment jest-environment-happy-dom
 */
import './mck-chip'

describe('MckChip', () => {
  let element
  beforeEach(() => {
    element = document.createElement('mck-chip')
    element.setAttribute('chip-text', 'fake-text')
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

    it('should call dispatchEvent on the element with the detail being the chip-text value', () => {
      expect(dispatchSpy.calls.mostRecent().args[0].detail).toBe('fake-text')
    })

    it('should call removeChild exactly 1 time', () => {
      expect(element.parentElement.removeChild.mock.calls.length).toBe(1)
    })

    it('should call removeChild on the parentElement with itself as the argument', () => {
      expect(element.parentElement.removeChild.mock.calls[0][0]).toBe(element)
    })
  })
  describe('connectedCallback', () => {
    it('should have a style element', () => {
      const styleNodes = element.shadowRoot.querySelectorAll('style')
      expect(styleNodes.length).toBe(1)
      expect(styleNodes[0].tagName).toBe('STYLE')
    })

    it('should have a div element', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('.mck-chip')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('DIV')
    })

    it('should have single label that is the chip text', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('.mck-chip-text')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].innerHTML).toBe('fake-text')
    })

    it('should have a close button that is the &times; symbol', () => {
      const mckChipButtons = element.shadowRoot.querySelectorAll('.mck-chip-remove')
      expect(mckChipButtons.length).toBe(1)
      expect(mckChipButtons[0].innerHTML).toBe('&times')
    })
  })

  describe('chip button click', () => {
    let mckChipButton
    beforeEach(() => {
      mckChipButton = element.shadowRoot.querySelector('.mck-chip-remove')
    })

    it('should have an onclick attribute set to closeChip', () => {
      expect(mckChipButton.getAttribute('onclick')).toBe('this.closeChip')
    })
  })
})
