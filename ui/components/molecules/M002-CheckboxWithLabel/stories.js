import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import FormControlLabel from '.'
import Checkbox from '../../atoms/A011-Checkbox'

// List of stories of use cases for atom
storiesOf('Molecules|M002 - Checkbox with label', module).add('Default', () => (
  <FormControlLabel label='This is the label of checkbox' labelPlacement='end'>
    <Checkbox />
  </FormControlLabel>
))
