import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import TextArea from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A011 - TextArea', module)
  .addDecorator(withNotes)
  .add('Default', () =>
    <TextArea
      id='1'
      type='text'
      name='multiline'
      placeholder='Fill out some text here...'
    />,
  {notes: { markdown: notes }
  })
  .add('HelpText', () =>
    <TextArea
      id='1'
      type='text'
      name='multiline'
      placeholder='Fill out some text here...'
      helperText='Enter some text!'
      error
    />,
  {notes: { markdown: notes }
  })
