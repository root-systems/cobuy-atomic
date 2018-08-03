import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Button from '.'

//
storiesOf('Atoms|A001', module)
  .add('Default', () => (
    <Button buttonTitle={'default button'} color={'default'} />
  ))
  .add('Primary', () => (
    <Button buttonTitle={'primary button'} color={'primary'} />
  ))
  .add('Secondary', () => (
    <Button buttonTitle={'secondary button'} color={'secondary'} />
  ))
