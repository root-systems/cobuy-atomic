import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import SwitchLabel from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A024 - SwitchLabel', module)
  .addDecorator(withNotes)
  .add(
    'Default switch',
    () => (
      <SwitchLabel
        label='this is my switch label'
        value='switchValue'
        id='switch1'
        ariaLabel='Switch default'
      />
    ),
    { notes: { markdown: notes } }
  )
  .add('Default switch, Left label', () => (
    <SwitchLabel
      label='this is my switch label'
      labelPlacement='start'
      value='switchValue'
      id='switch2'
      ariaLabel='Switch checked'
      color='primary'
    />
  ))
  .add('Switch checked', () => (
    <SwitchLabel
      label='this is my switch label'
      value='switchValue'
      id='switch2'
      ariaLabel='Switch checked'
      checked
      color='primary'
    />
  ))
  .add('Switch disabled', () => (
    <SwitchLabel
      label='this is my switch label'
      value='switchValue'
      id='switch3'
      ariaLabel='Disabled switch'
      disabled
    />
  ))
