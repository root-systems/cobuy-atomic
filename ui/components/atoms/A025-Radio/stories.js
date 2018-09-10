import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import Radio from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A025 - Radio', module)
  .addDecorator(withNotes)
  .add('Default radio', () => (
    <Radio
      value='radioValue'
      id='radio1'
      ariaLabel='Radio default'
      color='secondary'
    />
  ),
  { notes: { markdown: notes } })
  .add('Radio checked', () => (
    <Radio
      value='radioValue'
      id='radio2'
      ariaLabel='Radio checked'
      checked
      color='primary'
    />
  ))
  .add('Radio disabled', () => (
    <Radio
      value='radioValue'
      id='radio3'
      ariaLabel='Disabled radio'
      disabled
    />
  ))
  .add('Radio disabled checked', () => (
    <Radio
      value='radioValue'
      id='radio4'
      ariaLabel='Radio disable checked'
      disabled
      checked
    />
  ))
