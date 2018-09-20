import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import ListItemText from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A011 - List item text', module)
  .add('Primary text', () => (
    <ListItemText
      primary='Primary text'
    />
  ))
  .add('Primary & Secondary text', () => (
    <ListItemText
      primary='Primary text'
      secondary='Secondary text'
    />
  ))
