import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import Checkbox from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A012 - Checkbox with label', module)
  .addDecorator(withNotes)
  .add('Default Checkbox', () => (
    <Checkbox
      label='Checkers'
      value='checkboxValue'
      id='check1'
      ariaLabel='Check Default'
    />
  ))
  .add('Checkbox Checked', () => (
    <Checkbox
      label='I have a dog'
      value='checkboxValue'
      id='check2'
      ariaLabel='Check your check'
      checked
    />
  ))
  .add('Checkbox Disabled', () => (
    <Checkbox
      label='But I love cats'
      value='checkboxValue'
      id='check3'
      ariaLabel='Disabled Check'
      disabled
    />
  ))
  .add(
    'Checkbox Minus',
    () => (
      <Checkbox
        label='The possibilities are unclear'
        value='open'
        id='menu1'
        ariaLabel='Close menu'
        indeterminate='true'
      />
    ),
    { notes: { markdown: notes } }
  )
