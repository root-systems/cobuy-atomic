import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import ListItem from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A012v2 - List Item', module)
  .add('Icon only', () => (
    <ListItem
      iconname='add'
    />
  ))
  .add('show all', () => (
    <ListItem
      iconname='add'
      secondarytext='Secondary text all'
    />
  ))
  // .add('Primary text only', () => (
  //   <ListItem
  //     iconname='ad'
  //     primarytext='Primary text'
  //     secondarytext='Secondary text'
  //   />
  // ))
  // .add('Icon & Primary text', () => (
  //   <ListItem
  //     primarytext='Primary text'
  //     iconname='add'
  //   />
  // ))
  // .add('Icon, Primary & Secondary text', () => (
  //   <ListItem
  //     iconname='add'
  //     primarytext='Primary text'
  //     secondarytext='Secondary text'
  //   />
  // ))
