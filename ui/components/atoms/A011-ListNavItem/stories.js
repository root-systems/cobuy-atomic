import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Import index.js from the same folder
import ListItem from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A011 - List Nav Item', module)
  .add('Primary text', () => (
    <ListItem
      primaryText='Primary text'
      handleClick={action({ onClick: 'clicked' })}
    />
  ))
  .add('Primary & Secondary text', () => (
    <ListItem
      primaryText='Primary text'
      secondaryText='Secondary text'
      handleClick={action({ onClick: 'clicked' })}
    />
  ))
