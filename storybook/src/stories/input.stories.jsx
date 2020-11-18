import React from 'react'
import MagnifyIcon from '@icons/material/MagnifyIcon';

import WebComponentWrapper from '@ornery/react-web-components'
import '@ornery/ui-text-input'
// import './input.stories.css'

export default {
  title: 'Web Components/Inputs'
}

export const Text = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <WebComponentWrapper 
      tag="ui-text-input" 
      label="Wrapoped Input Label" 
      onChange={(evt)=> console.log("onChange", evt.target.value)} 
      onBlur={(evt)=> console.log("onBlur", evt.target)} 
      onFocus={(evt)=> console.log("onFocus", evt.target)}
    >
      <MagnifyIcon slot="icon" onClick={()=> console.log("I'm Searching!")} />
    </WebComponentWrapper>
    <ui-text-input label="Some Label" onChange={(evt)=> console.log(evt.target)}>
      <MagnifyIcon slot="icon" onClick={()=> console.log("I'm Searching!")} />
    </ui-text-input>

  </div>
)
export const InitialValue = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-text-input value="some initial value" label="I have an initial Value" />
  </div>
)
export const Secure = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <ui-text-input type="password" label="Type Some Secure Text" />
  </div>
)

export const Email = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="email"
        label="Type an email to be validated"
      />
    </form>
  </div>
)
export const Color = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="color"
        static-label
        label="Select a color"
      />
    </form>
  </div>
)

export const Date = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="date"
        static-label
        label="Enter a Date"
      />
    </form>
  </div>
)


export const DateTimeLocal = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="datetime-local"
        static-label
        label="Enter a Date and Time"
      />
    </form>
  </div>
)


export const File = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="File"
        static-label
        label="Select a file"
      />
    </form>
  </div>
)

export const Image = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <form>
      <ui-text-input
        type="Image"
        style={{height: '250px', width: '300px'}}
        src="http://www.kittenwar.com/c_images/2012/06/24/210259.2.jpg"
        static-label
        label="Image"
      />
    </form>
  </div>
)