import React from 'react'

import '@ornery/ui-text-input'

export default {
  title: 'Simone/Inputs'
}

export const Text = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />
    <ui-text-input label="Some Label" />
  </div>
)

export const InitialValue = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />
    <ui-text-input value="some initial value" label="I have an initial Value" />
  </div>
)
export const Secure = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />
    <ui-text-input type="password" label="Type Some Secure Text" />
  </div>
)

export const Email = () => (
  <div style={{ width: '360px', margin: '20px' }}>
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />
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
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />

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
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />

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
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />

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
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />

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
    <link rel="stylesheet" type="text/css" href="/simone/overrides.css" />

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