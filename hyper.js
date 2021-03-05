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

export function Request({app, method="get", path, handler}) {
  app[method](path, handler)
  return null
}

export function Listen(props) {
  console.log('listening on port', props.port)
  props.app.listen(props.port)
  return null
}


