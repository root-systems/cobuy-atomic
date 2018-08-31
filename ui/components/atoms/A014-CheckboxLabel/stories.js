import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import CheckboxLabel from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A014 - CheckboxLabel', module)
  .addDecorator(withNotes)
  .add('Default', () => (
    <CheckboxLabel
      label='Checkers'
      value='checkboxValue'
      id='check1'
      ariaLabel='Check Default'
    />
  ))
  .add('Checked', () => (
    <CheckboxLabel
      label='I have a dog'
      value='checkboxValue'
      id='check2'
      ariaLabel='Check your check'
      checked
    />
  ))
  .add('Label Left', () => (
    <CheckboxLabel
      label='I have a dog'
      value='checkboxValue'
      id='check2'
      ariaLabel='Check your check'
      checked
      labelPlacement='start'
    />
  ))
  .add('Disabled', () => (
    <CheckboxLabel
      label='But I love cats'
      value='checkboxValue'
      id='check3'
      ariaLabel='Disabled Check'
      disabled
    />
  ))
  .add(
    'Minus',
    () => (
      <CheckboxLabel
        label='The possibilities are unclear'
        value='open'
        id='menu1'
        ariaLabel='Close menu'
        indeterminate='true'
      />
    ),
    { notes: { markdown: notes } }
  )
