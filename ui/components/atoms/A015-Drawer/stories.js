import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import Drawer from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A015 - Drawer', module)
  .addDecorator(withNotes)
  .add('Icon avatar', () =>
    <Drawer />,
  { notes: { markdown: notes } })
