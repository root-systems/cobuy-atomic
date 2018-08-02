import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Icon from '@material-ui/core/Icon'
import AppBar from '@material-ui/core/AppBar'

import Button from '.'
import notes from './notes.md'

storiesOf('Atoms|A004', module).addDecorator(withNotes).add('App bar', () => (
  <div>
    <AppBar position='static' color={'default'}>
      <Icon color='secondary'>
        arrow_back_ios
      </Icon>
      appBarTitle={'App bar title'}
    </AppBar>
  </div>
), { notes: { markdown: notes } })
