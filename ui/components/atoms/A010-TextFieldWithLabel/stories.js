import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import TextField from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A010 - TextField:Label', module)
  .addDecorator(withNotes)
  .add('TextField', () =>
    <TextField
      id='1'
      type='text'
      name='fullName'
      placeholder='Daniel Lewis'
      label='Your wonderful name'
    />,
  {notes: { markdown: notes }
  })
