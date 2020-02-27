/**
 * @jest-environment jest-environment-happy-dom
 */
import './mds-radio'

describe('McKCheckbox', () => {
  let element
  beforeEach(() => {
    element = document.createElement('mds-checkbox')
    document.body.appendChild(element)
  })

  afterEach(() => document.body.removeChild(element))

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })
})
