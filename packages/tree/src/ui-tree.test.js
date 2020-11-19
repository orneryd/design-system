/**
 * @jest-environment jest-environment-happy-dom
 */
import './ui-tree'

describe('MckPaper', () => {
  let element
  beforeEach(() => {
    element = document.createElement('ui-paper')
    document.body.appendChild(element)
  })

  afterEach(() => document.body.removeChild(element))

  it('should have a shadow root', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  describe('connectedCallback', () => {
    it('should render a style element', () => {
      const styleNodes = element.shadowRoot.querySelectorAll('style')
      expect(styleNodes.length).toBe(1)
      expect(styleNodes[0].tagName).toBe('STYLE')
    })

    it('should render a div element', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('.paper')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('DIV')
    })

    it('should render a slot element', () => {
        const mckChipNodes = element.shadowRoot.querySelectorAll('slot')
        expect(mckChipNodes.length).toBe(1)
        expect(mckChipNodes[0].tagName).toBe('SLOT')
      })
  })
})
