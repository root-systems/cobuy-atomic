import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import ListItem from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A012v2 - List Item', module)
  .add('Primary text', () => (
    <ListItem
      primarytext='List item text'
      iconname='add'
    />
  ))
