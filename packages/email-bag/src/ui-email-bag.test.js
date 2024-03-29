/**
 * @jest-environment jest-environment-happy-dom
 */
import '@ornery/ui-chip-bag'
import UIEmailBag from './ui-email-bag'

const fakeInput = document.createElement('input');
// Because of the fake shadowDom implementation we are using to run the tests in jest we need to use these polyfills and mocks.
// If we can switch to using a different test environment which supports shadow dom then we can remove these bits.
Object.defineProperty(UIEmailBag.prototype, 'chipBag', {
  get: jest.fn(() => {
    return { inputElement: fakeInput}
  }),
  set: jest.fn()
})

// const fakeInput = document.createElement('input');
// // Because of the fake shadowDom implementation we are using to run the tests in jest we need to use these polyfills and mocks.
// // If we can switch to using a different test environment which supports shadow dom then we can remove these bits.
// Object.defineProperty(UIEmailBag.prototype, 'chipBag', {
//   get: jest.fn(() => {
//     return { inputElement: fakeInput}
//   }),
//   set: jest.fn()
// })

describe('ui-email-bag', () => {
  let element
  beforeEach(() => {
    element = document.createElement('ui-email-bag')
    document.body.appendChild(element)
  })

  afterEach(() => document.body.removeChild(element))

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  describe('onChipsUpdate', () => {
    let notifyValiditySpy, setInvalidCSSSpy, removeInvalidCSSSpy, dispatchEventSpy
    beforeEach(() => {
      notifyValiditySpy = spyOn(element, 'notifyValidity')
      setInvalidCSSSpy = spyOn(element, 'setInvalidCSS')
      removeInvalidCSSSpy = spyOn(element, 'removeInvalidCSS')
      dispatchEventSpy = spyOn(element, 'dispatchEvent')
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    describe('when event detail is an empty array', () => {
      let fakeEvent
      beforeEach(() => {
        fakeEvent = { detail: [] }
      })

      describe('when the required attribute is set', () => {
        beforeEach(() => {
          element.setAttribute('required')
          element.chipsUpdate(fakeEvent)
        })

        it('calls notifyValidity if there are no incoming emails when required', () => {
          expect(notifyValiditySpy.calls.count()).toBe(1)
          expect(notifyValiditySpy.calls.allArgs()[0][0]).toBe('Required')
        })

        it('sets invalid css if there are no incoming emails when required', () => {
          expect(setInvalidCSSSpy.calls.count()).toBe(1)
        })
      })

      describe('when the required attribute is not set', () => {
        beforeEach(() => {
          element.chipsUpdate(fakeEvent)
        })

        it('sends a validationstart event', () => {
          expect(dispatchEventSpy.calls.count()).toBe(1)
          expect(dispatchEventSpy.calls.all()[0].args[0].type).toBe('validationstart')
        })

        it('calls notifyValidity if there are no incoming emails when not required', () => {
          expect(notifyValiditySpy.calls.count()).toBe(1)
          expect(notifyValiditySpy.calls.allArgs()[0][0]).toBe('')
        })

        it('removes invalid css if there are no incoming emails when not required', () => {
          expect(removeInvalidCSSSpy.calls.count()).toBe(1)
        })
      })
    })
    
    describe('when emails are required and the domain is ornery', () => {
      beforeEach(() => {
        element.setAttribute('required')
        element.setAttribute('domains', 'ornery')
      })

      describe('when there is an invalid email', () => {
        beforeEach(() => {
          element.chipsUpdate({ detail: ['test.email@invalid.com'] })
        })
  
        it('calls notifyValidity if there is an invalid email', () => {
          expect(notifyValiditySpy.calls.count()).toBe(1)
          expect(notifyValiditySpy.calls.allArgs()[0][0]).toBe(
            'Required\nInvalid: test.email@invalid.com'
          )
        })
    
        it('sets invalid css if there is an invalid email', () => {
          expect(setInvalidCSSSpy.calls.count()).toBe(1)
        })
      })

      describe('when there is an invalid email', () => {
        beforeEach(() => {
          element.chipsUpdate({ detail: ['test.email@ornery.com'] })
        })
    
        it('sets a visible spinner when all emails are valid', () => {
          expect(element.spinner.style.visibility).toBe('visible')
        })
      })

      describe('when all emails are successfully validated', () => {
        let validateEmailSpy
        beforeEach(done => {
          validateEmailSpy = spyOn(element, 'validateEmail').and.returnValue(Promise.resolve({}))
          element.chipsUpdate({ detail: ['test.email@ornery.com'] }).then(incomingEmails => {
            done()
          })
        })

        it('calls validateEmail with the email to be validated', () => {
          expect(validateEmailSpy.calls.count()).toBe(1)
          expect(validateEmailSpy.calls.allArgs()[0][0]).toBe('test.email@ornery.com')
        })

        it('calls notifyValidity', () => {
          expect(notifyValiditySpy.calls.count()).toBe(1)
          expect(notifyValiditySpy.calls.allArgs()[0][0]).toBe('')
        })

        it('removes invalid css', () => {
          expect(setInvalidCSSSpy.calls.count()).toBe(0)
          expect(removeInvalidCSSSpy.calls.count()).toBe(1)
        })

        it('hides the spinner', () => {
          expect(element.spinner.style.visibility).toBe('hidden')
        })

        it('dispatches a validationend event when all email validation calls succeed', () => {
          expect(dispatchEventSpy.calls.count()).toBe(2)
          expect(dispatchEventSpy.calls.all()[1].args[0].type).toBe('validationend')
        })
      })

      describe('when all emails are successfully validated', () => {
        let validateEmailSpy
        beforeEach(done => {
          validateEmailSpy = spyOn(element, 'validateEmail').and.returnValue(Promise.reject({}))
          element.chipsUpdate({ detail: ['test.email@ornery.com'] }).then(incomingEmails => {
            done()
          })
        })

        it('calls validateEmail with the email to be validated', () => {
          expect(validateEmailSpy.calls.count()).toBe(1)
          expect(validateEmailSpy.calls.allArgs()[0][0]).toBe('test.email@ornery.com')
        })

        it('calls notifyValidity if one of the validation calls fails', () => {
          expect(notifyValiditySpy.calls.count()).toBe(1)
          expect(notifyValiditySpy.calls.allArgs()[0][0]).toBe('undefined; ')
        })

        it('sets invalid css if one of the validation calls fails', () => {
          expect(removeInvalidCSSSpy.calls.count()).toBe(0)
          expect(setInvalidCSSSpy.calls.count()).toBe(1)
        })

        it('hides the spinner if one of the validation calls fails', () => {
          expect(element.spinner.style.visibility).toBe('hidden')
        })

        it('dispatches a validationend event if one of the validation calls fails', () => {
          expect(dispatchEventSpy.calls.count()).toBe(2)
          expect(dispatchEventSpy.calls.all()[1].args[0].type).toBe('validationend')
        })
      })
    })
  })

  describe('notifyValidity', () => {
    let clone, cloneNodeSpy, removeChildSpy
    beforeEach(() => {
      element.value = 'my value'
      element.id = 'my id'
      element.clone = element.chipBag.inputElement.cloneNode()
      element.appendChild(element.clone)
      removeChildSpy = spyOn(element, 'removeChild').and.callThrough()
      cloneNodeSpy = spyOn(element.chipBag.inputElement, 'cloneNode').and.callThrough()
      element.notifyValidity('my validation message')
      clone = element.clone
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('sets a value attribute on the clone', () => {
      expect(clone.getAttribute('value')).toBe('my value')
    })

    it('sets an id attribute on the clone', () => {
      expect(clone.getAttribute('id')).toBe('my id')
    })

    it('calls cloneNode to create a new clone', () => {
      expect(cloneNodeSpy.calls.count()).toBe(1)
    })

    it('removes a pre-existing clone', () => {
      expect(removeChildSpy.calls.count()).toBe(1)
    })

    it('maintains the clone without the required attribute if needed', () => {
      expect(clone.hasAttribute('required')).toBeFalsy()
    })
  })

  describe('render', () => {
    let notifyValiditySpy, mdsChipBag
    beforeEach(() => {
      notifyValiditySpy = spyOn(element, 'notifyValidity')
      mdsChipBag = element.shadowRoot.querySelectorAll('.emails')
      element.setAttribute('required')
      element.setAttribute('validation-message', 'my validation message')
      element.render()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('renders an mds chip bag', () => {
      expect(mdsChipBag.length).toBe(1)
      expect(mdsChipBag[0].tagName).toBe('ui-CHIP-BAG')
    })

    it('calls notifyValidity', () => {
      expect(notifyValiditySpy.calls.count()).toBe(2)
    })

    it('renders an mds chip bag with the required attribute', () => {
      expect(element.hasAttribute('required')).toBeTruthy()
    })

    it('renders an mds chip bag with the validation-message attribute', () => {
      expect(element.getAttribute('validation-message')).toBe('my validation message')
    })

    it('does not render garbage', () => {
      expect(mdsChipBag[0].getAttribute('bears')).toBe(null)
    })

    it('calls notifyValidity with the string Required when only the required attribute is set', () => {
      element.removeAttribute('validation-message')
      element.render()
      expect(notifyValiditySpy.calls.allArgs()[1][0]).toBe('my validation message')
    })
  })

  describe('connectedCallback', () => {
    let renderSpy
    beforeEach(() => {
      renderSpy = spyOn(element, 'render').and.callThrough()
      element.connectedCallback()
    })

    it('calls render', () => {
      expect(renderSpy.calls.count()).toBe(1)
    })
  })
})
