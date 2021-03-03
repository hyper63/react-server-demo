var count = 0

export const Show = ({handler}) => { 
  handler((req, res) =>
    res.send('count: ' + count)
  )
  return null
}

export const Inc = ({handler}) => {
  handler((req, res) => {
    count = count + 1
    res.send('add: ' + count)
  })
  return null
}

export const Dec = ({handler}) => {
  handler((req, res) => {
    count = count - 1
    res.send('sub: ', count)
  })
  return null
}

