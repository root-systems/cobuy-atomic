import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import ListItem from '.'
import ListItemText from '../A011-ListItemText'

// List of stories of use cases for atom
storiesOf('Atoms|A012 - List Item', module)
  .add('List item, Text', () => (
    <ListItem button>
      <ListItemText primary='List item text' secondary='Secondary text' />
    </ListItem>
  ))
