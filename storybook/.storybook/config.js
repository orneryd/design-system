import { configure as configureReact, addParameters as addParametersReact } from '@storybook/react'
import { configure, setCustomElements, addParameters } from '@storybook/web-components'
import requireContext from 'require-context.macro'
import customElements from '../../custom-elements.json'
import '../src/index.css'
// import '../src/components/Typography/Typography.css'

addParameters({
  options: {
    showRoots: true,
  },
  docs: {
    inlineStories: false
  }
});
  addParametersReact({
    options: {
      enableShortcuts: false
    },
  })

setCustomElements(customElements)


const req = requireContext('../src', true, /\.stories\.jsx$/)

// function loadStories() {
//   req.keys().forEach(filename => req(filename))
// }

configureReact(req, module)
