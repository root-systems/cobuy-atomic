import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import ListItem from '.'
import ListItemText from '../A011-ListItemText'
import Icon from '../../particles/P001-Icon'

// List of stories of use cases for atom
storiesOf('Atoms|A012 - List Item', module)
  .add('List item', () => (
    <ListItem button>
      <Icon iconname='cancel' />
      <ListItemText primary='Cancel' />
    </ListItem>
  ))
