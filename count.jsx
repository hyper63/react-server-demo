import React from 'react'
import { render } from 'react-nil'
import { App, Request, Listen } from './hyper2.js'
import { Show, Inc, Dec } from './components.js'


render(
  <App>
    <Request path="/">
      <Show />
    </Request>
    <Request path="/add" method="post">
      <Inc />
    </Request>
    <Listen port={3000} />
  </App>
)


