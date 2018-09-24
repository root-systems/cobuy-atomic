import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import ListItem from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A012 - List Item', module)
  .add('Icon only', () => (
    <ListItem
      iconname='add'
    />
  ))
  .add('Primary text only', () => (
    <ListItem
      primarytext='primary text only'
    />
  ))
  .add('Primary and Secondary text', () => (
    <ListItem
      primarytext='Primary text'
      secondarytext='Secondary text'
    />
  ))
  .add('Show all elements', () => (
    <ListItem
      iconname='add'
      primarytext='Primary text (all)'
      secondarytext='Secondary text (all)'
    />
  ))
