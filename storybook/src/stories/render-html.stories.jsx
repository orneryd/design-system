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
  <render-html href="/samples/snippet.html" placeholder="Your Email Address"></render-html>
)

export const RenderAttribute = () => (
  <render-html placeholder="Do something else" html="<p> I am some simple html content to be passed as either <ul><li>an 'html' attribute </li><li>as the body</li></ul></p> ${this.placeholder}"></render-html>
)

const interpolation = 'How did i get here? ${this.placeholder}'
export const RenderBody = () => (
  <render-html placeholder="I'm changing via attributes" >
    <div> I am some simple html content to be passed as either <ul><li>an 'html' attribute </li><li>as the body</li></ul></div>
    <div>{interpolation}</div>
  </render-html>
)