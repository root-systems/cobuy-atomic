import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import RadioField from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A106 - RadioField', module)
  .addDecorator(withNotes)
  .add(
    'Default radio',
    () => (
      <RadioField
        label='this is my radio label'
        value='radioValue'
        id='radio1'
        ariaLabel='Radio default'
      />
    ),
    { notes: { markdown: notes } }
  )
  .add('Default radio, Left label', () => (
    <RadioField
      label='this is my radio label'
      labelPlacement='start'
      value='radioValue'
      id='radio2'
      ariaLabel='Radio checked'
      color='primary'
    />
  ))
  .add('Radio checked', () => (
    <RadioField
      label='this is my radio label'
      value='radioValue'
      id='radio2'
      ariaLabel='Radio checked'
      checked
      color='primary'
    />
  ))
  .add('Radio disabled', () => (
    <RadioField
      label='this is my radio label'
      value='radioValue'
      id='radio3'
      ariaLabel='Disabled radio'
      disabled
    />
  ))
