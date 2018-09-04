import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import TextAreaLabel from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A012 - TextAreaLabel', module)
  .addDecorator(withNotes)
  .add(
    'Default',
    () => (
      <TextAreaLabel
        id='1'
        type='text'
        name='multiline'
        label='Your wonderful thought'
      />
    ),
    {
      notes: { markdown: notes }
    }
  )
  .add(
    'HelpText & Error',
    () => (
      <TextAreaLabel
        id='1'
        type='text'
        name='name'
        placeholder='yummy, cosy, hot...'
        label='Describe Tea'
        error
        helperText='Fillout your description!!!'
      />
    ),
    {
      notes: { markdown: notes }
    }
  )
