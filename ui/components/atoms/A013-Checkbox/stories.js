import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import Checkbox from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A013 - Checkbox', module)
  .addDecorator(withNotes)
  .add('Default Checkbox', () => (
    <Checkbox value='checkboxValue' id='check1' ariaLabel='Check Default' />
  ))
  .add('Checkbox Checked', () => (
    <Checkbox
      value='checkboxValue'
      id='check2'
      ariaLabel='Check your check'
      checked
    />
  ))
  .add('Checkbox Disabled', () => (
    <Checkbox
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
        value='open'
        id='menu1'
        ariaLabel='Close menu'
        indeterminate='true'
      />
    ),
    { notes: { markdown: notes } }
  )
