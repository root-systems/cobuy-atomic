import { configure } from '@storybook/react'

const req = require.context('../', true, /\.story\.js$/)

configure(() => {
  req.keys().forEach((story) => req(story))
}, module)
