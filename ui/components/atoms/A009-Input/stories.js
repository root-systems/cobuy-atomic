import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import TextField from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A009 - Input', module)
  .addDecorator(withNotes)
  .add('Input : Without label', () =>
    <TextField id='1' type='text' name='name' placeholder='placeholder' />,
  {notes: { markdown: notes }
  })
  .add('Input : With label', () =>
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Name'
      placeholder='placeholder'
    />,
  {notes: { markdown: notes }
  })
  .add('Input : With helper text', () =>
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Name'
      placeholder='placeholder'
      helperText='This is a helper text'
    />,
  {notes: { markdown: notes }
  })
  .add('Input : Required', () =>
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Name'
      placeholder='placeholder'
      required
    />,
  {notes: { markdown: notes }
  })
  .add('Input : Error', () =>
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Name'
      placeholder='placeholder'
      error
      helperText='This is an error helper text'
    />,
  {notes: { markdown: notes }
  })
  .add('Input : Password type', () =>
    <TextField
      id='1'
      label='this is a label'
      type='password'
      name='Name'
      placeholder='placeholder'
    />,
  {notes: { markdown: notes }
  })
  .add('Input : Multiline', () =>
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Multiline'
      placeholder='Multiline'
      multiline
      rows='10'
      value='When things happen - enjoy them. \n\nThey are little gifts.'
    />,
  {notes: { markdown: notes }
  })
