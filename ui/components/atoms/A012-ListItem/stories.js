import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import ListItem from '.'
import ListItemText from '../A011-ListItemText'
import Icon from '../../particles/P001-Icon'

// List of stories of use cases for atom
storiesOf('Atoms|A012 - List Item', module)
  .add('Primary text', () => (
    <ListItem>
      <ListItemText primary='List item text' />
    </ListItem>
  ))
  .add('Primary & Secondary text', () => (
    <ListItem>
      <ListItemText primary='List item text' secondary='Secondary text' />
    </ListItem>
  ))
  .add('Primary text & Icon', () => (
    <ListItem>
      <Icon iconname='settings' />
      <ListItemText primary='Settings' />
    </ListItem>
  ))
  .add('Icon only', () => (
    <ListItem>
      <Icon iconname='settings' />
    </ListItem>
  ))
