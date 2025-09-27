import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import Chai from './chai'

function MyApp() {
  return (
    <>
      <h1>Aloo Khayenge {username}</h1>
    </>
  )
}

const customElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank"
  },
  children: "Magic!"
}

const ReactElement = (
  <>
    <h1>Now work!</h1>
  </>
)
const username = "akshay"
// const OwnReactElement = React.createElement(
//   'a', { href: "www.google.com", target: "_blank" }, "Click me "
// )
// const username = "Akshay"
const AnyReactElement = React.createElement(
  'p', {}, "Enter your name "
)

const InputElement = React.createElement(
  'input', { type: "text" }
)

const buttonElement = React.createElement(
  'button', { type: "submit" }, "Submit"
)



function Apps() {
  return (
    <>
      {AnyReactElement}
      {InputElement}
      {buttonElement}

      {/* {OwnReactElement} */}
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <Apps />
)
