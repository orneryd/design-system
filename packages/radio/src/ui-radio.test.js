/**
 * @jest-environment jest-environment-happy-dom
 */
import './ui-radio'

describe('McKCheckbox', () => {
  let element
  beforeEach(() => {
    element = document.createElement('ui-checkbox')
    document.body.appendChild(element)
  })

  afterEach(() => document.body.removeChild(element))

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })
})
