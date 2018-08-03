import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Icon from '@material-ui/core/Icon'
import AppBar from '@material-ui/core/AppBar'

import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A004', module).addDecorator(withNotes).add('App bar', () => (
  <div>
    <AppBar position='static' color='default' appBarTitle='App bar title' />
  </div>
), { notes: { markdown: notes } })
