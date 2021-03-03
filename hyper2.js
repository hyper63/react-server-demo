import React from 'react'
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
  return React.Children.map(children, 
    child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { 
          handler: fn => app[method](path, fn)
        })
      }
      return child
    })
}

export function Listen(props) {
  console.log('listening on port', props.port)
  props.app.listen(props.port)
  return null
}


