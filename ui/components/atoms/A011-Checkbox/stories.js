import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Checkbox from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A011 - Checkbox', module)
  .add('Default Checkbox', () => (
    <Checkbox value='checkboxValue' />
  ))
  .add('Checkbox Checked', () => (
    <Checkbox value='checkboxValue' checked />
  ))
  .add('Checkbox Disabled', () => (
    <Checkbox value='checkboxValue' disabled />
  ))
  .add('Checkbox indeterminate', () => (
    <Checkbox value='checkboxValue' />
  ))
