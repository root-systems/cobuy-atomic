import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import IconButton from '.'
import notes from './notes.md'

storiesOf('@example|atoms/IconButton', module)
  .addDecorator(withNotes)
  .add('Big Red', () => <IconButton />, { notes: { markdown: notes } })
  .add('disabled', () => <IconButton disabled />, {
    notes: { markdown: notes }
  })
