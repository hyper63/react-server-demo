import React from 'react'
import { render } from 'react-nil'
import opine from "opine"

export function App(props) {
  const app = opine()
  return React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { app })
    }
    return child
  })
}

export function Request({app, method="get", path="/", children}) {
  
  React.Children.map(children, 
    child => {
      if (React.isValidElement(child)) {
        app[method](path, (req, res) => {
          const component = React.cloneElement(child, { req, res })
          render(component)
        })
      }
      return child
    })
  return null
}

export function Listen(props) {
  console.log('listening on port', props.port)
  props.app.listen(props.port)
  return null
}


