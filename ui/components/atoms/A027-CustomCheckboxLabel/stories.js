import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import CheckboxLabel from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A027 - CustomCheckboxLabel', module)
  .addDecorator(withNotes)
  .add('Checkbox custom icon', () => (
    <CheckboxLabel
      label='Custom icon'
      value='checkboxValue'
      id='check1'
      ariaLabel='Custom icon'
    />
  ), { notes: { markdown: notes } })
  .add('Checkbox custom icon, Checked', () => (
    <CheckboxLabel
      label='Custom icon checked'
      value='checkboxValue'
      id='check2'
      ariaLabel='Check your check'
      checked
    />
  ))
  .add('Checkbox custom icon, Label left', () => (
    <CheckboxLabel
      label='Custom icon, left label'
      value='checkboxValue'
      id='check2'
      ariaLabel='Check your check'
      labelPlacement='start'
    />
  ))
  .add('Checkbox custom icon, Disabled', () => (
    <CheckboxLabel
      label='Custom icon, disabled'
      value='checkboxValue'
      id='check3'
      ariaLabel='Disabled Check'
      disabled
    />
  ))
