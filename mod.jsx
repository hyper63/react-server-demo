import React, { useState } from "react"
import { render } from "react-nil"
import { App, Request, Listen } from './hyper.js'

function hello(req, res) {
  res.send("Hello World")
}

function page2(req, res) {
  res.send("page2")
}


render(
  <App>
    <Request method="get" path="/" handler={hello} />
    <Request method="get" path="/2" handler={page2} />
    <Listen port={3001} />
  </App>
)

/*
 * <App>
 *   <Request path="/">
 *      <Hello />
 *   </Request>
 *   <Listen port={3001} />
 * </App>
 *
 * function Hello({req, res}) {
 *   res.send('Hello World')
 *   return null
 * }
 */

