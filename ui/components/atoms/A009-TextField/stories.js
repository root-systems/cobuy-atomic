import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import TextField from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A009 - TextField', module)
  .addDecorator(withNotes)
  .add('Default', () =>
    <TextField
      id='1'
      type='text'
      name='name'
      placeholder='placeholder'
    />,
  {notes: { markdown: notes }
  })
  .add('Required', () =>
    <TextField
      id='1'
      type='text'
      name='name'
      placeholder='placeholder'
      required
    />,
  {notes: { markdown: notes }
  })
  .add('HelpText & Error', () =>
    <TextField
      id='1'
      type='text'
      name='name'
      placeholder='placeholder'
      error
      helperText='This is an error helper text'
    />,
  {notes: { markdown: notes }
  })
  .add('Password type', () =>
    <TextField
      id='1'
      type='password'
      name='name'
      placeholder='placeholder'
    />,
  {notes: { markdown: notes }
  })
