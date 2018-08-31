import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import TextFieldLabel from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A010 - TextFieldLabel', module)
  .addDecorator(withNotes)
  .add('Default', () =>
    <TextFieldLabel
      id='1'
      type='text'
      name='fullName'
      placeholder='Daniel Lewis'
      label='Your wonderful name'
    />,
  {notes: { markdown: notes }
  })
  .add('HelpText & Error', () =>
    <TextFieldLabel
      id='1'
      type='text'
      name='favouriteTea'
      placeholder='assam, green, jasmine...'
      label='Favourite tea'
      error
      helperText='Fillout your description!!!'
    />,
  {notes: { markdown: notes }
  })
