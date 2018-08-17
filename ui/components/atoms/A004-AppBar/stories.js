import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import AppBar from '.'

import notes from './readme.md'

storiesOf('Atoms|A004 - AppBar', module)
  .addDecorator(withNotes)
  .add(
    'App bar',
    () => (
      <AppBar color='default' appBarTitle='App bar title' />
    ),
    { notes: { markdown: notes } }
  )
