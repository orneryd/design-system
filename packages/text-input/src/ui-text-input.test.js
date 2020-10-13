/**
 * @jest-environment jest-environment-happy-dom
 */
import './ui-text-input'

describe('McKTextInput', () => {
  let element
  beforeEach(() => {
    element = document.createElement('ui-text-input')
    element.setAttribute('label', 'lorem ipsum')
    document.body.appendChild(element)
  })

  afterEach(() => document.body.removeChild(element))

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  describe('handleInputChange', () => {
    beforeEach(() => {
      element.handleInputChange({ target: { value: 'lorem ipsum' } })
    })

    it('assigns the argument to the value property', () => {
      expect(element.value).toBe('lorem ipsum')
    })
  })

  describe('handleBlur', () => {
    let removeSpy
    beforeEach(() => {
      removeSpy = spyOn(element.inputWrapper.classList, 'remove')
      element.render()
      element.handleBlur()
    })

    it('calls remove on classList on inputWrapper', () => {
      expect(removeSpy.calls.count()).toBe(1)
      expect(removeSpy.calls.mostRecent().args[0]).toBe('focus')
    })
  })

  describe('handleFocus', () => {
    let addSpy
    beforeEach(() => {
      addSpy = spyOn(element.inputWrapper.classList, 'add')
      element.handleFocus()
    })

    it('calls add on classList on inputWrapper', () => {
      expect(addSpy.calls.count()).toBe(1)
      expect(addSpy.calls.mostRecent().args[0]).toBe('focus')
    })
  })

  describe('focusInput', () => {
    let focusSpy
    beforeEach(() => {
      focusSpy = spyOn(element.shadowRoot.querySelector('.ui-text-input'), 'focus')
      element.focusInput()
    })

    it('calls focus on the ui-text-input element', () => {
      expect(focusSpy.calls.count()).toBe(1)
    })
  })

  describe('connectedCallback', () => {
    let renderSpy
    beforeEach(() => {
      renderSpy = spyOn(element, 'render')
      element.connectedCallback()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    afterAll(() => {
      element.render.mockRestore()
    })

    it('should call render', () => {
      expect(renderSpy.calls.count()).toBe(1)
    })
  })

  describe('render', () => {
    let styleNodes, mckChipNodes, labelNodes, inputNode
    beforeEach(() => {
      styleNodes = element.shadowRoot.querySelectorAll('style')
      mckChipNodes = element.shadowRoot.querySelectorAll('.ui-text-input-wrapper')
      labelNodes = element.shadowRoot.querySelectorAll('.ui-text-input-label')
      inputNode = element.shadowRoot.querySelectorAll('.ui-text-input')
    })

    it('should have a style element', () => {
      expect(styleNodes.length).toBe(1)
      expect(styleNodes[0].tagName).toBe('STYLE')
    })

    it('should have a text input wrapper div element', () => {
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('DIV')
    })

    it('should have a label element with some text for its inner HTML', () => {
      expect(labelNodes.length).toBe(1)
      expect(labelNodes[0].tagName).toBe('LABEL')
      expect(labelNodes[0].innerHTML).toBe('lorem ipsum')
    })

    it('should have an input element with the onkeyup, onfocus, and onblur attributes set', () => {
      expect(inputNode.length).toBe(1)
      expect(inputNode[0].tagName).toBe('INPUT')
      expect(inputNode[0].getAttribute('onkeyup')).toBe('this.handleInputChange')
      expect(inputNode[0].getAttribute('onfocus')).toBe('this.handleFocus')
      expect(inputNode[0].getAttribute('onblur')).toBe('this.handleBlur')
    })

    it('should have a text input bottom border div element and onkeyup attribute set', () => {
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('DIV')
    })
  })
})
