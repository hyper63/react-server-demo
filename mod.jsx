import React, { useState, useEffect } from 'react'
import { render } from 'react-nil'
import { App, Request, Listen } from './zap.js'

const Hello = ({req, res}) => {
  res.json({hello: 'world'})
  return null
}


render(
  <App>
    <Request path="/">
      <Hello />
    </Request>
    <Listen port={3000} />
  </App>
)


