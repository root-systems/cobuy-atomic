import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Button from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A001 - Button', module)
  .add('Ok Button', () => (
    <Button buttonTitle={'Ok'} color={'default'} />
  ))
  .add('Participate Order Button', () => (
    <Button buttonTitle={'Participate Order'} color={'default'} />
  ))