import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Button from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A001 - Buttons', module)
  .add('Default', () => (
    <Button buttonTitle={'default button'} color={'default'} />
  ))
  .add('Primary', () => (
    <Button buttonTitle={'primary button'} color={'primary'} />
  ))
  .add('Secondary', () => (
    <Button buttonTitle={'secondary button'} color={'secondary'} />
  ))