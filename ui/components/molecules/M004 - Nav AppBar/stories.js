import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Button from '.'

// List of stories of use cases for atom
storiesOf('Molecules|M004 - Nav AppBar', module)
  .add('Default', () => (
    <Button buttonTitle={'default button'} color={'default'} />
  ))