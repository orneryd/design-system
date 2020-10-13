import React from 'react'

import '@ornery/render-html'
import '@ornery/ui-banner'
import '@ornery/ui-paper'
import '@ornery/ui-template'
import '@ornery/ui-text-input'
import { withKnobs, boolean } from '@storybook/addon-knobs'


export default {
  title: 'Web Components/HTML',
  decorators: [withKnobs]
}

export const RemoteRender = () => (
  <render-html href="/samples/snippet.html"></render-html>
)

export const RenderAttribute = () => (
  <render-html html="<p> I am some simple html content to be passed as either <ul><li>an 'html' attribute </li><li>as the body</li></ul></p>"></render-html>
)

export const RenderBody = () => (
  <render-html>
    <div> I am some simple html content to be passed as either <ul><li>an 'html' attribute </li><li>as the body</li></ul></div>
  </render-html>
)