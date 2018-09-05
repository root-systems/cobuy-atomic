import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import Switch from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A022 - Switch', module)
  .addDecorator(withNotes)
  .add('Default switch', () => (
    <Switch
      value='switchValue'
      id='switch1'
      ariaLabel='Switch default'
      color='secondary'
    />
  ),
  { notes: { markdown: notes } })
  .add('Switch checked', () => (
    <Switch
      value='switchValue'
      id='switch2'
      ariaLabel='Switch checked'
      checked
      color='primary'
    />
  ))
  .add('Switch disabled', () => (
    <Switch
      value='switchValue'
      id='switch3'
      ariaLabel='Disabled switch'
      disabled
    />
  ))
  .add('Switch disabled checked', () => (
    <Switch
      value='switchValue'
      id='switch4'
      ariaLabel='Switch disable checked'
      disabled
      checked
    />
  ))
