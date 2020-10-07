import { configure, addParameters } from '@storybook/react'
import requireContext from 'require-context.macro'
import '../src/index.css'
import { themes } from '@storybook/theming';
// import '../src/components/Typography/Typography.css'

addParameters({
  options: {
    enableShortcuts: false,
    showRoots: true,
    theme: themes.light
  },
  docs: {
    inlineStories: false
  }
});


const req = requireContext('../src', true, /\.stories\.jsx$/)

if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
configure(req, module)
