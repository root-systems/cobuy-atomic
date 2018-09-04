import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import ResponsiveDrawer from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Molecules|M003 - Responsive Drawer', module)
  .addDecorator(withNotes)
  .add('Icon avatar', () =>
    <ResponsiveDrawer />,
  { notes: { markdown: notes } })
