import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import Input from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A010 - Input:Label', module)
  .addDecorator(withNotes)
  .add('Input', () =>
    <Input
      id='1'
      type='text'
      name='fullName'
      placeholder='Daniel Lewis'
      label='Your wonderful name'
    />,
  {notes: { markdown: notes }
  })
  .add('Input : Multiline', () =>
    <Input
      id='1'
      type='text'
      name='multiline'
      label='Your wonderful thought'
      multiline
      rowsMax='10'
      value='When things happen - enjoy them. \n\nThey are little gifts.'
    />,
  {notes: { markdown: notes }
  })
