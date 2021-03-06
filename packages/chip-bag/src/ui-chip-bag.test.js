/**
 * @jest-environment jest-environment-happy-dom
 */
import { ENTER_KEY_CODE, BACKSPACE_KEY_CODE } from './ui-chip-bag'

describe('MckChipBag', () => {
  let element
  beforeEach(() => {
    element = document.createElement('ui-chip-bag')
    document.body.appendChild(element)
  })

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  describe('handleInputKeyup', () => {
    let addChipsSpy, renderSpy
    beforeEach(()=>{
      addChipsSpy = spyOn(element, 'addChips')
      renderSpy = spyOn(element, 'render')
      element.inputElement.value = 'chip-text'
      element.handleInputKeyup({ keyCode: ENTER_KEY_CODE })
    })

    it('calls addChips and render when the Enter key is depressed', () => {
      expect(addChipsSpy.calls.count()).toBe(1)
      expect(addChipsSpy.calls.all()[0].args[0]).toBe('chip-text')
      expect(renderSpy.calls.count()).toBe(1)
    })
  })

  describe('handleInputKeydown', () => {
    let addChipsSpy, renderSpy
    beforeEach(()=>{
      addChipsSpy = spyOn(element, 'addChips')
      renderSpy = spyOn(element, 'render')
      element.inputElement.value = 'chip-text'
      element.handleInputKeydown({ keyCode: ENTER_KEY_CODE })
    })

    describe('when the input field is empty', ()=>{
      let removeChipSpy
      beforeEach(()=>{

        removeChipSpy = spyOn(element, 'removeChip')
        element.inputElement.value = '';
        element.chips = ['hello']
        element.handleInputKeydown({ keyCode: BACKSPACE_KEY_CODE })
      })

      it('calls removeChip when the Backspace key is pressed down', () => {
        expect(removeChipSpy.calls.count()).toBe(1)
        expect(removeChipSpy.calls.all()[0].args[0].target.innerHTML).toBe('hello')
      })
    })

    describe('when the input field has any value', ()=>{
      let removeChipSpy
      beforeEach(()=>{

        removeChipSpy = spyOn(element, 'removeChip')
        element.inputElement.value = 'f';
        element.chips = ['hello']
        element.handleInputKeydown({ keyCode: BACKSPACE_KEY_CODE })
      })
      it('does not call removeChip when the Backspace key is pressed down', () => {
        expect(removeChipSpy.calls.count()).toBe(0)
      })
    })
  })

  describe('addChips', () => {
    let pushSpy, dispatchEventSpy, setAttributeSpy
    beforeEach(() => {
      dispatchEventSpy = spyOn(element, 'dispatchEvent')
      pushSpy = spyOn(element.chips, 'push').and.callThrough()
      element.setAttribute('delimiter', ';')
      setAttributeSpy = spyOn(element, 'setAttribute')
      element.addChips('text;othertext')
    })

    it('calls push twice on the 2 strings', () => {
      expect(pushSpy.calls.count()).toBe(2)
      expect(pushSpy.calls.all()[0].args[0]).toBe('text')
      expect(pushSpy.calls.all()[1].args[0]).toBe('othertext')
    })

    it('dispatches an updatechips event with the chips array', () => {
      expect(dispatchEventSpy.calls.count()).toBe(1)
      expect(dispatchEventSpy.calls.all()[0].args[0].type).toBe('chipsupdate')
      expect(dispatchEventSpy.calls.all()[0].args[0].detail).toBe(element.chips)
    })

    it('sets the chips-length attribute to 2', () => {
      expect(setAttributeSpy.calls.count()).toBe(1)
      expect(setAttributeSpy.calls.all()[0].args[0]).toBe('chips-length')
      expect(setAttributeSpy.calls.all()[0].args[1]).toBe(2)
    })
  })

  describe('connectedCallback', () => {
    let renderSpy, addEventListenerSpy
    beforeEach(() => {
      renderSpy = spyOn(element, 'render')
      addEventListenerSpy = spyOn(element, 'addEventListener')
      element.connectedCallback()
      element.setAttribute('allow-duplicates', 'true')
    })

    it('adds the click eventListener to the focusInput function', () => {
      expect(addEventListenerSpy.calls.count()).toBe(1)
      expect(addEventListenerSpy.calls.all()[0].args[0]).toBe('click')
      expect(addEventListenerSpy.calls.all()[0].args[1]).toBe(element.focusInput)
    })
  })

  describe('disconnectedCallback', () => {
    it('removes the click eventListener', () => {
      let removeEventListenerSpy = spyOn(element, 'removeEventListener')
      element.disconnectedCallback()
      expect(removeEventListenerSpy.calls.count()).toBe(1)
      expect(removeEventListenerSpy.calls.all()[0].args[0]).toBe('click')
      expect(removeEventListenerSpy.calls.all()[0].args[1]).toBe(element.focusInput)
    })
  })

  describe('focusInput', () => {
    it('calls focus() on the inputElement', () => {
      let focusSpy = spyOn(element.inputElement, 'focus')
      element.focusInput()
      expect(focusSpy.calls.count()).toBe(1)
    })
  })

  describe('removeChip', () => {
    let dispatchEventSpy, setAttributeSpy, renderSpy
    beforeEach(() => {
      dispatchEventSpy = spyOn(element, 'dispatchEvent')
      setAttributeSpy = spyOn(element, 'setAttribute')
      renderSpy = spyOn(element, 'render')
      element.removeChip({ target: {innerHTML: 'hello' }})
    })

    it('dispatches an chipsupdate event', () => {
      expect(dispatchEventSpy.calls.count()).toBe(1)
      expect(dispatchEventSpy.calls.all()[0].args[0].type).toBe('chipsupdate')
      expect(dispatchEventSpy.calls.all()[0].args[0].detail).toBe(element.chips)
    })

    it('sets the chips-length attribute', () => {
      expect(setAttributeSpy.calls.count()).toBe(1)
      expect(setAttributeSpy.calls.all()[0].args[0]).toBe('chips-length')
      expect(setAttributeSpy.calls.all()[0].args[1]).toBe(0)
    })

    it('calls render()', () => {
      expect(renderSpy.calls.count()).toBe(1)
    })
  })

  describe('render', () => {
    let addChipsSpy
    beforeEach(() => {
      element = document.createElement('ui-chip-bag')
      addChipsSpy = spyOn(element, 'addChips').and.callThrough()
      element.setAttribute('value', 'chip-text')
      element.setAttribute('required', 'true')
      document.body.appendChild(element)
    })

    describe(`if an attribute's name is value`, () => {
      it(`calls addChips() with the value as the argument`, () => {
        expect(addChipsSpy.calls.count()).toBe(1)
        expect(addChipsSpy.calls.all()[0].args[0]).toBe('chip-text')
      })
    })

    it('should have a style element', () => {
      const styleNodes = element.shadowRoot.querySelectorAll('style')
      expect(styleNodes.length).toBe(1)
      expect(styleNodes[0].tagName).toBe('STYLE')
    })

    it('should have a div element', () => {
      const mckChipBagNodes = element.shadowRoot.querySelectorAll('.ui-chip-bag')
      expect(mckChipBagNodes.length).toBe(1)
      expect(mckChipBagNodes[0].tagName).toBe('DIV')
    })

    it('should have a slot element', () => {
      const mckChipHelperTextSlots = element.shadowRoot.querySelectorAll('slot[name="ui-chip-bag-helper"]')
      expect(mckChipHelperTextSlots.length).toBe(1)
      expect(mckChipHelperTextSlots[0].tagName).toBe('SLOT')
    })

    describe('ui-chip elements', () => {
      let chips, input;
      beforeEach(() => {
        input = element.shadowRoot.querySelectorAll('input')
        chips = element.shadowRoot.querySelectorAll('ui-chip')
      })

      it('should exist', () => {
        expect(chips.length).toBe(1)
      })

      it('should have an onclosechip attribute set to this.removeChip', () => {
        expect(chips[0].getAttribute('onclosechip')).toBe('this.removeChip')
      })

      it('should have chip-text attribute set to the value', () => {
        expect(chips[0].innerHTML).toBe('chip-text')
      })
      
      it('should have a single input element', () => {
        expect(input.length).toBe(1)
      })  
      it('should have an onkeyup attribute set to this.handleInputKeyup', () => {
        expect(input[0].getAttribute('onkeyup')).toBe('this.handleInputKeyup')
      })    
  
      it('should have an onkeydown attribute set to this.handleInputKeydown', () => {
        expect(input[0].getAttribute('onkeydown')).toBe('this.handleInputKeydown')
      })
    })
   
  })
})
