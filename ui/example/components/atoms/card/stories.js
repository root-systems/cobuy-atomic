import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Card from '.'
import notes from './notes.md'

const Quote = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'My favorite quote'),
  React.createElement(
    'p',
    {},
    '"No one in the brief history of computing has ever written a piece of perfect software. It\'s unlikely that you\'ll be the first." - Andy Hunt'
  )
)

storiesOf('@example|atoms/Card', module)
  .addDecorator(withNotes)
  .add('Elevation 2', () => <Card element={Quote} elevation={2} />, {
    notes: { markdown: notes }
  })
  .add('Elevation 4', () => <Card element={Quote} elevation={2} />, {
    notes: { markdown: notes }
  })
  .add('Elevation 5', () => <Card element={Quote} elevation={2} />, {
    notes: { markdown: notes }
  })
