/**
 * @jest-environment jest-environment-happy-dom
 */
import './mds-banner'

describe('MckBanner', () => {
  let element
  beforeEach(() => {
    element = document.createElement('mds-banner')
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
      const mckChipNodes = element.shadowRoot.querySelectorAll('div')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('DIV')
    })

    it('should render a header slot element', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('.header')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('SLOT')
    })

    it('should render a content slot element', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('.content')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('SLOT')
    })

    it('should render an h1 element', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('h1')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('H1')
    })

    it('should render a p element', () => {
      const mckChipNodes = element.shadowRoot.querySelectorAll('p')
      expect(mckChipNodes.length).toBe(1)
      expect(mckChipNodes[0].tagName).toBe('P')
    })
  })
})
